import ImgContainer from "../components/ImgContainer";
import Button from "../components/Button";
import icon from '../img/botao-icon.svg';
import '../style.css';
import Header from "../components/header";


export default function Vistoria() {
    return (
        <main>
            <Header/>
            <div class="titulo-subtitulo">
                <h1 class="titulo">VISTORIA</h1>
                <h3 class="subtitulo">Envie os dados da sua bicicleta</h3>
            </div>

            <div class="form-container">
                <form>
                    <select id="marca" class="form-select">
                        <option value="" disabled selected>Marca*</option>
                        <option value="caloi" >Caloi</option>
                        <option value="oggi" >Oggi</option>
                        <option value="cannondale" >Cannondale</option>
                        <option value="cervélo" >Cervélo</option>
                        <option value="focus" >Focus</option>
                        <option value="giant" >Giant</option>
                        <option value="scott" >SCOTT</option>
                        <option value="sense" >Sense</option>
                        <option value="specialized" >Specialized</option>
                        <option value="trek" >Trek</option>
                    </select>

                    <select id="modelo" class="form-select">
                        <option value="" disabled selected>Modelo*</option>
                        <option value="urbana" >Urbana</option>
                        <option value="dobravel" >Dobrável</option>
                        <option value="bmx" >BMX</option>
                        <option value="speed" >Speed</option>
                        <option value="mountain" >Mountain Bike</option>
                        <option value="downhill" >Downhill</option>
                        <option value="eletrica" >Elétrica</option>
                    </select>

                    <input type="text" id="chassi" class="form-input" placeholder="Chassi *"/>

                        <select id="anoCompra" class="form-select">
                            <option value="*" disabled selected>Ano da compra*</option>
                            <option value="2023" >2023</option>
                            <option value="2022" >2022</option>
                            <option value="2021" >2021</option>
                            <option value="2020" >2020</option>
                            <option value="2019" >2019</option>
                            <option value="2018" >2018</option>
                            <option value="2017" >2017</option>
                            <option value="2016" >2016</option>
                            <option value="2015" >2015</option>
                            <option value="2014" >2014</option>
                            <option value="2013" >2013</option>
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