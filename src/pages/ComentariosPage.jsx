export default function ComentariosPage() {
    return <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mt-6">
        <h3 className="text-lg font-semibold mb-4 text-gray-700">Agregar Comentario</h3>
        <form className="space-y-3">
            <input
                type="text"
                placeholder="Escribe algo interesante..."
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition" />

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700">
                Publicar
            </button>
        </form>

        <ul className="mt-4 space-y-2">
            <li className="text-sm bg-gray-50 p-2 rounded border-l-4 border-blue-500 text-gray-600">
                Ejemplo de comentario estático.
            </li>
        </ul>
    </div>
}