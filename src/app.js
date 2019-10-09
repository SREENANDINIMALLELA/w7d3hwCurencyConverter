import Vue from 'vue';
document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      rates:[],
      convertionRate:0,
      eroAmount:0,
      selectedForeignRate:0,

      foreignAmount:0,
    },
    mounted(){
        this.fetchRates()
      },
    computed: {
        convertFromEuros: function() {
          const euroConversion = this.convertionRate*this.eroAmount
           return euroConversion.toFixed(2)
      },
      convertToEuros: function() {
        const euroConversion = this.foreignAmount/this.selectedForeignRate
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
