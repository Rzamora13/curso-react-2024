import React from "react";

const initialStati = [
    {
        id: 1,
        title: "Comprar pan",
        completed: false,
    },
    {
        id: 2,
        title: "Pasear al perro",
        completed: true,
    },
    {
        id: 3,
        title: "Aprender React",
        completed: false,
    },
];

const TodoListTailWindCss = () => {
    const [tasks, setTasks] = useState(initialState);
    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-yellow-50 shadow-md rounded-md">
            <h1 className="text-2xl mb-4 font-bold uppercase text-center">
                TodoList
            </h1>
            <div className="flex mb-4">
                <input type="text" placeholder="Nueva tarea" className="flex-1 mr-2 p-2 rounded-md focus:outline-none focus:border-blue-500" />
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800">
                    Agregar Tarea
                </button>
            </div>
            <div>
                <ul>
                    {
                        tasks.map(task =>(
                            <li></li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}