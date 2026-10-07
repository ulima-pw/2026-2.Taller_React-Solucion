import Likes from "./Likes";

export default function UserProfile({nombre, carrera, frase, foto}) {
    return <div className="bg-white rounded-xl shadow-md overflow-hidden p-6 mb-4 border border-gray-200">
        <div className="flex items-center space-x-4">
            <img className="h-16 w-16 rounded-full object-cover" src={foto} alt="Avatar"/>
                <div>
                    <h2 className="text-xl font-bold text-gray-800">{ nombre }</h2>
                    <p className="text-sm text-blue-600 font-medium">{ carrera }</p>
                </div>
        </div>
        <p className="mt-4 text-gray-600 italic text-sm">
            "{ frase }"
        </p>
        <Likes />
    </div>
}