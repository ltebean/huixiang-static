var seaport = require('seaport-bridge');
var $ = require('zepto');
var fastclick = require('fastclick');

fastclick(document.body);

seaport.connect(function dataHandler(data) {

  console.log('receive data:' + data);

}, function(bridge) {
  
  var http=bridge.http;

  http.get({
    domain:'huixiang.im',
    path:'/api/pieces'
  },function(pieces){
    if(!pieces || pieces.length===0){
      alert('error');
      return;
    }
    pieces.forEach(function(piece){
      $('<div>').text(piece.id).appendTo($('body'))
    })
  })
 


})


