<?php
    // echo '{"message":"getjson success"}';
    $callback = $_GET['callback'];
    echo $callback.'({"message":"getjson success"})';
?>
