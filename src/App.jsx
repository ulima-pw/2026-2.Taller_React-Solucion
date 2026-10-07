import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import LandingPage from "./pages/LandingPage"
import ListaUsuariosPage from "./pages/ListaUsuariosPage"
import ComentariosPage from "./pages/ComentariosPage"

export default function App() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={ <LandingPage /> } />
            <Route path="/usuarios" element={ <ListaUsuariosPage /> }/>
            <Route path="/comentarios" element={ <ComentariosPage /> } />
        </Routes>
    </BrowserRouter>
}