function TodoListApp() {
    return (
        <div>
            <h1>No Think, Do IT</h1>
            <form>
                <input type="text" placeholder="추가해!" />
                <button type="submit">Add</button>
            </form>
            <ul>
                <li>
                    <input type="checkbox" id="chk-1" />
                    <label htmlFor="chk-1">think</label>
                    <button type="button">✏️</button>
                    <button type="button">❌</button>
                </li>
                <li>
                    <input type="checkbox" id="chk-2"/>
                    <label htmlFor="chk-2">do</label>
                    <button type="button">✏️</button>
                    <button type="button">❌</button>
                </li>
            </ul>
        </div>
    )
}

export default TodoListApp