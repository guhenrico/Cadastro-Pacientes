const cadastroForm = document.getElementById('cadastroForm');

if (cadastroForm) {
    const inputElements = document.querySelectorAll(".ID, .Nome");

    const validateInput = (inputElement) => inputElement.value.trim().length > 0;

    const markInvalidFields = (inputElements) => {
        let allInputsValid = true;

        inputElements.forEach((inputElement) => {
            const inputIsValid = validateInput(inputElement);
            if (!inputIsValid) {
                inputElement.classList.add("error");
                inputElement.placeholder = "Campo obrigatório";
                allInputsValid = false;
            } else {
                inputElement.classList.remove("error");
            }
        });

        return allInputsValid;
    };

    cadastroForm.addEventListener('submit', function(event) {
        event.preventDefault();

        if (!markInvalidFields(inputElements)) {
            return;
        }

        const ID = document.querySelector('.ID').value;
        const Nome = document.querySelector('.Nome').value;

        const newPatient = {
            ID: ID,
            Nome: Nome
        };

        const pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];

        pacientes.push(newPatient);

        localStorage.setItem('pacientes', JSON.stringify(pacientes));

        window.location.href = 'paciente.html';
    });
}

