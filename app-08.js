//app-08.js
const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.emit('messageLogged');
emitter.on('messageLogged',function(){
	console.log('Mensagem Logada.');
});
var auditarOrigem = (transferencia) => { //airfoot
	console.log('Listener de auditoria da origem.');
	if(transferencia.contaOrigem == '123') {
	console.log('Notificar piraretagem!');
	}
}

var auditarDestino = function(transferencia){
	console.log('Listener de auditoria do destino');
	if(transferencia.valor>10500);
	console.log('Vender investimento');

}
emitter.on('auditarTransferencia',auditarOrigem);
emitter.on('auditarTransferencia', auditarDestino);
//..
var valor = 11000;
var contaOrigem = '123';
var contaDestino = '456';
//Transferir o valor.
if(valor>=10000) {
	emitter.emit('auditarTransferencia',{
    valor: valor,
    contaOrigem: contaOrigem,
    contaDestino: contaDestino
    });
}
//...
