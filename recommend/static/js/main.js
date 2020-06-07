
// Wait for the DOM to be ready
$(function() {


//functions for music functionality
  musicresultarr=[];


  $('#addmusicbtn').on('click',function(){
    let result=$('#autocomplete_music').val()
    $('#autocomplete_music').val('')
    if($.inArray(result, musicsource)>=0&&($.inArray(result, musicresultarr)==-1))
    {
      musicresultarr.push(result)
      $('#musicresult').append('<div class="searchitem" style="padding:2px;"><i style="color:black;margin-left:10px;margin-right:10px" class="fa fa-close"></i><span>'+result+'</span>')
      if($('#musicresult div').length>=5)
      {
        $('#musicbtn').removeClass('disabled')
      }
    }
  })

  $('#musicresult').on('click','i.fa',function(){
    index=musicresultarr.indexOf($(this).next().text())
    musicresultarr.splice(index,1);
    $(this).parent().remove()
  })


  musicsource=[
    '“Tum Dil Ki Dhadkan Mein” Dhadkan (2000)"',
'“Hum To Dil Se Haare” Josh (2000)',
'“Morey Piya” Devdas (2002)',
'“Silsila Ye Chaahat Ka” Devdas (2002)',
'“Bairi Piya” Devdas (2002)',
'“Ankh Hai Bhari Bhari” Tum Se Achcha Kaun Hai (2002)',
'“Kaahe Chhed Mohe” Devdas (2002)',
'“Hamesha Tumko Chaha” Devdas (2002)',
'“Jaadu Hai Nasha Hai” Jism (2002)',
'“Kasam Ki Kasam” Main Prem Ki Diwani Hoon (2003)',
'“Mujhe Haq Hai” Vivah (2006)',
'“Do Anjaane Ajnabi” Vivah (2006)',
'“Milan Abhi Aadha Adhura” Vivah (2006)',
'“Tum Se Hi” Jab We Met (2007)',
'“Lahu Munh Lag Gaya” Goliyon Ki Rasleela Ram-Leela (2013)',
'“Laal Ishq” Goliyon Ki Raasleela Ram-Leela (2013)',
'“Galliyan” Ek Villain (2014)',
'Aaj Ibaadat” Bajirao Mastani (2015)',
'“Mohe Rang Do Laal” Bajirao Mastani (2015)',
'“Aayat” Bajirao Mastani (2015)',
'“Jeeta Tha Jiske Liye” Dilw ale (2015)',
'“Jaadu Teri Nazar” Darr (2015)',
'“Mera Dil Bhi Kitna Paagal Hai” Saajan (2016)',
'“Bahut Pyaar Karte Hai” Saajan (2016)',
'“Aitbaar Nahi Karna” Qayamat: City Under Threat (2016)',
  ]



  $('#autocomplete_music').autocomplete({
    source: function(request, response) {
       var results = $.ui.autocomplete.filter(musicsource, request.term);
       response(results.slice(0, 5));
   },
    classes: {
    "ui-autocomplete": "highlight"
  }
  });


//functions for books functionality
bookresultarr=[];


$('#addbookbtn').on('click',function(){
  let result=$('#autocomplete_book').val()
  $('#autocomplete_book').val('')
  if($.inArray(result, booksource)>=0&&($.inArray(result, bookresultarr)==-1))
  {
    bookresultarr.push(result)
    $('#bookresult').append('<div class="searchitem" style="padding:2px;"><i style="color:black;margin-left:10px;margin-right:10px" class="fa fa-close"></i><span>'+result+'</span>')
    if($('#bookresult div').length>=5)
    {
      $('#bookbtn').removeClass('disabled')
    }
  }
})

$('#bookresult').on('click','i.fa',function(){
  index=bookresultarr.indexOf($(this).next().text())
  bookresultarr.splice(index,1);
  $(this).parent().remove()
})


booksource=[
  "The Hitchhiker's Guide to the Galaxy (Hitchhiker's Guide to the Galaxy, #1)",
  "Little Women",
  "Pride and Prejudice",
  "I Know Why the Caged Bird Sings (Maya Angelou's Autobiography, #1)",
  "The Great Gatsby",
  "To Kill a Mockingbird",
  "The House of the Spirits",
  "Watership Down (Watership Down, #1)",
  "Fahrenheit 451",
  "Wuthering Heights",
  "The Grapes of Wrath",
  "Things Fall Apart (The African Trilogy, #1)",
  "Sense and Sensibility",
  "The Secret Garden",
  "Rebecca",
  "Emma",
  "Half of a Yellow Sun",
  "Persuasion",
  "Northanger Abbey",
  "The Little Prince",
  "In Cold Blood",
  "1984",
  "The Hobbit, or There and Back Again",
  "Brave New World",
  "A Walk in the Woods: Rediscovering America on the Appalachian Trail",
  "Tuck Everlasting",
  "Jane Eyre",
  "A Christmas Carol",
  "Lord of the Flies",
  "Lucky Jim",
  "The Da Vinci Code (Robert Langdon, #2)",
  "Foundation (Foundation, #1)",
  "Life of Pi",
  "Cat's Eye",
  "Are You There God? It's Me, Margaret",
  "The Absolutely True Diary of a Part-Time Indian",
  "Mansfield Park",
  "Great Expectations",
  "Flatland: A Romance of Many Dimensions",
  "The Diary of a Young Girl",
  "Midnight in the Garden of Good and Evil",
  "Harry Potter and the Sorcerer's Stone (Harry Potter, #1)",
  "The Scarlet Letter",
  "Heart of Darkness",
  "The Adventures of Huckleberry Finn",
  "A Clockwork Orange",
  "Night  (The Night Trilogy, #1)",
  "The Good Earth (House of Earth, #1)",
  "Voices from Chernobyl: The Oral History of a Nuclear Disaster",
  "The Old Man and the Sea",
]



$('#autocomplete_book').autocomplete({
  source: function(request, response) {
     var results = $.ui.autocomplete.filter(booksource, request.term);
     response(results.slice(0, 5));
 },
  classes: {
  "ui-autocomplete": "highlight"
}
});

















//functions for movies functionality















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
