import ImgContainer from "../components/ImgContainer";
import Button from "../components/Button";
import icon from '../img/botao-icon.svg';
import '../style.css';


export default function Vistoria() {
    return (
        <main>
            <div class="titulo-subtitulo">
                <h1 class="titulo">VISTORIA</h1>
                <h3 class="subtitulo">Envie os dados da sua bicicleta</h3>
            </div>

            <div class="form-container">
                <form>
                    <select id="marca" class="form-select">
                        <option value="" disabled selected>Marca*</option>
                    </select>

                    <select id="modelo" class="form-select">
                        <option value="" disabled selected>Modelo*</option>
                    </select>

                    <input type="text" id="chassi" class="form-input" placeholder="Chassi*"/>

                        <select id="anoCompra" class="form-select">
                            <option value="" disabled selected>Ano da compra*</option>
                        </select>

                       <ImgContainer title='Foto da Nota Fiscal*'/>

                        <div class="adc-acessorio">
                            <img class="botao-icon" src={icon} alt="ícone de um botão adicionar"/>
                                <h1 class="adc-acess-titulo">Adicionar acessório</h1>
                        </div>
                        
                        <Button/>
                </form>


            </div>

        </main>
    )
}