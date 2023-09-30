import { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaOpciones from "../ListaOpciones";
import Boton from "../Boton";

const Formulario = (e) => {
    const [nombre, actualizarNombre] = useState("");
    const [puesto, actualizarPuesto] = useState("");
    const [foto, actualizarFoto] = useState("");
    const [equipo, actualizarEquipos] = useState("");

    const manejarEnvio = (e) => {
        e.preventDefault();
        let datosAEnviar = {
        nombre,
        puesto,
        foto,
        equipo
        };
        console.log("Manejar el envio", datosAEnviar);
    };
    return (
        <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>

            <CampoTexto
            titulo="Nombre"
            placeholder="Ingresar nombre"
            required
            valor={nombre}
            actualizarValor={actualizarNombre}
            />

            <CampoTexto
            titulo="Puesto"
            placeholder="Ingresar puesto"
            required
            valor={puesto}
            actualizarValor={actualizarPuesto}
            />

            <CampoTexto
            titulo="Foto"
            placeholder="Ingresar enlace de foto"
            required
            valor={foto}
            actualizarValor={actualizarFoto}
            />

            <ListaOpciones
            titulo="Equipos"
            valor={equipo}
            actualizarEquipos={actualizarEquipos}
            />
            <Boton>Crear</Boton>
        </form>
        </section>
    );
};

export default Formulario;
