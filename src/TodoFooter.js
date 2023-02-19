function TodoFooter({todos, onClearCopleted}) {
    const completed = todos.filter((todo) => todo.isCompleted).length;

    return (
        <div>
            <span>{completed} / {todos.length} is copmleted</span>
            <button onClick={onClearCopleted}>Clear Completed</button>
        </div>
    );
}

export default TodoFooter;