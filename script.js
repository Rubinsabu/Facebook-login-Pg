$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
            fname:{
                required:true,
                minlength:4,
                maxlength:6
            },
            sname:{
                required:true,
                minlength:4
            },
            emailAddress:{
                required:true,
                email:true
            },
            password:{
                required:true,
                minlength:6
            },
            day:{
                required:true

            },
            gender:{
                required:true
            }
        },
        messages:{
            fname:{
                
            required:"Enter First Name",
            minlength:"Enter atleast 4 characters"
            }
        }
    })
})