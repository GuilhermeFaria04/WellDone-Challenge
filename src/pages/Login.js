import { useState } from "react"
import logo from "../img/logoporto.svg"
import { useNavigate } from "react-router-dom"


export default function Login() {
    const [cpf, setCpf] = useState('')
    const [senha, setSenha] = useState('')
    const navegacao = useNavigate()

    function login(){
        navegacao('/vistoria')
    }
    return (
        <div class="auth-container">
           <img src={logo}/>
            <form onSubmit={login}>
                <input 
                    placeholder="CPF *"
                    type="text"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    required
                    maxLength="11"
                />
                <input 
                    placeholder="Senha *"
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                    title="Não pode deixar vazio"
                />
                <button type="submit">Entrar</button>
            </form>
            <p onClick={() => navegacao('/cadastro')}>Não tem uma conta? Registre-se!</p>
        </div>
    )
}