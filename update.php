<?php
require_once('dbconnection.php');

if(isset($_POST['update'])){
      
    $name=mysqli_real_escape_string($connection,$_POST['name']);
    $email = mysqli_real_escape_string($connection, $_POST['email']); 
    $qualification=mysqli_real_escape_string($connection,$_POST['qualification']);
    $number=mysqli_real_escape_string($connection,$_POST['phonenumber']);
    $dob=mysqli_real_escape_string($connection,$_POST['dob']);



$stmt = $connection->prepare('UPDATE `details` SET `name`=?,`qualification`=?,`phone`=?,`dob`=? WHERE  email = ?' );
$stmt->bind_param("sssss",$name,$qualification,$number,$dob,$email);
$stmt->execute();

exit('success');


$stmt->close();  
}