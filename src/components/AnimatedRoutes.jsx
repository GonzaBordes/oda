// importo recursos
import { Routes, Route, BrowserRouter } from "react-router-dom";

// importo componentes y vistas
import NotFound from '../components/NotFound';
import Home from '../pages/home/Home';
import Estudio from '../pages/estudio/Estudio';
import Arquitectura from '../pages/arquitectura/Arquitectura';
import Mobiliario from '../pages/mobiliario/Mobiliario';
import ProyectoArquitectura from '../pages/arquitectura/proyectoArquitectura/ProyectoArquitectura';
import ProyectoMobiliario from '../pages/mobiliario/verProyecto/ProyectoMobiliario';
import UseLocoScroll from '../hooks/UseLocoScroll';

function AnimatedRoutes() {   

    UseLocoScroll(true)

    return (            

                <Routes >                
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/arquitectura" element={<Arquitectura />}></Route>
                    <Route path="/arquitectura/:routeName" element={<ProyectoArquitectura />}></Route>
                    <Route path="/mobiliario" element={<Mobiliario />}></Route>
                    <Route path="/mobiliario/:routeName" element={<ProyectoMobiliario />}></Route>
                    <Route path="/estudio" element={<Estudio />}></Route>

                    <Route path='*' element={<NotFound />}></Route>  
                </Routes>

     );
}

export default AnimatedRoutes;