import React, {useState} from "react";

const initialState = {
    name: "",
    email: "",
    password: "",
};

const RegistrarFormulario = () => {
    const [formData, setFormData] = useState(initialState);

    function handleSubmit(e) {
        e.preventDefault();
        setFormData(initialState);
    }
    function handleChange(e) {
        e.preventDefault();
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-slate-300 shadow-md rounded-md">
            <h1 className="text-2xl mb-4 font-bold text-center">Formulario de registro</h1>
            <form onSubmit={handleSubmit}>
                <div className="max-w-md mx-auto mt-8 p-6 bg-slate-300 shadow-md rounded-md">
                    <label className="mx-4 text-2xl mb-4">
                        Nombre:
                        <input 
                        type="text" 
                        name="name" 
                        value={formData.name}
                        className="flex-1 mt-4 mr-2 p-2 border rounded-md focus:outline-none focus:border-blue-500" 
                        onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="max-w-md mx-auto mt-8 p-6 bg-slate-300 shadow-md rounded-md">
                    <label className="mx-4 text-2xl mb-4">
                        Email:
                        <input 
                        type="email" 
                        name="email" 
                        value={formData.email}
                        className="flex-1 mt-4 mr-2 p-2 border rounded-md focus:outline-none focus:border-blue-500" 
                        onChange={handleChange}
                        />
                    </label>
                </div>
                <div className="max-w-md mx-auto mt-8 p-6 bg-slate-300 shadow-md rounded-md">
                    <label className="mx-4 text-2xl mb-4">
                        Password:
                        <input 
                        type="password" 
                        name="password" 
                        value={formData.password}
                        className="flex-1 mt-4 mr-2 p-2 border rounded-md focus:outline-none focus:border-blue-500" 
                        onChange={handleChange}
                        />
                    </label>
                </div>
                <button type="submit" clssName="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800">
                    Registrar Usuario
                </button>
            </form>
        </div>
    )
}

export default RegistrarFormulario