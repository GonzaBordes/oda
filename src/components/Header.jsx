import logo from '../assets/img/logo-svg.svg'
import logoIsta from '../assets/img/insta-logo.svg'
import './header.css'

import { Link } from "react-router-dom";
import { useEffect, useState, useRef } from 'react';
import proyectosArquitectura from '../data/proyectosArquitectura';
import productosMobiliarios from '../data/productosMobiliarios';



function Header(props) {

    let body = document.querySelector('body')
    body.classList.remove('dark')

    console.log('header props:' , props)

    const headerRef = useRef(null)
    const burgerRef = useRef(null)
    const navRef = useRef(null)

    const [burgerClick, setBurgerClick] = useState(false)

    useEffect(() => {

        if(burgerClick){
            burgerRef.current.classList.add('opened')
            navRef.current.classList.add('opened')
            document.querySelector('h1').classList.add('inverted')
        }else {
            navRef.current.classList.remove('opened')
            document.querySelector('h1').classList.remove('inverted')
            burgerRef.current.classList.remove('opened')
        } 
    }, [burgerClick])


    const handleMouseOver = () =>{

        let body = document.querySelector('body')
        body.classList.add('dark')
    }

    const handleMouseLeave = () =>{
        let body = document.querySelector('body')
        body.classList.remove('dark')
    }

    function handleBurgerClick(){
        setBurgerClick(!burgerClick)
    }


    return ( 
        <header className={!props.currentPage ? "home" : ""} data-scroll-sticky>
            <div ref={headerRef} className="container">
                <Link to={'/'}>
                    <h1>Oda estudio</h1>  
                </Link>                          
                <nav ref={navRef}>
                    <div className="links-wrapper">
                        <ul className="left-links">
                            <li                             
                                exit={{ opacity: 0, y: 15 }}
                                 transition={{duration: .19, delay: .3 ,ease: "easeOut"}}
                                 initial={{ opacity: 0, y:15 }}
                                 animate={{ opacity: 1, y:0 }}
                                onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave} className='arqui-nav-link'>
                                    <Link className={props.currentPage === "arquitectura" ? "active" : ""} to={"/arquitectura"}>
                                    arquitectura
                                    </Link>
                                    <ul>
                                        {
                                            proyectosArquitectura.map(proyecto => {
                                                return <li key={proyecto.titulo}>
                                                        <Link  to={`/arquitectura/${proyecto.slug}`}>
                                                            {proyecto.titulo}
                                                        </Link>
                                                        </li>
                                            })
                                        }
                                    </ul>
                            </li>
                            <li 
                                 exit={{ opacity: 0, y: 15 }}
                                 transition={{duration: .19, ease: "easeOut", delay: .4}}
                                 initial={{ opacity: 0, y:15 }}
                                 animate={{ opacity: 1, y:0 }}
                                 className='arqui-nav-link mobi-link'
                                 onMouseEnter={handleMouseOver} onMouseLeave={handleMouseLeave}
                            >
                                <Link 
                                className={props.currentPage === "mobiliario" ? "active" : ""} to={"/mobiliario"}>
                                mobiliario
                                </Link>
                                <ul>
                                        {
                                            productosMobiliarios.map(producto => {
                                                return <li key={producto.nombre}>
                                                        <Link  to={`/mobiliario/${producto.slug}`}>
                                                            {producto.nombre}
                                                        </Link>
                                                        </li>
                                            })
                                        }
                                    </ul>
                            </li>   
                        </ul>                
                            { 
                            
                                <div className="middle-img"
                                
                                exit={{ opacity: 0, y: 15 }}
                                transition={{duration: .19, ease: "easeOut", delay: .5}}
                                initial={{ opacity: 0, y:15 }}
                                animate={{ opacity: 1, y:0 }}
                                
                                >
                                    <Link to={'/'}>
                                        <img src={logo} alt="Logo de la marca" />                               
                                    </Link> 
                                </div>
                             
                            }                        
                        <ul 
                        

                        className="right-links">
                            <li 
                            
                            exit={{ opacity: 0, y: 15 }}
                                 transition={{duration: .19, ease: "easeOut", delay: .6}}
                                 initial={{ opacity: 0, y:15 }}
                                 animate={{ opacity: 1, y:0 }}

                            >
                                <Link className={props.currentPage === "estudio" ? "active" : ""} to={"/estudio"}>
                                estudio
                                </Link>
                            </li>
                            <li 
                            
                            exit={{ opacity: 0, y: 15 }}
                                 transition={{duration: .19, ease: "easeOut", delay: .7}}
                                 initial={{ opacity: 0, y:15 }}
                                 animate={{ opacity: 1, y:0 }}

                            >
                                <a  href="https://shop.odaestudio.com/">
                                tienda
                                </a>
                            </li>
                        </ul>
                    </div>                
                    <div className="lower-nav">
                        <div className="social-box">
                            {/* <div className="overflow-box">
                                <a>@oda_mobiliario</a>
                            </div>
                            <span>/</span>
                            <div className="overflow-box">
                                <a>@oda_arq</a>
                            </div> */}
                            <a  href="https://www.instagram.com/oda_mobiliario/" >
                            <img src={logoIsta} alt="logo de instagram" />
                            </a>
                        </div>
                        <div className="mobile-nav-description">
                            <span>Oda estudio es una oficina de arquitectura y diseño mobiliario fundada en 2013 por Julieta Scarafia</span>
                        </div>
                    </div>                
                </nav>
                <div ref={burgerRef} onClick={handleBurgerClick} className="burger-box">
                    <span className='burger'></span>
                </div>
            </div>           
        </header>
     );
}

export default Header;