<?php
require_once('dbconnection.php');



if(isset($_POST['login'])){
    $email = mysqli_real_escape_string($connection, $_POST['email']); 
    $userpassword =mysqli_real_escape_string($connection, sha1($_POST['password']));

   
    $stmt = $connection->prepare(' SELECT * FROM `details` WHERE email = ? AND password = ?');
    $stmt->bind_param("ss",$email,$userpassword);
    $stmt->execute();
  
    $result = $stmt->get_result();
    if($result->num_rows === 0) exit('No rows');
    while($row = $result->fetch_assoc()) {
      $userdata['name'] = $row['name'];
      $userdata['email'] = $row['email'];
      $userdata['phone'] = $row['phone'];
      $userdata['dob'] = $row['dob'];
      $userdata['qualification'] = $row['qualification'];
      
    }
    

        $jsonData = json_encode($userdata);
        echo($jsonData);
        
      }
    else {
       
        exit('failed');
    } 
    $stmt->close();


?>