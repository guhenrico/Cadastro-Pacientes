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

    <section>
        <h3>Cadastro de Pacientes</h3>
        <form name="Cadastro" action="cadastro.php" method="POST">
            <div class="form-group">
                <label for="ID">ID:</label>
                <input type="text" id="ID" name="ID" size="50" required>
            </div>
            <div class="form-group">
                <label for="Nome">Nome:</label>
                <input type="text" id="Nome" name="Nome" size="46" required>
            </div>
            <input type="submit" name="enviar" value="Cadastrar">
        </form>
    </section>
</body>
</html>
