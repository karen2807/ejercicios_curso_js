class Estudiante  {
    nombre;
    asignatura;
    constructor (nombre,asignatura){
        this.nombre = nombre
        this.asignatura = asignatura
    }
    
    obtenDatos(nombre,asignatura) {
        
        console.log('Nombre',nombre, 'Asignaturas',asignatura)
    }
}

const es = new Estudiante('Karen',['Javascript','HTML','CSS'])
es.obtenDatos('Karen',['Javascript','HTML','CSS'])
