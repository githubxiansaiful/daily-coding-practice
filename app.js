console.log("Script file connected!!");

const todosAPIURL = "https://dummyjson.com/todos";

const loadTodosThen = () => {
    fetch(todosAPIURL)
        .then(res => res.json())
        .then(data => console.log(data))
}

const loadTodosAsync = async () => {
    const res = await fetch(todosAPIURL);
    const data = await res.json();
    console.log(data);
}