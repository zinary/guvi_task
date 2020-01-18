$(document).ready(function(){
   
var data = localStorage.getItem('data');
if(data){
    var some =JSON.parse(data)
    $("#tname").html(some.name);
    $("#tphone").html(some.phone);
    $("#tqualification").html(some.qualification);
    $("#tdob").html(some.dob);
    $("#tmail").html(some.email);

    $("#Logoutbutton").on('click',function(){
        localStorage.clear();
        location.reload();
    });

}
else{
    swal({
        title: "Logged out Successfully!",
        
        icon: "success",
        button: "Close",
        
    })
    .then((value) => {
            
        window.location='index.html';
    
    
});
  
}

});