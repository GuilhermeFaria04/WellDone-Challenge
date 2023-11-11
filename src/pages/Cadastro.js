import { useState } from "react"
import logo from "../img/logoporto.svg"
import { useNavigate } from "react-router-dom"


export default function Cadastro() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [cpf, setCpf] = useState('')
    const [cep, setCep] = useState('')
    const [endereco, setEndereco] = useState('')
    const [comp, setComp] = useState('')
    const [senha, setSenha] = useState('')
    const navegacao = useNavigate()

    function cadastro(){
        navegacao('/')
    }
    return (
        <div class="auth-container">
           <img src={logo}/>
            <form onSubmit={cadastro}>
                <input 
                    placeholder="Nome *"
                    type="text"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    required
                />
                <input 
                    placeholder="Email *"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input 
                    placeholder="CPF *"
                    type="text"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    required
                    maxLength="11"
                />
                <input 
                    placeholder="CEP *"
                    type="text"
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    required
                    maxLength="8"
                />
                <input 
                    placeholder="Endereço *"
                    type="text"
                    value={endereco}
                    onChange={(e) => setEndereco(e.target.value)}
                    required
                />
                <input 
                    placeholder="Complemento"
                    type="text"
                    value={comp}
                    onChange={(e) => setComp(e.target.value)}
                />                
                <input 
                    placeholder="Senha *"
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    required
                />
                <button type="submit">Cadastre-se</button>
            </form>
            <p onClick={() => navegacao('/')}>Já tem uma conta? Faça login!</p>
        </div>
    )
}