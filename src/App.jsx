import React,{useState} from 'react';
import './App.css';
import Footer from './Footer';
import TodoList from './TodoList';

function App() {
    const [task,setTask]=useState("");
    const [todos,setTodos]=useState([])
    const changeHandler=e=>{
      setTask(e.target.value)
    }
    const submitHandler =e=>{
        e.preventDefault();
        const newTodos=[...todos,task];
        setTodos(newTodos);
        setTask("");    
    }
    const deleteHandler=(indexValue)=>{
        const newTodos=todos.filter((todo,index) => index !==indexValue)
        setTodos(newTodos);
    }
    return (
        <div className='background'>
        <center>
          <div className = "card">
            <div className="card-body">
                <h1 className="card-title"> Resource one it solution Todo list </h1> 
                <form onSubmit={submitHandler}>
                    <input type="text" name="task" value={task} onChange={changeHandler}/> &nbsp;&nbsp;
                    <input type="Submit" value="Add" name="add"/>
                   
                </form>
                <TodoList todos={todos} deleteHandler={deleteHandler}/>
            </div>       
        </div>
        </center>
        <br/>
        <center>
        <Footer />
        </center>
       
        </div>
    );
}

export default App;