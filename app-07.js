//app-07.js
const EventEmitter = require('events');
const emitter = new EventEmitter();

var auditarOrigem = function(){
	console.log('Listener de auditoria da origem');
}
var auditarDestino = function(){
	console.log('Listener de auditoria de destino');
}
//emitter.emit('messageLogged');
emitter.on('auditarTransferencia',auditarOrigem);
emitter.on('auditarTransferencia',auditarDestino);

emitter.on('messageLogged',function(){
	console.log('Listener 1 - Mensagem Logada.');
});
emitter.on('messageLogged',function(){
	console.log('Listener 2 - Mensagem Logada.');
});

//..
//if (valor>=1000){
//emitter.emit('messageLogged');
emitter.emit('auditarTransferencia');
//}
//..
