import '../Historia/Historia.css'
import WOW from 'wow.js';
import { useEffect } from "react";
import 'animate.css';
export function Historia() {
    useEffect(function () {
        const wow = new WOW();
        wow.init();
      }, []);
    return (
        <>
            <section className="banner">
                <h1 className='HistoriaTitle'>Historia</h1>
                <br /><br />
                <div className="row">
                    <div className="col-12 col-md-4">
                        <img className="imagen img-fluid wow animate__animated animate__slideInDown" src="https://firebasestorage.googleapis.com/v0/b/music-8bca7.appspot.com/o/Historia1.jpg?alt=media&token=9aa46db6-c734-4910-9c5b-26577b0da2bc" alt="Barber" />
                        <div className="texto">
                            <h3>Magic Barber y sus inicios</h3>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, commodi suscipit libero cum consectetur tenetur adipisci optio quibusdam provident quisquam delectus aliquam numquam nesciunt veritatis eum minus officia cupiditate hic. Error nostrum, perferendis ex nisi rem ad ab, qui atque veniam iste incidunt odio asperiores ullam? Sint fuga modi rem illum cupiditate, velit incidunt facilis dolores totam earum, debitis aut?</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <div className="texto">
                            <h3>Nuestra Filosogia Organizacional</h3>
                            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, commodi suscipit libero cum consectetur tenetur adipisci optio quibusdam provident quisquam delectus aliquam numquam nesciunt veritatis eum minus officia cupiditate hic. Error nostrum, perferendis ex nisi rem ad ab, qui atque veniam iste incidunt odio asperiores ullam? Sint fuga modi rem illum cupiditate, velit incidunt facilis dolores totam earum, debitis aut?</p>
                            <img className="imagen img-fluid wow animate__animated animate__slideInUp" src="https://firebasestorage.googleapis.com/v0/b/music-8bca7.appspot.com/o/historia2ok.jpg?alt=media&token=de80f53a-534a-45ae-b7da-d87909badf24" alt="Barber" />
                        </div>
                    </div>
                    <div className="col-12 col-md-4"> <img className="imagen img-fluid wow animate__animated animate__slideInDown" src="https://firebasestorage.googleapis.com/v0/b/music-8bca7.appspot.com/o/Historia3.jpg?alt=media&token=6979ff3d-76c9-436a-a090-d5e0884cfb4a" alt="Barber" />
                        <div className="texto">
                            <h3>Hacia donde vamos</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, commodi suscipit libero cum consectetur tenetur adipisci optio quibusdam provident quisquam delectus aliquam numquam nesciunt veritatis eum minus officia cupiditate hic. Error nostrum, perferendis ex nisi rem ad ab, qui atque veniam iste incidunt odio asperiores ullam? Sint fuga modi rem illum cupiditate, velit incidunt facilis dolores totam earum, debitis aut?</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}