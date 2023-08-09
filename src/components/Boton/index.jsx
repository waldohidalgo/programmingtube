import {BsPlusCircleFill} from 'react-icons/bs';
import './Boton.css'

const Boton=(props)=>{
   
    const {title,className,icono}=props;

    const iconoBoton=(tipoIcono)=>{
        if(tipoIcono==='iconoMas'){
            return <BsPlusCircleFill className="header__botonNuevoVideo--iconomas"/>;
        }else{
            return undefined;
        }

    }

    if(className==='header__botonNuevoVideo'){
    return <button title={title} className={className}>{iconoBoton(icono)} {title}</button>}

}

export default Boton;