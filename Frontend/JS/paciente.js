const tasksContainer = document.querySelector(".Biblioteca");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const sortByNameAsc = document.getElementById("sortByNameAsc");
const sortByNameDesc = document.getElementById("sortByNameDesc");
const sortByIdAsc = document.getElementById("sortByIdAsc");
const sortByIdDesc = document.getElementById("sortByIdDesc");

const refreshTasksUsingLocalStorage = (searchTerm = "") => {
    const pacientesFromLocalStorage = JSON.parse(localStorage.getItem('pacientes'));

    if (!pacientesFromLocalStorage) return;

    tasksContainer.innerHTML = "";

    let filteredPacientes = pacientesFromLocalStorage.filter(paciente => 
        paciente.ID.toLowerCase().includes(searchTerm.toLowerCase()) ||
        paciente.Nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortByNameAsc.checked) {
        filteredPacientes.sort((a, b) => a.Nome.localeCompare(b.Nome));
    } else if (sortByNameDesc.checked) {
        filteredPacientes.sort((a, b) => b.Nome.localeCompare(a.Nome));
    } else if (sortByIdAsc.checked) {
        filteredPacientes.sort((a, b) => a.ID.localeCompare(b.ID, undefined, {numeric: true}));
    } else if (sortByIdDesc.checked) {
        filteredPacientes.sort((a, b) => b.ID.localeCompare(a.ID, undefined, {numeric: true}));
    }

    for (const paciente of filteredPacientes) {
        const pacienteItemContainer = document.createElement("div");
        pacienteItemContainer.classList.add("task-item");

        const pacienteContent = document.createElement("p");
        pacienteContent.classList.add("patient-info");
        pacienteContent.innerHTML = `<strong>ID:</strong> ${paciente.ID} <strong>Nome:</strong> ${paciente.Nome}`;

        const deleteItem = document.createElement("i");
        deleteItem.classList.add("fa-regular", "fa-trash-can");
        deleteItem.style.cursor = "pointer";

        deleteItem.addEventListener("click", () => handleDeleteClick(paciente.ID));

        pacienteItemContainer.appendChild(pacienteContent);
        pacienteItemContainer.appendChild(deleteItem);

        tasksContainer.appendChild(pacienteItemContainer);
    }
}

const handleDeleteClick = (patientID) => {
    const pacientesFromLocalStorage = JSON.parse(localStorage.getItem('pacientes'));
    const updatedPacientes = pacientesFromLocalStorage.filter(paciente => paciente.ID !== patientID);

    localStorage.setItem('pacientes', JSON.stringify(updatedPacientes));
    refreshTasksUsingLocalStorage();
}

searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value;
    refreshTasksUsingLocalStorage(searchTerm);
});

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value;
    refreshTasksUsingLocalStorage(searchTerm);
});

sortByNameAsc.addEventListener("change", () => {
    if (sortByNameAsc.checked) {
        sortByNameDesc.checked = false;
        sortByIdAsc.checked = false;
        sortByIdDesc.checked = false;
    }
    refreshTasksUsingLocalStorage(searchInput.value);
});

sortByNameDesc.addEventListener("change", () => {
    if (sortByNameDesc.checked) {
        sortByNameAsc.checked = false;
        sortByIdAsc.checked = false;
        sortByIdDesc.checked = false;
    }
    refreshTasksUsingLocalStorage(searchInput.value);
});

sortByIdAsc.addEventListener("change", () => {
    if (sortByIdAsc.checked) {
        sortByNameAsc.checked = false;
        sortByNameDesc.checked = false;
        sortByIdDesc.checked = false;
    }
    refreshTasksUsingLocalStorage(searchInput.value);
});

sortByIdDesc.addEventListener("change", () => {
    if (sortByIdDesc.checked) {
        sortByNameAsc.checked = false;
        sortByNameDesc.checked = false;
        sortByIdAsc.checked = false;
    }
    refreshTasksUsingLocalStorage(searchInput.value);
});

if (tasksContainer) {
    refreshTasksUsingLocalStorage();
}




