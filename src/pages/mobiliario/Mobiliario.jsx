import "./mobiliario.css"
import Header from "../../components/Header";
import productosMobiliarios from "../../data/productosMobiliarios";
import { Link } from "react-router-dom";


function Mobiliario() {

    // const [productos, setProductos] = useState([])

    // useEffect(() => {
    //     const CONSUMER_KEY= "ck_351b092f245dcec766653bd33d3e5be945c8c467"
    //     const PRIVATE_KEY = "cs_631cf370b05bb3b2aa6c7b581c4f266f4fc3587e"

    //     fetch(`https://shop.odaestudio.com/wp-json/wc/v3/products?consumer_key=${CONSUMER_KEY}&consumer_secret=${PRIVATE_KEY}`)
    //     .then(response => response.json())
    //     .then(res => setProductos(res))
    // }, []);
    

    // console.log(productos)

    return (             
                <>
                <Header currentPage="mobiliario"/>
                <main data-scroll-section>
                    <section id="mobiliario">
                        <div data-scroll className="container">
                        <ul className="main-grid">
                                {
                                    // POR CADA PROYECTO DEL ARRAY DE PROYECTOS RENDERIZO UNA IMAGEN Y SU DESCRIPCIÓN
                                    productosMobiliarios.map(producto => {
                                        return <li key={producto.nombre}>
                                                        <Link to={`./${producto.slug}`}>
                                                            <img  src={producto.img} alt="" />
                                                            <div className="proyecto-details">
                                                                <div className="overflow-box">
                                                                    <span>{producto.nombre}</span>
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

export default Mobiliario;