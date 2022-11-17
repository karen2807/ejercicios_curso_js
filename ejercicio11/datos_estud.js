class Estudiante {
    nombre = "Karen"
    asignatura = ["Javascript", "HTML", "CSS"]

    obtenDatos() {
        return {
            nombre: this.nombre,
            asignatura: this.asignatura
        }
    }
}

const es = new Estudiante()

console.log(es.obtenDatos())
