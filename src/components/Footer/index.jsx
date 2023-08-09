import './Footer.css';


const Footer=()=>{
    return <footer className='footer'>
                <div className='footer__contenido'>
                    <a href="/" className='footer__linkHome'><img className='footer__logo' src="/img/ProgrammingTUBElogo.png" alt="ProgrammingTUBE logo" title="ProgrammingTUBE" /></a>
                    <div class="footer__contenedor_paginas">
                        <p class="footer__contenedor_paginas_titulo">Menú</p>
                        <ul class="footer__contenedor_paginas_lista">
                            <li class="footer__contenedor_paginas_item"><a href="#" title='Términos de Uso'>Términos de Uso</a></li>
                            <li class="footer__contenedor_paginas_item"><a href="#" title='Derechos de Autor'>Derechos de Autor</a></li>
                            <li class="footer__contenedor_paginas_item"><a href="" title="Política de Privacidad">Política de Privacidad</a></li>
                            <li class="footer__contenedor_paginas_item"><a href="" title='Preguntas Frecuentes'>Preguntas Frecuentes</a></li>
                            <li class="footer__contenedor_paginas_item"><a href="" title='Publicidad'>Publicidad</a></li>
                        </ul>
                    </div>
                </div>
                <div className='footer__datosDeveloper'>Sitio Web diseñado y desarrollado 100% por <a href='https://www.waldohidalgo.cl/' target='_blank' className='footer__datosDeveloper__linksitioweb' title="Sitio Web Waldo Hidalgo" >Waldo Hidalgo Oyarce</a>
                <div className='footer__iconos'>
                    <a className="footer_iconos--redes" href="https://www.facebook.com/waldohidalgooyarcej" title='Facebook de Waldo' target='_blank'>
                    <img width="48" height="48" src="https://img.icons8.com/fluency/48/facebook.png" alt="facebook"/>
                    </a>
                    <a className="footer_iconos--redes" href="https://www.instagram.com/clasestutoriaswaldo/" title='Instagram de Waldo' target='_blank'>
                    <img width="48" height="48" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram"/>
                    </a>
                    <a className="footer_iconos--redes" href="https://www.linkedin.com/in/waldo-hidalgo-oyarce/" title='LinkedIn de Waldo' target='_blank'>
                    <img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/>
                    </a>
                    <a className="footer_iconos--redes" href="https://github.com/Waldo-analista/" title='GitHub de Waldo' target='_blank'>
                    <img width="48" height="48" src="https://img.icons8.com/fluency/48/github.png" alt="github"/>
                    </a>
                </div>
                </div>

            </footer>

}

export default Footer;