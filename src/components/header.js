import '../style.css';
import logoporto from '../img/logoporto.svg';
import icon from '../img/usu-icon.svg';
import { useNavigate } from 'react-router-dom';

export default function Header(){
    const navegação = useNavigate()
    return(
        <header>
            <div class="container">
                <ul class="header_menu_list">
                    <img class="logoporto" src={logoporto} alt="Logotipo da porto"/>
                    <li class="headermenu-listitem" onClick={() => {navegação('/')}}>Vistoria</li>
                    <li class="headermenu-listitem" onClick={() => {navegação('/enviofotos')}}>Fotos</li>
                    <li class="headermenu-listitem" onClick={() => {navegação('/integrantes')}}>Integrantes</li>
                    <img class="usu-icon" src={icon} alt="Ícone de usuário"/>
                </ul>
            </div>
        </header>
    )
}