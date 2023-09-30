
import './Equipo.css'

const Equipo = (props) =>{

    return <section className="equipo">
        <h3>{props.datos.titulo}</h3>
        <div className="colaboradores"></div>
    </section>

}

export default Equipo