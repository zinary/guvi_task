<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "userdata";

$connection = new mysqli($servername, $username, $password, $dbname);
if ($connection->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
if(isset($_POST['register'])){
      
      $name=mysqli_real_escape_string($connection,$_POST['name']);
      $email = mysqli_real_escape_string($connection, $_POST['email']); 
      $qualification=mysqli_real_escape_string($connection,$_POST['qualification']);
      $number=mysqli_real_escape_string($connection,$_POST['phonenumber']);
      $userpassword =mysqli_real_escape_string($connection, sha1($_POST['password']));

      $stmt = $connection->prepare('SELECT email FROM details WHERE email=? LIMIT 1');
      $stmt->bind_param('s',$email);
      $stmt->execute();
      $stmt->bind_result($email);
      $stmt->store_result();
      $rnum=$stmt->num_rows;
          if($rnum==0){

$stmt = $connection->prepare('INSERT INTO `details`(`name`, `email`, `qualification`, `phone`, `password`) VALUES (?,?,?,?,?)' );
$stmt->bind_param("sssss",$name,$email,$qualification, $number,$userpassword);
$stmt->execute();

// echo "Registration Successful sql";

$stmt->close();  


$data=array();


if(file_exists('data.json'))
{
$current_data = file_get_contents('data.json');
$data=json_decode($current_data,true);
$extra = array(
    'name'=>$_POST['name'],
    'email'=>$_POST['email'],
    'qualification'=>$_POST['qualification'],
    'number'=>$_POST['phonenumber'],
    'password'=>sha1($_POST['password'])

);
array_push($data,$extra);
$final_data=json_encode($data);
    file_put_contents('data.json',$final_data);
}

exit("added");
 }


         else{
            exit("existing");
            
            
            die();
        }

    
}
    
?>