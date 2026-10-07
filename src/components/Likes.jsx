import { useState } from "react"

export default function Likes() {
    const [contadorLikes, setContadorLikes] = useState({ contador : 0 })

    return <div className="mt-6 flex items-center justify-between border-t pt-4">
        <div className="flex items-center text-red-500">
            <span className="font-bold mr-1">{ contadorLikes.contador }</span>
            <span className="text-xs uppercase">Likes</span>
        </div>
        <button className="bg-red-50 px-4 py-2 rounded-lg text-red-600 text-sm font-semibold hover:bg-red-100 transition"
            onClick={ function() {
                const nuevoContadorLikes = {
                    ...contadorLikes, 
                    contador : contadorLikes.contador + 1
                }
                setContadorLikes(nuevoContadorLikes)
            } }>
            ❤️ Dar Like
        </button>
    </div>
}