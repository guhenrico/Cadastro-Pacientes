

// const inputElements = document.querySelectorAll(".ID, .Nome"); // Seleciona ambos os elementos
// const addTaskButton = document.querySelector(".Button");
// const tasksContainer = document.querySelector(".Biblioteca");

// const validateInput = (inputElement) => inputElement.value.trim().length > 0;

// const handleAddTask = () => {
//     let allInputsValid = true;

//     inputElements.forEach((inputElement) => {
//         const inputIsValid = validateInput(inputElement);
//         if (!inputIsValid) {
//             inputElement.classList.add("error");
//             allInputsValid = false;
//         } else {
//             inputElement.classList.remove("error");
//         }
//     });

//     if (!allInputsValid) {
//         return;
//     }

//     const taskItemContainer = document.createElement("div");
//     taskItemContainer.classList.add("task-item");

//     const taskContent = document.createElement("p");
//     taskContent.innerText = Array.from(inputElements)
//         .map(inputElement => inputElement.value)
//         .join(" - ");

//     taskContent.addEventListener("click", () => handleClick(taskContent));

//     const deleteItem = document.createElement("i");
//     deleteItem.classList.add("fa-regular", "fa-trash-can");

//     deleteItem.addEventListener("click", () =>
//         handleDeleteClick(taskItemContainer, taskContent)
//     );

//     taskItemContainer.appendChild(taskContent);
//     taskItemContainer.appendChild(deleteItem);

//     tasksContainer.appendChild(taskItemContainer);

//     // Limpar os campos de entrada após adicionar a tarefa
//     inputElements.forEach((inputElement) => inputElement.value = "");

//     updateLocalStorage();
// };

// const handleClick = (taskContent) => {
//     taskContent.classList.toggle("completed");
//     updateLocalStorage();
// }

// const handleDeleteClick = (taskItemContainer, taskContent) => {
//     taskItemContainer.remove();
//     updateLocalStorage();
// }

// const handleInputChange = (event) => {
//     const inputElement = event.target;
//     const inputIsValid = validateInput(inputElement);

//     if (inputIsValid) {
//         inputElement.classList.remove("error");
//     }
// };

// const updateLocalStorage = () => {
//     const tasks = tasksContainer.childNodes;

//     const localStorageTasks = [...tasks].map(task => {
//         const content = task.firstChild;
//         const isCompleted = content.classList.contains("completed");

//         return { description: content.innerText, isCompleted };
//     });

//     localStorage.setItem("tasks", JSON.stringify(localStorageTasks));
// }

// const refreshTasksUsingLocalStorage = () => {
//     const tasksFromLocalStorage = JSON.parse(localStorage.getItem("tasks"));

//     if (!tasksFromLocalStorage) return;

//     tasksContainer.innerHTML = ""; // Limpar o container antes de adicionar as tarefas do localStorage

//     for (const task of tasksFromLocalStorage) {
//         const taskItemContainer = document.createElement("div");
//         taskItemContainer.classList.add("task-item");

//         const taskContent = document.createElement("p");
//         taskContent.innerText = task.description;

//         if (task.isCompleted) {
//             taskContent.classList.add("completed");
//         }

//         taskContent.addEventListener("click", () => handleClick(taskContent));

//         const deleteItem = document.createElement("i");
//         deleteItem.classList.add("fa-regular", "fa-trash-can");

//         deleteItem.addEventListener("click", () =>
//             handleDeleteClick(taskItemContainer, taskContent)
//         );

//         taskItemContainer.appendChild(taskContent);
//         taskItemContainer.appendChild(deleteItem);

//         tasksContainer.appendChild(taskItemContainer);
//     }
// }

// // Verifica se há tarefas no localStorage ao carregar a página
// refreshTasksUsingLocalStorage();

// // Adiciona evento ao botão de cadastro na tela home.html
// const cadastroForm = document.getElementById('cadastroForm');
// cadastroForm.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const ID = document.querySelector('.ID').value;
//     const Nome = document.querySelector('.Nome').value;

//     const newPatient = {
//         ID: ID,
//         Nome: Nome
//     };

//     // Obtém os pacientes cadastrados do localStorage
//     const pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];

//     // Adiciona o novo paciente à lista
//     pacientes.push(newPatient);

//     // Atualiza o localStorage com a lista atualizada de pacientes
//     localStorage.setItem('pacientes', JSON.stringify(pacientes));

//     // Redireciona para a página paciente.html após cadastrar
//     window.location.href = 'paciente.html';
// });

// Código JS para paciente.html
const tasksContainer = document.querySelector(".Biblioteca");

const refreshTasksUsingLocalStorage = () => {
    const pacientesFromLocalStorage = JSON.parse(localStorage.getItem('pacientes'));

    if (!pacientesFromLocalStorage) return;

    tasksContainer.innerHTML = ""; // Limpar o container antes de adicionar os pacientes do localStorage

    for (const paciente of pacientesFromLocalStorage) {
        const pacienteItemContainer = document.createElement("div");
        pacienteItemContainer.classList.add("task-item");

        const pacienteContent = document.createElement("p");
        pacienteContent.innerText = `ID: ${paciente.ID} - Nome: ${paciente.Nome}`;

        pacienteItemContainer.appendChild(pacienteContent);

        tasksContainer.appendChild(pacienteItemContainer);
    }
}

// Verifica se há pacientes no localStorage ao carregar a página
if (tasksContainer) {
    refreshTasksUsingLocalStorage();
}
