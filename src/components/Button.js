import '../style.css';
import { useNavigate } from 'react-router-dom';

export default function Button({rota}){
    const navegacao = useNavigate()
    return(
            <button type="submit" class="form-button" onClick={() => navegacao(rota)}>Enviar</button>
    )
}