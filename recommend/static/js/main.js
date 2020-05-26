
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
        minlength:"The length should be 8 minimum"
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
      password1:{
        minlength:10,
      },
    },
    // Specify validation error messages
    messages: {
      registeremail:'min length should be 20',
      password1:{
        minlength:"The length is short",
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
