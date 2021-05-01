const tasks = [];

const render = () => {
    const divRow = document.querySelector(".row");
    divRow.innerHTML = "";

    tasks.map(task => {
        const divCol = document.createElement("div");
        divCol.classList.add("col");

        const divCard = document.createElement("div");
        divCard.classList.add("card");

        const input = document.createElement("input");
        input.setAttribute("type", "checkbox");

        const spanTask = document.createElement("span");
        spanTask.classList.add("task");

        const spanDelete = document.createElement("span");
        spanTask.classList.add("delete");

        spanTask.innerHTML = task.description;
        spanDelete.innerHTML = "X";

        divCard.appendChild(input);
        divCard.appendChild(spanTask);
        divCard.appendChild(spanDelete);

        divCol.appendChild(divCard);
        divRow.appendChild(divCol);

    });
}

    
const createTask = (event)=>{
    event.preventDefault
    const newTaskInput = document.querySelector("#new-task");
    const newTask = newTaskInput.value;

    if (!newTask) {
        return;
    }

    tasks.push({
        description: newTask,
        status: false,
        id: Date.now()
    })

    localStorage.setItem("tarefas", JSON.stringify(tasks));

    render();
}

const initialize = () => {
    const localTasks = localStorage.getItem("tarefas");
    if (!localTasks) {
        return;
    }
    const parsedTasks = JSON.parse(localTasks);
    parsedTasks.map(item => tasks.push(item));
    render();
}

initialize();