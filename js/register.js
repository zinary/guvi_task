
$(document).ready(function(){


$("#Phone").ForceNumericOnly();

//login page
	// console.log("loaded");

	
	
//rgister page

$("#RegisterButton").on('click', function(){
	var Email = $("#Email").val();
	var Name = $("#Name").val();
	var Qualification = $("#Qualification").val();
	var PhoneNumber = $("#Phone").val();
	var DOB = $("#dob").val();
	var Password = $("#Password").val();
	

	if (Email == "" || Name == "" || PhoneNumber == "" || Password == "" || Qualification == "" || DOB == ""){
	
		
		console.log("empty");
		  alert('please fill all the fields');

	}

			else {	

				 if(  !validateEmail(Email)) {
                                
				$("#wrongemail1").css("display","block");
				

			 }
			 else{
				$("#wrongemail1").css("display","none");
				ajaxRegister();
			 }
				
				// console.log("success");	

				
				}
		
	
function ajaxRegister(){
	$.ajax({
	
		url:'register.php',
		method : 'POST',
		data : {
			register : 1,			
			name : Name,
			email : Email,
			qualification : Qualification,
			phonenumber : PhoneNumber,
			dob : DOB,
			password : Password
			
		},
		success : function(response){
			console.log(response);
			if(response.indexOf('added') >=0 ){
			// alert('Registration Successfull');
			swal({
                title: "Regsitration Successful!",
                text: 'Thank you for registering!',
                icon: "success",
				button: "Login",
				
			})
			.then((value) => {
					
				window.location='login.html';
			
			
		});
			
			}
			else{
				swal({
					title: "Already Registered!",
					text: 'Please sign in!',
					icon: "success",
					button: "Login",
					
				})
				.then((value) => {
					
					window.location='login.html';
				
				
			});
		}
		},
		dataType : 'text'
			});
}



});



});

function validateEmail(validatedemail) {
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	return emailReg.test(validatedemail);
  }
jQuery.fn.ForceNumericOnly =
function()
{
    return this.each(function()
    {
        $(this).keydown(function(e)
        {
            var key = e.charCode || e.keyCode || 0; 
            return (
                key == 8 || 
                key == 9 ||
                key == 13 ||
                key == 46 ||
                key == 110 ||
                key == 190 ||
                (key >= 35 && key <= 40) ||
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105));
        });
    });
};