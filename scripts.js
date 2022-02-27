const USERNAME_LENGTH = 6;
const COMMENT_LENGTH = 0;

// Scripts to complete assignment
$(function(){
// ---------------------------------------------------
// Step (7) 3. STYLE IMAGES AND TITLES
// ---------------------------------------------------
$('.card-title').css({
    'font-size': '30px',
    'border-radius': '50%',
    'width': '90px',
    'height': '90px',
    'padding-top': '25px',
    'background': 'rgba(255,255,255,0.5)',
    'border': '1px solid white',
    'text-align': 'center',
    'font-weight': '700'});


// ---------------------------------------------------
// Step (8) 1. DISABLE SUBMIT BUTTON UNTIL VALID
// ---------------------------------------------------
$('#submitBtn').prop('disabled', true);
    

// ---------------------------------------------------
// Step (8) 3. DISABLE ERROR MESSAGES 
// ---------------------------------------------------
$('.error').hide();


// ---------------------------------------------------
// Step (8) 4-7. VALIDATE FIELDS USING FOCUSOUT()  
// ---------------------------------------------------

// hide error message when user starts to type in a field
$('#username').on('focus', function(){
    $('#username_error').hide();
});
$('#comment').on('focus', function(){
    $('#comment_error').hide();
});


// on unfocus (blur), validate each field and enable submit button if valid
$('#username').on('blur', function(){
    let nameLen = $('#username').val().length;

    if(nameLen < USERNAME_LENGTH){
        $('#username_error').show();
        $('#submitBtn').prop('disabled', true);
    }else{
        if($('#comment').val().length > COMMENT_LENGTH){
            $('#submitBtn').prop('disabled', false);
        }
    }
});
$('#comment').on('blur', function(){
    let commentLen = $('#comment').val().length;

    if(commentLen == 0){
        $('#comment_error').show();
        $('#submitBtn').prop('disabled', true);
    }else{
        if($('#username').val().length >= USERNAME_LENGTH){
            $('#submitBtn').prop('disabled', false);
        }
    }
});


// ---------------------------------------------------
// Step (8) 8. STYLE SUBMIT BUTTON  
// ---------------------------------------------------

// style submit button - initial style
$('#submitBtn').css('border', '2px solid #FFF');
$("#submitBtn").css('background','#62817A');

// hover( over, out ) 
$('#submitBtn').hover(function(){
    $('#submitBtn').css('background','aquamarine');
    $('#submitBtn').css('color','black');
  },
function(){
    $("#submitBtn").css('background','#62817A');
    $('#submitBtn').css('color','white');
});

});
