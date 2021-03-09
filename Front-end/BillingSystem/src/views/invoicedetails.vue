<template>
  <div class="invoice">
    <table id="myTable" cellspacing="0">
        <tr class="top">
          <td id="cname">Quinbay Billing System</td>
          <td id="comp_details" colspan="2">
            Name: {{prod.username}} <br>
            Bill no: {{prod.bill_id}} <br>
            Date: {{prod.date}}
          </td>
        </tr>
        <tr class="info">
          <td colspan="3">
            Quinbay Inc, <br>
            HSR Layout, <br>
            Bangalore -78
          </td>
        </tr>
        <tr id="pmethod">
          <td colspan="3">Payment method: Credit Card</td>
        </tr>
        <tr class="Heading" >
          <td>Item</td>
          <td id="quan">Quantity</td>
          <td id="right">Price</td>
        </tr>
      </table>
    <div>
      <table id="myContent" class="prod">
        <tr v-for="products in productDetails" v-bind:key="products.id">
          <td>{{products.product_name}}</td>
          <td>{{products.quantity}}</td>
          <td>{{products.price}}</td>
        </tr>
      </table>
    </div>
    <p>Total : ₹ {{getTotal}}</p>
    <br><br><br>
    <div id="elementH"></div>
    <button @click="convertHTMLTOPDF" class="download">Download PDF</button>
  </div>
</template>
<script src="https://code.jquery.com/jquery-1.12.3.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.2/jspdf.min.js"></script>
<script>
import axios from 'axios'
import jsPDF  from 'jspdf'
import store from '../store/index.js'
import 'jspdf-autotable'
export default {
  name: 'invoicedetails',
  data () {
    return {
      prod: '',
      productDetails: '',
      sum: '',
      info: [1, 2, 3, 4, 5, 6, 7, 8],
      bid: 0
    }
  },
  computed: {
    getTotal () {
      let sum = 0
      this.productDetails.forEach(e => {
        sum += (e.price * e.quantity)
      })
      return sum
    }
  },
  created () {
    axios
      .get('http://10.177.68.19:808/service2/customerbillingsystem/' + store.state.username + '/orders/' + localStorage.getItem('billid'), { headers: { Authorization: localStorage.getItem('Authorization') } })
      .then(response => {
        console.log(response)
        this.prod = response.data
        this.productDetails = response.data.customResponseDtoList
        console.log(this.productDetails)
      })
      .catch(response =>{
        console.log(response)
      }
      )
  },
  methods: {
    convertHTMLTOPDF () {
    //   var doc = new jsPDF();
    //   let pdfName = 'Bill';
    //   var elementHTML = $('.invoice').html();
    //   var specialElementHandlers = {
    //     '#elementH': function (element, renderer) {
    //       return true;
    //     }
    //   };
    //   doc.fromHTML(elementHTML, 30, 30, {
    //     width: 100,
    //     elementHandlers: specialElementHandlers
    //   }, function () { doc.save('Ticket.pdf'); });
      let doc = new jsPDF();
      doc.autoTable({ html: '#myTable'});
      doc.autoTable({ html: '#myContent'});
      doc.save('bill.pdf');
      this.$router.push('/orders/' + store.state.username)
    }
  },
  mounted () {
  }
}
</script>
<style scoped>
.invoice {
  max-width: 800px;
  margin: auto;
  padding: 30px;
  border: 1px solid #eee;
  box-shadow: 0 0 10px rgba(0, 0, 0, .15);
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 24px;
  color: #555;
}
.invoice table {
  width: 100%;
  line-height: inherit;
  text-align: left;
}
.invoice table td {
  padding: 5px;
  vertical-align: top;
}
#comp_details {
  width: 150px;
  text-align: right;
}
#quan {
  width: 30px;
  text-align: left;
}
#right {
  width: 80px;
  text-align: right;
}
#cname {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 200%;
  width:500px;
}
.prod tr td:nth-child(2) {
  text-align: right;
}
.prod tr td:nth-child(3) {
  width: 140px;
  text-align: right;
}
p {
  text-align: right;
  font-weight: bold;
}
#pmethod {
  font-weight: bold;
}
.Heading {
  background: #eee;
  border-bottom: 1px solid #ddd;
  font-weight: bold;
}
.download {
  height: 30px;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
