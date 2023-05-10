import WOW from 'wow.js';
import { useEffect } from "react";
import 'animate.css';
import "./Servicios.css";

export function Servicios() {
  let servicios = [
    {
      id: 1,
      nombre: "Tintura",
      foto: "https://firebasestorage.googleapis.com/v0/b/magicbarber-3ae8a.appspot.com/o/tintura1.jpg?alt=media&token=7ad6501e-0df5-4b85-92a9-becb74da7a9c",
    },
    {
      id: 2,
      nombre: "Cuidado Facial",
      foto: "https://firebasestorage.googleapis.com/v0/b/magicbarber-3ae8a.appspot.com/o/cuidadofacial1.jpg?alt=media&token=c7564685-059f-493e-8947-37d73dcdc7c6",
    },
    {
      id: 3,
      nombre: "Corte de cabello",
      foto: "https://firebasestorage.googleapis.com/v0/b/magicbarber-3ae8a.appspot.com/o/cortecaballero1.jpg?alt=media&token=3bd2662f-6f5e-4dee-92b1-1bf8bdc1cd80",
    },
    {
      id: 4,
      nombre: "Corte de Barba",
      foto: "https://firebasestorage.googleapis.com/v0/b/magicbarber-3ae8a.appspot.com/o/barba1.jpg?alt=media&token=3bef1c40-08e4-4eed-9c48-8a159bc47838",
    },
  ];
  useEffect(function () {
    const wow = new WOW();
    wow.init();
  }, []);
  return (
    <>
      <div className="container-fluid bgfs-img">
        <div
          id="myCarousel"
          className="carousel slide my-5 pt-2"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to={3}
              aria-label="Slide 4"
            />
          </div>
          <div className="carousel-inner text-center">
            <div className="carousel-item active">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/magicbarber-3ae8a.appspot.com/o/Tinturado.png?alt=media&token=3b6abc55-411b-492e-bf9b-7bb1f5522c95"
                alt=""
                className="img-fluid w-100"
              />
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Tintura</h1>
                  <p>
                    Nos caracterizamos por ser lo mas profesionales a la hora de
                    diseñar tu estilo de color deseado
                  </p>
                  <p>
                    {/* <a className="btn btn-lg btn-primary" href="#">
                    Ver Estilos
                  </a> */}
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/magicbarber-3ae8a.appspot.com/o/Cuidado_facial.png?alt=media&token=8938c1d8-af43-495b-8a75-9f4179740e9a"
                alt="Cuidado facial"
                className="img-fluid  w-100"
              />
              <div className="container">
                <div className="carousel-caption">
                  <h1>Cuidado facial.</h1>
                  <p>
                    Tambien nos preocupamos por que tengas una piel bien cuidada.
                  </p>
                  <p>
                    {/* <a className="btn btn-lg btn-primary" href="#">
                    Ver Estilos
                  </a> */}
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/magicbarber-3ae8a.appspot.com/o/Corte_cabello.png?alt=media&token=2c8be3cd-1c55-4e2b-ab27-6b76c690de29"
                className="img-fluid  w-100"
              />
              <div className="container">
                <div className="carousel-caption text-end">
                  <h1 className="text-dark">Corte de Cabello.</h1>
                  <p>
                    Nos caracterizamos por ser lo mas profesionales a la hora de
                    diseñar tu estilo en el momento de realizar tu corte de cabello
                  </p>
                  <p>
                    {/* <a className="btn btn-lg btn-primary" href="#">
                    Ver Estilos
                  </a> */}
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/magicbarber-3ae8a.appspot.com/o/Corte_barba.png?alt=media&token=a45cb21e-e3bb-4f4c-8c6a-402f1e714369"
                className="img-fluid  w-100"
              />
              <div className="container">
                <div className="carousel-caption text-start">
                  <h1>Corte de Barba</h1>
                  <p>
                    Nos caracterizamos por ser lo mas profesionales a la hora de
                    complacerte y hacer que se vea tu barba como lo deseas.
                  </p>
                  <p>
                    {/* <a className="btn btn-lg btn-primary" href="#">
                    Agenda tú cita
                  </a> */}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <section>
          <div className="container-fluid bgs-img mt-5">
            <h1 className="text-center text-uppercase text-light fw-bold fst-italic wow animate__animated animate__backInRight">Nuestros Servicios</h1>
            <section className='bg-dark'>
              <p className='text-light fw-bold fst-italic text-center blancoNegro'>Nuestro servicios están diseñados para brindarle una experiencia de barbería de calidad en un ambiente relajado y acogedor. Nuestros barberos altamente capacitados se asegurarán de que su servicio sea personalizado para satisfacer sus necesidades y estilo individual. <br /><br />

                Comenzamos el servicio con una consulta personalizada para entender su estilo, preferencias y necesidades específicas. A continuación, aplicamos técnicas de corte de precisión y estilos personalizados para crear un corte de cabello perfecto que refleje su personalidad única.<br /><br />

                Durante el servicio, nuestros barberos utilizarán herramientas de alta calidad y productos para el cuidado del cabello para asegurar un resultado perfecto y duradero. Además, ofrecemos servicios adicionales como afeitado de barba y cuello para completar la experiencia de barbería completa.<br /><br />

                En nuestro salón, valoramos la relación con nuestros clientes y nos esforzamos por brindar un excelente servicio al cliente. Siéntase libre de preguntar cualquier pregunta y háganos saber cómo podemos mejorar su experiencia. ¡Esperamos darle la bienvenida en nuestro salón para su próximo corte de cabello!</p>
            </section>

            <div className="row row-cols-2 row-cols-md-3 g-3 mt-5 justify-content-center">
              {servicios.map(function (servicio) {
                return (
                  <div key={servicio.id}>
                    <div className="col m-2">
                      <div className="h-100 shadow bgs-img text-light">
                        <h3 className="fw-bold text-center fst-italic">{servicio.nombre}</h3>
                        <img
                          src={servicio.foto}
                          alt="foto"
                          className="img-fluid w-100 h-100 blancoNegro"
                        />
                        <h4 className="text-center mt-3">{servicio.role}</h4>
                        <h5 className="m-3">{servicio.nacimiento}</h5>
                        {/* <Link className="btn btn-lg btn-primary" to={} >
                        Agenda tú cita
                      </Link> */}
                        {/* <a className="btn btn-lg btn-dark fw-bold fst-italic" >
                          Agenda tú cita
                        </a> */}
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
