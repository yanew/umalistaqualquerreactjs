import { Home } from './Home';
import { Cadastro } from './Cadastro';
import { Login } from './Login';
import { Route, Routes, Router } from 'react-router-dom';

export function AppRouter() {

    return(
        <Router>
            <Routes>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/cadastro">
                    <Cadastro />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
            </Routes>
        </Router>
    );


}