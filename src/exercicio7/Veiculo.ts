class Veiculo {
    longitude: number;
    latitude: number;

    constructor(longitude: number, latitude: number) {
        this.longitude = longitude;
        this.latitude = latitude;
    }

    mover(deltaLongitude: number, deltaLatitude: number): void {
        this.longitude += deltaLongitude;
        this.latitude += deltaLatitude;
    }
}

export default Veiculo;