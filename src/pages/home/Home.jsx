import Header from "../../components/Header";
import "./home.css"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"
import video from '../../assets/videos/intro.mp4'



function Home() {

    gsap.registerPlugin(ScrollTrigger)


    return (
            <>  
                <Header className="home"/>
                <main id="home" data-scroll-section>
                    <section>
                        <div data-scroll className="container">
                            <h2>Bienvenido a la web de Oda estudio</h2>
                            <div className="video-wrapper">
                            <video  playsInline loop autoPlay muted>
                                <source src={video} type="video/mp4"/>
                            </video>
                            </div>
                        </div>
                    </section>               
                </main>
            </>
     );
}

export default Home;