//import {Link} from 'react-router-dom';

import logoDT from '../../assets/logoDt.svg';
//import logoUser from '../../assets/user-svgrepo-com.svg';

import { Container, FormContent } from "./style";

export function LoginPage() {
    return(
        <Container>
            <FormContent>
                <img src={logoDT} alt="Logo DrawerTech" />
                <h2>Logar-se</h2>
                <input 
                    type="text" 
                    placeholder="Usuário" 
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    required
                />
                <button
                    type="submit"
                >
                    Entrar
                </button>
               <p className="recuperar-password">Recupere sua senha <a href="/">clicando aqui</a></p>
            </FormContent>
        </Container>
    )
}