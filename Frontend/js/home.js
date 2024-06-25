// Código JS para home.html
const cadastroForm = document.getElementById('cadastroForm');

if (cadastroForm) {
    cadastroForm.addEventListener('submit', function(event) {
        event.preventDefault();

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
