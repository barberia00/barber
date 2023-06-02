import { useState,useEffect } from "react"
import { consultarReservas } from "../services/servicioReservas"
export function Listareservas(){

    // CONFIGURO MIS VARIABLES DE ESTADO
    // Uso para almacenar los datos que lleguen del api
    const[reservas,setReserva]=useState(null)
    const[carga,setCarga]=useState(true)

    // PROGRAMO EL useEffect PARA GARANTIZAR QUE LLAMARE AL SERVICIO SOLO CUANDO CARGUE MI COMPONENTE
    useEffect(function(){},[
        consultarReservas().then(function(respuestaDelBack){
            setReserva(respuestaDelBack.reservas)
            setCarga(false)
        })
    ])

    // PROGRAMO LA INTERFAZ PARA MOSTRAR EL MENSAJE DE CARGA O PARA MOSTRAR LOS DATOS DEL SERVICIO
    if(carga){
        return(
            <>
            <br /><br /><br />
            <h3>Estoy cargando</h3>
            </>
        )
    }else{
        return(
            <>
            <br /><br /><br />
            <div className="container">
                <div className="row row-cols-1 row-cols-md-4 g-3">
                    {
                        reservas.filter(reserva=>reserva.tipo==1).map(function(reserva){
                            return(
                                <div className="col">
                                    <div className="card h-100 shadow">
                                        <h5>Cliente: {reserva.nombre}</h5>
                                        <p>Contacto: {reserva.telefono}</p>
                                        <p>Fecha: {reserva.dia}</p>
                                        <p>Hora: {reserva.hora}</p>
                                        <p>Tipo: {reserva.tipo}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            </>
        )
    }
}