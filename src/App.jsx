import { useState } from "react";
import Navbar from "./components/navbar";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            {/* NAVBAR */}
            <Navbar />

            {/* MAIN */}
            <div className='container mx-auto my-5 rounded-xl p-5 bg-violet-200'>
                <div className='addToDo'>
                    <h2 className='text-lg font-bold'>Add a todo</h2>
                    <input className='w-80 ' type='text' />
                    <button className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-md mx-4'>
                        ADD
                    </button>
                </div>
                <h2 className='text-lg font-bold'>YOUR TODOS</h2>
                <div className='todos'>
                    <div className='todo flex'>
                        <div className='text'></div>
                        <div className='buttons'>
                            <button className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-md mx-4'>
                                EDIT
                            </button>
                            <button className='bg-violet-800 hover:bg-violet-950 p-3 py-1 text-white rounded-md mx-4'>
                                DELETE
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
