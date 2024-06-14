<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Paciente</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="../Frontend/css/style.css">
</head>
<body>
    <header>
        <div class="header-container">
            <img src="../Frontend/img/logo.jpg" alt="Logo da Empresa" class="logo"> 
            <nav class="navbar">   
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Paciente</a></li>
                </ul>
            </nav>
        </div>
    </header>

    <div class="container">
        <div class="card">
        <h3><img src="../Frontend/img/Add Pacientes.png" alt="Ícone"> Cadastro de Paciente</h3>
        <form name="Cadastro" action="cadastro.php" method="POST">
                <label for="ID">ID <span>*</span></label>
                <input type="text" id="ID" name="ID" required><br><br>
                <label for="Nome">Nome <span>*</span></label>
                <input type="text" id="Nome" name="Nome" required><br><br>
                <input type="submit" name="enviar" value="Cadastrar">
            </form>
        </div>
    </div>
</body>
</html>
