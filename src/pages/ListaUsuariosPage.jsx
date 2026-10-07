import UserProfile from "../components/UserProfile"

const listaUsuarios = [
    { nombre : "Oscar", carrera : "Ingeniero de Sistemas", frase : "Apasionado por la arquitectura de software y el desarrollo frontend.", urlFoto : "http://localhost:5173/messi.jpeg"},
    { nombre : "Pepe", carrera : "Ingeniero Civil" , frase : "Al que madruga Dios le ayuda." , urlFoto : "http://localhost:5173/messi.jpeg"},
    { nombre : "Rocio", carrera : "Psicóloga", frase : "A caballo regalado no se le mira el diente." , urlFoto : "http://localhost:5173/messi.jpeg"},
    { nombre : "Juan", carrera : "Ingeniero de Sistemas", frase : "Camaron que se duerme se lo lleva la corriente.", urlFoto : "http://localhost:5173/messi.jpeg"},
    { nombre : "Luisa", carrera : "Derecho", frase : "XYZ" , urlFoto : "http://localhost:5173/messi.jpeg"}
]

export default function ListaUsuariosPage() {
    return <div>
        {
            listaUsuarios.map(function (user) {
                return <UserProfile key={ user.nombre }
                    foto={ user.urlFoto }
                    nombre={ user.nombre } 
                    carrera={user.carrera} 
                    frase={user.frase}/>
            })
        }
    </div>
}