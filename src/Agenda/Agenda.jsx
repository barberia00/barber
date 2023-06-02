import 'animate.css'
import './Agenda.css'
import WOW from 'wow.js'
import { useEffect,useState } from 'react'
import Swal from 'sweetalert2'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {agendarCita} from "../services/servicioAgendar"


export function Agenda(){

    const[nombre, setNombre]=useState('')
    const[correo, setCorreo]=useState('')
    const[telefono, setTelefono]=useState('')
    const[hora, setHora]=useState('')
    const[dia, setDia]=useState('')

    const[errores,setErrores]=useState({})
    const [data, setData] = useState({})
    const [envioFormulario,setEnvioformulario]=useState(false)

    useEffect(function(){
        console.log(errores)
        console.log(Object.keys(errores))
        if(Object.keys(errores).length>0){ // Aca tengo errores
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Tienes campos sin rellenar!',
              })
        }else if(envioFormulario){ // No hay errores
            let datosEnvio={
                nombre,
                correo,
                telefono,
                hora,
                dia,
                tipo:1
               }
               console.log(datosEnvio)
               agendarCita(datosEnvio).then(function(respuesta){
                console.log(respuesta)
               })

            Swal.fire(
                'Listo!',
                'Se ha reservado tu cita satisfactoriamente!',
                'success'
              )
        }
    },[errores,envioFormulario])

    function validarFormulario(evento){
        evento.preventDefault()
        let listaErrores= {}

        if(!nombre){
         listaErrores.nombre="El nombre es obligatorio"   
        }

        if(!correo){
            listaErrores.correo="El correo es obligatorio"
        }

        if(!telefono){
            listaErrores.telefono="El telefono es obligatorio"   
           }

        if(!dia){
            listaErrores.dia="La fecha es obligatoria"   
           }

        if(!hora === 'DEFAULT'){
            listaErrores.hora="Seleccione una hora valida"   
           }

        setErrores(listaErrores)
        if(Object.keys(listaErrores).length==0){
            setEnvioformulario(true)
        }

    }

useEffect(function(){
        const wow = new WOW()
    },[])
       
   
    return(
        <>
        <main>
            <section>
                <div className="bannerAgenda">
                <form onSubmit={validarFormulario}>
                         <div className='formulario'>
                            <h1 className='text-center text-white wow animate_animated animate_fadeInDownBig'>RESERVA TU TURNO</h1>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1">
                                            <i className="bi bi-person-circle"></i>
                                        </span>
                                        <input 
                                         type="text" 
                                         className={`form-control ${errores.nombre?'is-invalid':''}`}
                                         placeholder="Nombre Cliente"
                                         id='nombre'
                                         value={nombre}
                                         onChange={(evento)=>{
                                             setNombre(evento.target.value)
                                         }} />
                                         <div class="invalid-feedback">Por favor digite tu nombre.</div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1"><i class="bi bi-envelope-check-fill"></i></span>
                                        <input 
                                         type="email" 
                                         className={`form-control ${errores.correo?'is-invalid':''}`} 
                                         value={correo}
                                         placeholder="Correo cliente"
                                         onChange={(evento)=>{
                                    setCorreo(evento.target.value)
                                }} />
                                <div class="invalid-feedback">Por favor digite tu correo.</div>
                                    </div>
                                </div>
                            </div>
                                <div className="row">
                                <div className="col-12">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1"><i class="bi bi-phone-fill"></i></span>
                                        <input 
                                        type="number" 
                                        className={`form-control ${errores.telefono?'is-invalid':''}`} 
                                        value={telefono}
                                        placeholder="Telefono Cliente"
                                        onChange={(evento)=>{
                                            setTelefono(evento.target.value)
                                        }} />
                                        <div class="invalid-feedback">Por favor digite tu número.</div>
                                    </div>
                                </div>
                            </div>
                               <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1"><i class="bi bi-calendar-check-fill"></i></span>
                                        <input 
                                         type="date" 
                                         className={`form-control ${errores.dia?'is-invalid':''}`} 
                                         value={dia}
                                         onChange={(evento)=>{
                                            setDia(evento.target.value)
                                        }} />
                                        <div class="invalid-feedback">Por favor selecciona una fecha.</div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1"><i class="bi bi-alarm-fill"></i></span>
                                        <select
                                            id='hora'
                                            onChange={(evento) => {
                                                setHora(evento.target.value);
                                              }}
                                            className={`form-select ${errores.hora? "is-invalid" : ""}`} 
                                            value={hora}
                                            defaultValue={'DEFAULT'}>
                                            <option value="DEFAULT">Hora:</option>
                                            <option value="1">6:30 am</option>
                                            <option value="2">7:00 am</option>
                                            <option value="3">7:30 am</option>
                                            <option value="3">9:00 am</option>
                                            <option value="3">9:30 am</option>
                                            <option value="3">12:30 am</option>
                                            <option value="3">3:30 am</option>
                                            <option value="3">5:30 am</option>
                                            <option value="3">10:30 am</option>
                                        </select>
                                           <div class="invalid-feedback">Por favor selecciona una hora.</div>
                                    </div>
                                </div>
                               
                            </div>
                            <div className="row">
                               
                            </div>
                            </div><div className="col-12 col-md-12">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1"><i class="bi bi-telegram"></i></span>
                                        <input type="submit" className="form-control" placeholder="Registrarse" />
                                    </div>
                                </div>

</form>
                 
                </div>
            </section>
          </main>
       
        </>
    )
}
