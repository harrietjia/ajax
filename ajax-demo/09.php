<?php
    $user = $_POST['user'];
    // var_dump($user);

    $doc = new DOMDocument();
    $result = $doc->loadXML($user);
    // var_dump($result); 是否可以解析

    header('Content-Type:text/xml'); // 相应头一定要改为xml
    echo $doc->saveXML();
    // echo $user;
?>
