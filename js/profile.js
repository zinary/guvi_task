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



    $("#modalbutton").on('click',function(){
 

        $("#Name").val(some.name);
         $("#Email").val(some.email); 
        $("#Qualification").val(some.qualification);
        $("#Phone").val(some.phone);
        $("#dob").val(some.dob);

      
        
        // console.log(Email);
    });

    $("#UpdateButton").on('click',function(e){
        e.preventDefault();
        var Email = some.email
        var Name = some.name
        var Qualification = some.qualification
        var PhoneNumber =some.phone
        var DOB = some.dob
        $.ajax({
	
            url:'update.php',
            method : 'POST',
            data : {
                update : 1,			
                name : Name,
                email : Email,
                qualification : Qualification,
                phonenumber : PhoneNumber,
                dob : DOB
               
                
            },
            success : function(response){
                console.log(response);
                if(response.indexOf('success') >=0 ){
                
               console.log('updated');
                    window.location='profile.html';
                
                }
                dataType : 'text'

            }
			});

    });
}
else{
    swal({
        title: "Logged out !",
        
        icon: "success",
        button: "Close",
        
    })
    .then((value) => {
            
        window.location='index.html';
    
    
});
  
}

});