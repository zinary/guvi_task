
$(document).ready(function(){
$("#RegisterButton").on('click', function(){
	var Email = $("#Email").val();
	var Name = $("#Name").val();
	var Qualification = $("#Qualification").val();
	var PhoneNumber = $("#Phone").val();
	var DOB = $("#dob").val();
	var Password = $("#Password").val();
	

	if (Email == "" || Name == "" || PhoneNumber == "" || Password == "" || Qualification == "" || DOB == ""){
	
		
		console.log("empty");
		
		  swal({
			title: "Regsitration Unsuccessful!",
			text: 'Please fill all the fields',
			icon: "error",
			button: "Close",
			
		})

	}

			else {	

				 if(  !validateEmail(Email)) {
                                
				$("#wrongemail1").css("display","block");
				

			 }
			 else{
				$("#wrongemail1").css("display","none");
				ajaxRegister();
			 }

				
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
			
			swal({
                title: "Regsitration Successful!",
                text: 'Thank you for registering!',
                icon: "success",
				button: "Login",
				
			})
			.then((value) => {
					
				window.location='index.html';
			
			
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
					
					window.location='index.html';
				
				
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
