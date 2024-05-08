import { useState } from "react";
import Navbar from "./components/navbar";
import "./App.css";

function App() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);

    const handleEdit = (index) => {
        const updatedTodos = todos.map((item, i) => {
            if (i === index) {
                const newTodo = prompt("Enter new todo", item.todo);
                return { ...item, todo: newTodo };
            }
            return item;
        });
        setTodos(updatedTodos);
    };

    const handleDelete = (index) => {
        const updatedTodos = todos.filter((item, i) => i !== index);
        setTodos(updatedTodos);
    };

    const handleAdd = () => {
        setTodos([...todos, { todo, isCompleted: false }]);
        setTodo("");
    };

    const handleCheckboxChange = (index) => {
        const updatedTodos = todos.map((item, i) => {
            if (i === index) {
                return { ...item, isCompleted: !item.isCompleted };
            }
            return item;
        });
        setTodos(updatedTodos);
    };

    return (
        <>
            {/* NAVBAR */}
            <Navbar />

            {/* MAIN SECTION */}
            <div className='container mx-auto my-5 rounded-xl p-5 bg-violet-200'>
                {/* ADD TO DO SECTION */}
                <div className='addToDo'>
                    <h2 className='text-lg font-bold'>Add a todo</h2>
                    <input className='w-80 ' type='text' value={todo} onChange={(e) => setTodo(e.target.value)} />
                    <button onClick={handleAdd} className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-md mx-4'>
                        ADD
                    </button>
                </div>

                {/* YOUR TODOS SECTION */}
                <h2 className='text-lg font-bold pt-20'>YOUR TODOS</h2>
                {todos.map((todo, index) => (
                    <div className='todos pt-2 items-center' key={index}>
                        <div className='todo flex items-center mb-4'>
                            <input type='checkbox' checked={todo.isCompleted} onChange={() => handleCheckboxChange(index)} className='mr-5' />
                            <div className={`${todo.isCompleted ? "line-through" : ""} mx-2`}>{todo.todo}</div>
                            <div className='buttons flex ml-60'>
                                <button onClick={() => handleEdit(index)} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-white rounded-md mx-2'>
                                    EDIT
                                </button>
                                <button onClick={() => handleDelete(index)} className='bg-violet-800 hover:bg-violet-950 p-2 py-1 text-white rounded-md mx-2'>
                                    DELETE
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default App;
