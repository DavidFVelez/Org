import "./ListaOpciones.css"

const ListaOpciones = (props) =>{

    //Metodo map -> arreglo.map( (equipo, index) => {
    //    return <option></option>
    //})
    const equipos  = [
        "Programación",
        "Front End",
        "Data Science",
        "Devops",
        "UX y Diseño",
        "Móvil",
        "Innovación y Gestión"
    ]

    const manejarCambio = (e) =>{
        props.actualizarEquipos(e.target.value)
    }

    return <div className="lista-opciones">
        <label>{props.titulo}</label>
        <select value={props.valor} onChange={manejarCambio}>
            <option value="" disabled defaultValue="" >Seleccionar equipo</option>
            {equipos.map((equipo, index) => <option key = {index} value ={equipo} >{equipo}</option>)}
        </select>
    </div>

}

export default ListaOpciones