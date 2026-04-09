function TodoListApp() {
    return (
        <div className="todo">
            <h1 className="todo__title">No Think, Do IT</h1>
            <form className="todo__form">
                <input type="text" placeholder="할 일을 입력하세요!" className="todo__input"/>
                <button type="submit" className="todo__button todo__button--add">Add</button>
            </form>
            <ul>
                <li>
                    <input type="checkbox" id="chk-2"/>
                    <label htmlFor="chk-2" className="todo__label">think</label>
                    <button type="button" className="todo__button todo__button__edit">✏️</button>
                    <button type="button" className="todo__button todo__button__delete">❌</button>
                </li>
            </ul>
        </div>
    )
}

export default TodoListApp