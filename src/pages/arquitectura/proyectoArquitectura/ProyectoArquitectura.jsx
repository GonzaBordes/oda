import proyectosArquitectura from "../../../data/proyectosArquitectura"
import './proyectoArquitectura.css'
import {useParams} from 'react-router-dom'
import NotFound from '../../../components/NotFound'
import Header from "../../../components/Header";



function ProyectoArquitectura() {
    
    const params = useParams()
    let proyectoRenderizado = false

    proyectosArquitectura.forEach(proyecto => {
        if(proyecto['slug'] === params.routeName){
            proyectoRenderizado = proyecto
        }
    })

    console.log(proyectosArquitectura, params.routeName )

    if(!proyectoRenderizado){ return <NotFound/> }

    return (   
            <>
                <Header currentPage="arquitectura"/>
                    <main data-scroll-section >
                        <section className="single-project" data-scroll id="hero">
                            <div data-scroll className="container">
                                <h2>Proyecto de Arquitectura</h2>
                                <address>
                                    <p>{proyectoRenderizado.titulo}</p>
                                    <p>{proyectoRenderizado.ubicacion}</p>
                                    <p>{proyectoRenderizado.año}</p>
                                </address>
                                <img className="main-img" src={proyectoRenderizado.img} alt="" />
                                <ul>
                                {
                                    proyectoRenderizado.secondaryImgList.map(img =>{
                                        return  <li key={img}>
                                                    <img src={img} alt="" />
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

export default ProyectoArquitectura;