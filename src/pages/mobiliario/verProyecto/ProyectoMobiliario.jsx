import proyectosMobiliarios from "../../../data/productosMobiliarios"
import './proyectoMobiliario.css'
import {useParams} from 'react-router-dom'
import NotFound from '../../../components/NotFound'
import Header from "../../../components/Header";



function ProyectoMobiliario() {
    
    const params = useParams()
    let proyectoRenderizado = false

    proyectosMobiliarios.forEach(proyecto => {
        if(proyecto['slug'] === params.routeName){
            proyectoRenderizado = proyecto
        }
    })

    console.log(proyectosMobiliarios, params.routeName )

    if(!proyectoRenderizado){ return <NotFound/> }

    return ( 
        <>   
            <Header currentPage="mobiliario"/>
                <main data-scroll-section >
                    <section className="single-project" data-scroll id="hero">
                        <div data-scroll className="container">
                            <h2>Proyecto mobiliario</h2>
                            <div Style="order: 3; padding-bottom: 5rem;" className="product-info">
                                <p Style={'margin-bottom: 1rem;'}>{proyectoRenderizado.nombre}</p>
                                <p>{proyectoRenderizado.desc}</p>
                            </div>                               
                            <img Style="order:1;" className="main-img" src={proyectoRenderizado.img} alt="" />
                            {/* <ul>
                            {
                                proyectoRenderizado.secondaryImgList.map(img =>{
                                    return  <li key={img}>
                                                <img src={img} alt="" />
                                            </li>
                                })
                            }
                        </ul> */}
                        </div>
                    </section>
                </main>
            </>    
     );
}

export default ProyectoMobiliario;