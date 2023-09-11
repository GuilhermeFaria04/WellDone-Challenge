import '../style.css';

export default function Button(){
    function submit(e){
        e.preventDefault()
    }
    return(
            <button type="submit" class="form-button" onClick={submit}>Enviar</button>
    )
}