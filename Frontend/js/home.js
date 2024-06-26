const cadastroForm = document.getElementById('cadastroForm');

if (cadastroForm) {
    const inputElements = document.querySelectorAll(".ID, .Nome"); // Seleciona ambos os elementos

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
            return; // Se algum campo for inválido, não prosseguir com o cadastro
        }

        const ID = document.querySelector('.ID').value;
        const Nome = document.querySelector('.Nome').value;

        const newPatient = {
            ID: ID,
            Nome: Nome
        };

        // Obtém os pacientes cadastrados do localStorage
        const pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];

        // Adiciona o novo paciente à lista
        pacientes.push(newPatient);

        // Atualiza o localStorage com a lista atualizada de pacientes
        localStorage.setItem('pacientes', JSON.stringify(pacientes));

        // Redireciona para a página paciente.html após cadastrar
        window.location.href = 'paciente.html';
    });
}
