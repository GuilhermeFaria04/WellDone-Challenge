import Button from '../components/Button';
import ImgContainer from '../components/ImgContainer';
import '../style.css';


export default function Fotos() {
    const titles = ['Foto do guidão','Foto da roda dianteira','Foto da roda traseira','Foto do quadro','Foto da corrente','Foto do pedal','Foto da bicicleta inteira*']
    return(
        <div class="form-container">
            {titles.map((title)=>(
                <ImgContainer title={title}/>
            ))}
            <Button/>
        </div>
    )
}