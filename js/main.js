
$(document).ready(function(){


$("#Phone").ForceNumericOnly();

//login page
	console.log("loaded");
	
	$("#LoginButton").on('click', function(){
		var email = $("#Email").val();
		var password = $("#Password").val();
			if (email != "" || password != ""){
				console.log(email +  " "+password);
				
			}
			else alert('Please fill the form');
				
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
		//   alert('please fill all the fields');
	}

			else {	
			
				console.log("success");	
					ajaxCall();
				}
		
	
function ajaxCall(){
	$.ajax({
	
		url:'register.php',
		method : 'POST',
		data : {
			register : 1,
			email : Email,
			name : Name,
			qualification : Qualification,
			phonenumber : PhoneNumber,
			password : Password,
			
		},
		success : function(response){
			console.log(response);

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
