import 'animate.css'
import './Agenda.css'
import WOW from 'wow.js'
import { useEffect } from 'react'
export function Agenda(){

useEffect(function(){
        const wow = new WOW()
    },[])
       
   
    return(
        <>
        <main>
            <section>
                <div className="bannerAgenda">
                <form>
                         <div className='formulario'>
                            <h1 className='text-center text-white wow animate_animated animate_fadeInDownBig'>RESERVA TU TURNO</h1>
                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1">
                                            <i className="bi bi-person-circle"></i>
                                        </span>
                                        <input type="text" className="form-control" placeholder="Nombre Cliente" />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1"><i class="bi bi-envelope-check-fill"></i></span>
                                        <input type="text" className="form-control" placeholder="Correo cliente" />
                                    </div>
                                </div>
                            </div>

<div className="row">
                                <div className="col-12">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1"><i class="bi bi-phone-fill"></i></span>
                                        <input type="text" className="form-control" placeholder="Telefono Cliente" />
                                    </div>
                                </div>
                            </div>

<div className="row">
                                <div className="col-12 col-md-6">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1"><i class="bi bi-calendar-check-fill"></i></span>
                                        <input type="date" className="form-control" placeholder="Telefono Cliente" />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
                                    <div className="input-group mb-3">
                                        <span className="input-group-text" id="basic-addon1"><i class="bi bi-clock-fill"></i></span>
                                        <select className="form-select"  defaultValue={'DEFAULT'}>
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
