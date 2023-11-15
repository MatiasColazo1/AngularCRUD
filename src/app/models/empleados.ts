export class Empleados {
    id: number;
    nombre: string;
    pais: string;

    constructor(id: number = 0, nombre: string = '', pais: string = '') {
        this.id = id;
        this.nombre = nombre;
        this.pais = pais;
    }
}
