<?php

if(isset($_POST["selecionado"]) != ""){

    if (is_array($_POST["selecionado"]))
    {
      $selecionado= 1;

        while(list($key,$value) = each($_POST["selecionado"]))
        {
            $sql =" UPDATE tb_album SET selecionado = 1 WHERE  tb_album.id_album = ". $value;
            if(mysqli_query($conexao, $sql)) {
                echo "Adicionado a Selecionados com sucesso!";
            }

        }
    }
}

 ?>