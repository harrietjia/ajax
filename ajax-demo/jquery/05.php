<?php
    $user = $_POST['user'];
    $value = $_POST['value'];

    // 手动构造json
    echo '{"user":"'.$user.'","chat":"'.$value.'"}';
?>
