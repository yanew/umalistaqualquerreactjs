import { Home } from './pages/Home';
import { Cadastro } from './pages/Cadastro';
import { Login } from './pages/Login';
import { Route, Routes, Router } from 'react-router-dom';

export function AppRouter() {

    return(
        <Router>
            <Routes>
                <Route exact path="/">
                    <Login />
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