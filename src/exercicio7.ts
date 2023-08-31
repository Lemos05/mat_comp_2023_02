import VeiculoEletricoVoador from './VeiculoEletricoVoador';

const veiculo = new VeiculoEletricoVoador(0, 0, 80, 1000);
console.log("Altitude inicial:", veiculo.altitude);

veiculo.alterarAltitude(200);
console.log("Altitude após alteração:", veiculo.altitude);

veiculo.mover(10, 20);
console.log("Nova longitude:", veiculo.longitude);
console.log("Nova latitude:", veiculo.latitude);

veiculo.recarregarBateria();
console.log("Bateria recarregada:", veiculo.bateria);