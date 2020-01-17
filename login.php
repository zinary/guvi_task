<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "userdata";

$connection = new mysqli($servername, $username, $password, $dbname);
if ($connection->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}



if(isset($_POST['login'])){
    $email = mysqli_real_escape_string($connection, $_POST['email']); 
    $userpassword =mysqli_real_escape_string($connection, sha1($_POST['password']));

   
    $stmt = $connection->prepare(' SELECT * FROM `details` WHERE email = ? AND password = ?');
    $stmt->bind_param("ss",$email,$userpassword);
    $stmt->execute();
    // print("sadd");
    // $name = $stmt->get_result();
    // var_dump($name);
    
       $stmt->store_result(); 
      
      if($stmt->num_rows > 0){
        //   var_dump($name);
        exit('success');
      }
    else {
       
        exit('failed');
    } 
    $stmt->close();
}

?>