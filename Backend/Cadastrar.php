<?php
    $ID = $_POST ['ID'];
    $Nome = $_POST ['Nome'];
    $strcon = mysqli_connect ("localhost","root","123","sga4") or die ("Erro ao conectar com o banco");
    $sql = "INSERT INTO cadastro VALUES ('".$ID."' , '".$Nome."');"; 
    mysqli_query($strcon, $sql) or die ('Erro ao tentar cadastrar registro'); 
    echo "Paciente Cadastrado com sucesso";

?>
