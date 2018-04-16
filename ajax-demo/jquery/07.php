<?php
    $username = $_POST['username'];
    $password = $_POST['password'];

    if($username == 'admin' && $password == 'admin'){
        echo 'success';
    }else{
        echo 'error';
    }
?>
