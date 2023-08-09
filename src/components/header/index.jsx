import Boton from '../Boton';
import './Header.css';



const Header=()=>{
    return <header className="header">
        <a href="/" className='header__linkHome'><img className='header__logo' src="/img/ProgrammingTUBElogo.png" alt="ProgrammingTUBE logo" title="Página de Inicio ProgrammingTUBE" /></a>
        <Boton title='Cargar Nuevo Video' className="header__botonNuevoVideo" icono='iconoMas'/>
    </header>

}

export default Header;