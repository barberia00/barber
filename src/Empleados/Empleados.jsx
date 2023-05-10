import WOW from 'wow.js';
import { useEffect } from "react";
import 'animate.css';
import './Empleados.css'

export function Empleados() {
    let empleados = [
        {
            id: 1,
            nombre: "Carlos Andres",
            foto: "https://firebasestorage.googleapis.com/v0/b/magicbarber-3ae8a.appspot.com/o/empleado1.jpg?alt=media&token=4c38ea86-8374-47be-a5f4-df0e1d41709f",
            Edad: 32,
            Talento: "Corte de Cabello",
            Experiencia: "1 años"
        },
        {
            id: 2,
            nombre: "Cristian",
            foto: "https://firebasestorage.googleapis.com/v0/b/magicbarber-3ae8a.appspot.com/o/empleado4.webp?alt=media&token=383e021e-e166-456b-b64d-9a30ee4d30b8",
            Edad:45,
            Talento: "Corte de Cabello",
            Experiencia: "2 años"
        },
        {
            id: 3,
            nombre: "Brayan",
            foto: "https://firebasestorage.googleapis.com/v0/b/magicbarber-3ae8a.appspot.com/o/empleado3.jpg?alt=media&token=f7c79415-ac58-4cde-ae32-9084fd7c0935",
            Edad: 31,
            Talento: "Corte de Barba",
            Experiencia: "3 años"
        },
        {
            id: 4,
            nombre: "Juan Pablo",
            foto: "https://firebasestorage.googleapis.com/v0/b/magicbarber-3ae8a.appspot.com/o/empleado2.webp?alt=media&token=8856cbc0-a4cb-4892-820e-a403e8383222",
            Edad: 37,
            Talento: "Corte de Cabello y Corte de Barba",
            Experiencia: "22 años"
        },
    ];
    useEffect(function () {
        const wow = new WOW();
        wow.init();
      }, []);
    return (
    <>
        <div className='container-fluid bgfc-img'>
            <section>
                <div className="container-fluid bgs-img mt-5">
                    <h1 className="text-center text-uppercase text-light fw-bold fst-italic wow animate__animated animate__backInRight">Nuestros Colaboradores</h1>
                    <section className='bg-dark'>
                        {/* <p className='text-light fw-bold fst-italic text-center blancoNegro'>Nuestro servicios están diseñados para brindarle una experiencia de barbería de calidad en un ambiente relajado y acogedor. Nuestros barberos altamente capacitados se asegurarán de que su servicio sea personalizado para satisfacer sus necesidades y estilo individual. <br /><br />

                            Comenzamos el servicio con una consulta personalizada para entender su estilo, preferencias y necesidades específicas. A continuación, aplicamos técnicas de corte de precisión y estilos personalizados para crear un corte de cabello perfecto que refleje su personalidad única.<br /><br />

                            Durante el servicio, nuestros barberos utilizarán herramientas de alta calidad y productos para el cuidado del cabello para asegurar un resultado perfecto y duradero. Además, ofrecemos servicios adicionales como afeitado de barba y cuello para completar la experiencia de barbería completa.<br /><br />

                            En nuestro salón, valoramos la relación con nuestros clientes y nos esforzamos por brindar un excelente servicio al cliente. Siéntase libre de preguntar cualquier pregunta y háganos saber cómo podemos mejorar su experiencia. ¡Esperamos darle la bienvenida en nuestro salón para su próximo corte de cabello!</p> */}
                    </section>

                    <div className="row row-cols-2 row-cols-md-3 g-3 mt-5 justify-content-center">
                        {empleados.map(function (empleado) {
                            return (
                                <div key={empleado.id}>
                                    <div className="col m-2">
                                        <div className="h-100 shadow bgs-img text-dark">
                                            <h3 className="fw-bold text-center fst-italic">{empleado.nombre}</h3>
                                            <img
                                                src={empleado.foto}
                                                alt="foto"
                                                className="img-fluid w-100 h-100 blancoNegro wow animate__animated animate__backInUp"
                                            />
                                            <h4 className="fw-bold text-center mt-3">Edad: {empleado.Edad}</h4>
                                            <h5 className="fw-bold m-3">Talento: {empleado.Talento}</h5>
                                            <h5 className="fw-bold m-3">Experiencia: {empleado.Experiencia}</h5>
                                            
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    </>   
    );

}