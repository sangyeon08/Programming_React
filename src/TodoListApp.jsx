import { useState } from 'react';
import './todolist.css'
import TodoItemEmpty from './components/TodoItemEmpty.jsx'
import Button from './components/Button.jsx'
import Checkbox from './components/Checkbox.jsx'
import TodoHeader from './components/TodoHeader.jsx'
import TodoAdder from './components/TodoAdder.jsx'
import TodoItem from './components/TodoItem.jsx'
import TodoList from './components/TodoList.jsx'

class Todo {
    constructor(id, text, isCompleted) {
        this.id = Date.now(); // 할 일 고유의 값 new Date().getTime()과 동일한 역할을 하는 코드
        this.text = text; // 할 일의 내용
        this.isCompleted = false; // 할 일의 완료 여부
    }
}

function TodoListApp() {
    const [todos, setTodos] = useState([]);
    const addTodo = (text) => setTodos((todos)=> [ 
        // 이전 todos 복사
        ...todos, 
        // newTodo 만들어서
        // 뒤에 추가하기!
        new Todo(text)
    ]);

    return (
        <div className="todo">
            <TodoHeader />
            <TodoAdder addTodo = {addTodo}/>
            <TodoList todos/>
        </div>
    )
}

export default TodoListApp;