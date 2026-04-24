import Checkbox from './Checkbox.jsx'
import Button from './Button.jsx'
import { useState } from 'react'

export default function TodoItem({ todo, toggleTodo, deleteTodo, editTodo }) {
    const [isEditing, setIsEditing] = useState(false); // 수정 중인지 아닌지
    const [editText, setEditText] = useState(todo.text); // 수정한 text
    function handleEditClick() {
        if(!isEditing) {
            setIsEditing(true); // 수정 모드로 전환
            setEditText(todo.text); // 수정할 때 기존 text로 초기화
        } else {
            const trimmedText = editText.trim();
            if (trimmedText !== todo.text && trimmedText !== "") { // 이전 값과 같지 않고, 빈칸이 아니면
                editTodo(todo.id, trimmedText);
            }
            setIsEditing(false); // 수정 모드 종료
        }
    }


    return (
        // todo.isCompleted가 true면 todo__item--complete 클래스 추가, 아니면 말고
        <li className={`todo__item${todo.isCompleted ? " todo__item--complete" : ""}`}>
            {/* 수정 중이 아니면 */}
            <Checkbox 
                id={todo.id}
                checked={todo.isCompleted} 
                onChange={() => toggleTodo(todo.id)}
            >{todo.text}</Checkbox>
            {!isEditing && <Button className="todo__button todo__button--edit" onClick={() => setIsEditing(true)}
            >✏️</Button>}
                
            {/* 수정 중이면 */}
            {isEditing &&
                <input
                    type="text"
                    className="todo__input-edit"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    //enter 치면 handleEditClick 실행
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleEditClick();
                        }
                    }}
                    autoFocus
                />
            }
            <Checkbox 
                id={todo.id}
                checked={todo.isCompleted} 
                onChange={() => toggleTodo(todo.id)}
            >{todo.text}</Checkbox>
            <Button className="todo__button todo__button--edit" onClick={() => setIsEditing(true)}
            >✏️</Button>

            <Button
                className="todo__button todo__button--delete"
                onClick={() => deleteTodo(todo.id)}
            >❌</Button>
        </li>
    )
}