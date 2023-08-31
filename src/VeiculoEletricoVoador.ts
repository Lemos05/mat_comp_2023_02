import VeiculoEletrico from './VeiculoEletrico';

class VeiculoEletricoVoador extends VeiculoEletrico {
    altitude: number;

    constructor(longitude: number, latitude: number, bateria: number, altitude: number) {
        super(longitude, latitude, bateria);
        this.altitude = altitude;
    }

    alterarAltitude(deltaAltitude: number): void {
        this.altitude += deltaAltitude;
    }
}

export default VeiculoEletricoVoador;
