<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Paciente</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href = "frontend/style.css" rel = "stylesheet"
</head>
    <body>
        <h3> Cadastro de Pacientes</h3><br>
        <form name = "Cadastro" action = "cadastro.php" method = "POST">
        <label> ID: </label>
        <input type = "text" name = "ID" size = "50" ></br>
        <label> Nome : </label>
        <input type = "text" name = "Nome" size = "46" ></br>

        <input type = "submit" name = "enviar" value = "Cadastrar">
        </form>

    </body>
</html>