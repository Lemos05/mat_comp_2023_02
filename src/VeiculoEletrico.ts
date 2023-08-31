import Veiculo from './Veiculo';
import VeiculoVoador from './Veiculo';

class VeiculoEletrico extends Veiculo {
    bateria: number;

    constructor(longitude: number, latitude: number, bateria: number) {
        super(longitude, latitude);
        this.bateria = bateria;
    }

    recarregarBateria(): void {
        this.bateria = 100;
    }
}

export default VeiculoEletrico;