class TaskManager {
    constructor() {
        this.tasks = [];
        this.taskInput = document.getElementById("taskInput");
        this.taskList = document.getElementById("taskList");
        this.addTaskBtn = document.getElementById("addTaskBtn");

        // Event Listener for Add Task button
        this.addTaskBtn.addEventListener("click", () => addTask());
    }
}


const taskManager = new TaskManager();


function addTask() {
    const taskText = taskManager.taskInput.value.trim();
    if (taskText === "") return;

    const taskId = Date.now();
    taskManager.tasks.push({ id: taskId, text: taskText });

    renderTasks();
    taskManager.taskInput.value = "";
}

function deleteTask(id) {
    taskManager.tasks = taskManager.tasks.filter(task => task.id !== id);
    renderTasks();
}

function updateTask(id) {
    const newTaskText = prompt("Update task:");
    if (newTaskText) {
        taskManager.tasks = taskManager.tasks.map(task => 
            task.id === id ? { ...task, text: newTaskText } : task
        );
        renderTasks();
    }
}

function renderTasks() {
    taskManager.taskList.innerHTML = "";
    taskManager.tasks.forEach(task => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${task.text}
            <button onclick="updateTask(${task.id})">Edit</button>
            <button onclick="deleteTask(${task.id})">Delete</button>
        `;
        taskManager.taskList.appendChild(li);
    });
}
