import Vue from 'vue';
document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      rates:[],
      startCurrency:"",
      endCurrency:0,
      beforeconvertion:0,
      afterconvertion:0,
    },
    mounted(){
        this.fetchRates()
      },
    computed: {
        convertFromEuros: function() {
          const euroConversion = this.startCurrency*this.beforeconvertion
           return euroConversion.toFixed(2)
      },
    },
    methods:{
      fetchRates: function(){
        const request = fetch("https://api.exchangeratesapi.io/latest")
        .then(response => response.json())
        .then(data => this.rates = data.rates);
      },
    }
  });
});
