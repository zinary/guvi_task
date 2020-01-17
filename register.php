<?php

if(isset($_POST['register'])){
    $email = $_POST['email'];
    $password = sha1($_POST['password']);
    exit($email." ".$password);
}

?>