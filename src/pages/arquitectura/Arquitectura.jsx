import "./arquitectura.css"
import Header from "../../components/Header";

// IMPORT EL ARRAY DE PROYECTOS DENTRO DE LA CARPETA DATA
import proyectosArquitectura from "../../data/proyectosArquitectura";
import { Link } from "react-router-dom";


function Arquitectura() {

    return ( 
        <>
                <Header currentPage="arquitectura"/>
                <main data-scroll-section>
                    <section id="arquitectura">
                        <div className="container">
                            <h2>Arquitectura</h2>
                            <ul className="main-grid">
                                {
                                    // POR CADA PROYECTO DEL ARRAY DE PROYECTOS RENDERIZO UNA IMAGEN Y SU DESCRIPCIÓN
                                    proyectosArquitectura.map(proyecto => {

                                        return <li key={proyecto.slug}>
                                                    <Link to={`./${proyecto.slug}`}>
                                                        <img  src={proyecto.img} alt="" />
                                                        <div className="proyecto-details">
                                                            <div className="overflow-box">
                                                                <span>{proyecto.titulo}</span>
                                                            </div>                                                 
                                                        </div>
                                                    </Link>                                                
                                                </li>
                                    })
                                }
                            </ul>
                        </div>
                    </section>
                </main>
            </>
     );
}

export default Arquitectura;