		
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
						// console.log("inside ajax");
                        // $("#tname").append(response.Name);
                    // localStorage.setItem()
						if(response.indexOf('name') >= 0){
                        //    console.log(response.val);
                        localStorage.setItem('data',response);

							window.location='profile.html';

						}
						else{
                            if(  !validateEmail(Email)) {
                                
                                $("#wrongemail").css("display","block");
                                $("#wrongpassword").css("display","none");

                             }
                             else{
                                $("#wrongemail").css("display","none");

                                $("#wrongpassword").css("display","block");
                             }
                           
						}

			
					},
					dataType : 'text'
						});
			}

			});
            function validateEmail(validatedemail) {
                var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
                return emailReg.test(validatedemail);
              }