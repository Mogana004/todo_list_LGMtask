import React , {useState} from 'react';
export default function TodoForm(props) {
    const [input ,setInput] =useState("");
     
    const handlechange= e => {
        setInput(e.target.value)
    }

    const handleSubmit =(e) => {
        e.preventDefault();
        props.addTask({
            id:Math.floor(Math.random() * 1000000),
            text:input,
            iscomplete : true

        })
        setInput('')

    }

    return <form class="todo-form">
        <input type="text" placeholder='Add a todo'    onChange={handlechange} value={input} name='text'/>
        <button type="Submit" onclick= {handleSubmit}  className ="todo-btn"> ADD TODO </button>

    </form>;
}
