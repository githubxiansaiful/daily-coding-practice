console.log("Script file connected!!");

const loadTodosData = () => {
    fetch("https://dummyjson.com/todos")
        .then(res => res.json())
        .then(data => console.log(data)
        )
}