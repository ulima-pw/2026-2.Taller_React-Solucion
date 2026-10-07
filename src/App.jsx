import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import LandingPage from "./LandingPage"
import ListaUsuariosPage from "./ListaUsuariosPage"

export default function App() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={ <LandingPage /> } />
            <Route path="/usuarios" element={ <ListaUsuariosPage /> }/>
        </Routes>
    </BrowserRouter>
}