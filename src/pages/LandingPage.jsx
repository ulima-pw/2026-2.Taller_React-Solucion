import { Link, useNavigate } from "react-router-dom";

export default function LandingPage() {
    const navigate = useNavigate()

    return <div>
        <h1 className="mb-3">Taller React</h1>
        <button type="button"
            className="bg-blue-600 text-white font-medium py-2 px-4 hover:bg-blue-700"
            onClick={ function() {
                navigate("/usuarios")
            } }>
            Iniciar
        </button>
    </div>
}