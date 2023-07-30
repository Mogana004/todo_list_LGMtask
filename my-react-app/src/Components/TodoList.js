import React , {useState} from 'react';

import TodoForm from './TodoForm';
import Todo from './Todo';
export default function TodoList(){


    //State Array which hold all TODOs
    const [todos ,setTodos]= useState([]);

    //Add todo to list

    const addTask = task => {
        if (!task.text){
            return
        }
    const newTodos =[task, ...todos];
        
        
        setTodos(newTodos);

    }


    // Remove todo from List 
     const removeTask =id => {
        let updateTasks =[...todos].filter(task => task.id !== id)
        setTodos(updateTasks)
     }


     //task is completed 
     const completeTask =id => {
        let updatedTasks= todos.map(todo => {
            if (todos.id === id ){
                todo.iscomplete =true ;

            }
            return todo;
        })
        setTodos(updatedTasks)
     }

    return <div>
        <TodoForm addTask={addTask}> </TodoForm>
        <Todo todos={todos} completeTask={completeTask} removeTask={removeTask}></Todo>
    </div>;

}