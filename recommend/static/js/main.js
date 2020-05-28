
// Wait for the DOM to be ready
$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"

  $('#login').on('click',()=>{
    $('#registerform').hide();
    $('#loginform').show();
    $('#login').addClass("active");
    $('#register').removeClass("active");
  })
  $('#register').on('click',()=>{
    $('#loginform').hide();
    $('#login').removeClass("active");
    $('#register').addClass("active");
    $('#registerform').show();
  })


  $('#login-form').validate({
    rules:{
      password:
      {
        minlength:8,
      },
      loginemail:
      {
        email:true,
        required:true,
      }
    },
    messages:{
      password:{
        minlength:"The password should be of minimum 8 characters",
        required:'The Field is required',
      },
      loginemail:{
        email:'Enter the correct email type local@example.com',
        required:'This Field is required'
      }
    },
    errorPlacement: function(error, element) {
    var placement = $(element).data('error');
    if (placement) {
      $(placement).append(error)
    }
    else {
      error.insertAfter(element);
    }
  }
  })

  $('#register-form').validate({
    // Specify validation rules
    rules: {
      name:{
        minlength:3,
        remote:{
          url:'/register/check/',
          method:'GET',
          data:{
            name:function(){return $('#id_name').val()},
            type:'username',
          }
        }
      },
      registeremail:
      {
        remote:{
          url:"/register/check/",
          method:'GET',
          data:{
            email:function(){return $('#id_registeremail').val()},
            type:"mail",
          }
        },
        email:true,
        required:true,
      },
      password1:
      {
        required:true,
        minlength:8,
      },
      password2:
      {
        equalTo:'#id_password1'
      }
    },
    // Specify validation error messages
    messages: {
      name:{
        remote:'A user with this name already exist',
      },
      registeremail:
      {
        remote:"Email Address already exist",
        email:"Enter the correct Email Type",
        required:"This Field is Required"
      },
      password1:{
        minlength:"The length is short",
      },
      password2:
      {
        equalTo:'Confirmation and password should match'
      }
    },
      errorPlacement: function(error, element) {
      var placement = $(element).data('error');
      if (placement) {
        $(placement).append(error)
      }
      else {
        error.insertAfter(element);
      }
    }
});
})
