// JSON API URL
const todosAPIURL = "https://dummyjson.com/todos";

// Render todos to the DOM
const renderTodos = (todos) => {
    const container = document.getElementById("todos");
    container.innerHTML = "";

    todos.forEach((todo) => {
        const div = document.createElement("div");
        div.className = `single-item ${todo.completed ? "bg-[#778beb]" : "bg-[#e15f413b]"}`;
        div.innerHTML = `
            <span>${todo.todo}</span>
            <span><i class="${todo.completed ? 'fa-solid fa-circle-check' : 'fa-regular fa-circle-xmark'}"></i></span>
        `;

        container.appendChild(div);
    })

}

// Fetch todos using .then() method
const loadTodosThen = () => {
    fetch(todosAPIURL)
        .then(res => res.json())
        .then(data => {
            console.log("Data From .then:", data.todos)
            renderTodos(data.todos);
        })
}

// Fetch todos using async/await
const loadTodosAsync = async () => {
    const res = await fetch(todosAPIURL);
    const data = await res.json();
    console.log("Data From async:", data);
    renderTodos(data.todos);
}
