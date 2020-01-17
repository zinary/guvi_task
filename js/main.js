
$(document).ready(function(){


$("#Phone").ForceNumericOnly();

//login page
	// console.log("loaded");
		
$("#LoginButton").on('click', function(e){
	e.preventDefault();
		var Email = $("#LEmail").val();
		var Password = $("#LPassword").val();
			if (Email == "" || Password == ""){
				alert('Please fill the form');
				
			}
			else {
				$.ajax({
					url:'login.php',
					method : 'POST',
					data : {
						login : 1,			
						email : Email,
						password : Password
					},
					success : function(response){
						console.log(response);
						console.log("inside ajax");
						// $("#tname").append(response.Name);
						if(response.indexOf('success') >= 0){
							window.location='profile.html';

						}
						else{
							$("#wrongpassword").css("display","block");
						}

			
					},
					dataType : 'text'
						});
			}

			});
			
	
	
//rgister page

$("#RegisterButton").on('click', function(){
	var Email = $("#Email").val();
	var Name = $("#Name").val();
	var Qualification = $("#Qualification").val();
	var PhoneNumber = $("#Phone").val();
	var Password = $("#Password").val();
	

	if (Email == "" || Name == "" || PhoneNumber == "" || Password == "" || Qualification == "" ){
	
		
		console.log("empty");
		  alert('please fill all the fields');
	}

			else {	
			
				console.log("success");	
				ajaxRegister();
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