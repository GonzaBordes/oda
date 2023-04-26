import "./estudio.css"

import Header from "../../components/Header";
import estudioImg from "../../assets/img/estudio.webp"
import UseLocoScroll from '../../hooks/UseLocoScroll';
import Footer from "../../components/Footer";

function Estudio() {

    return ( 
            <>
                <Header currentPage="estudio" />
                <main data-scroll-section>
                    <section id="hero">
                        <div className="container">
                            <h2>Página de estudio</h2>
                            <p>ODA Estudio es una oficina de arquitectura y diseño de mobiliario fundada en 2013 por Julieta Scarafia. Su trabajo concentra encargos de diferentes escalas que priorizan representar un interés sensible y sintético de las ideas por medio del uso de materiales nobles. Esto se traduce en proyectos que revelan el paso del tiempo de manera honesta.
                            Julieta Scarafia es arquitecta, graduada en la Universidad Católica de Córdoba. Ha realizado estudios de posgrado en la Universitá Degli Studi di Ferrara de Italia (2009). Entre 2010 y 2013 vivió en Santiago, Chile, donde colaboró con las oficinas de arquitectos de renombre como Mathias Klotz y Alejandro Aravena.
                            </p>
                        </div>
                    </section>
                </main>
                <Footer/>
            </>            

     );
}

export default Estudio;