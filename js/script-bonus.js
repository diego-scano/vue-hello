var app = new Vue({
  el: '#root',
  data: {
    backgroundImg: 'img/bg-bonus.jpg',
    squaloBianco: 'img/squalo-bianco.jpg',
    squaloTigre: 'img/squalo-tigre.jpg',
    squaloMako: 'img/squalo-mako.png',
    squaloLeuca: 'img/squalo-leuca.jpg',
    squaloToro: 'img/squalo-toro.jpg',
    textColor: 'white'
  },
  methods: {
    ouch: function() {
      alert('OUCH!');
      this.textColor = '#8a0303';
    }
  }
})
