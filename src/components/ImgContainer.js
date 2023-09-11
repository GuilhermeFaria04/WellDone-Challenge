import cam from '../img/cam-icon.svg';
import '../style.css';

export default function ImgContainer({title}) {
    return (
        <div>
            <h1 class="titulo-foto">{title}</h1>
            <div class="foto-bike">
                <img class="camera-icon" src={cam} alt="ícone de uma câmera"/>
            </div>
        </div>
    )
}
