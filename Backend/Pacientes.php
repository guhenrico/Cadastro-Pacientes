<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Conexão com o Banco</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
    <script src="main.js"></script>
</head>
    <body>
        <h3> Cadastro Pacientes</h3><br>
        <form name = "Cadastro" action = "Cadastrar.php" method = "POST">
        <label> RA: </label>
        <input type = "text" name = "ra" size = "30" ></br>
        <label> Nome Aluno: </label>
        <input type = "text" name = "nome" size = "20" ></br>

        <input type = "submit" name = "enviar" value = "Envia">
        </form>

    </body>
</html>