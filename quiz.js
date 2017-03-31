$(document).ready(function() {
  $('.tabs .tab-links a').on('click', function(e)  {
    var currentAttrValue = jQuery(this).attr('href');

    // Show/Hide Tabs
    $('.tabs ' + currentAttrValue).show().siblings().hide();

    // Change/remove current tab to active
    $(this).parent('li').addClass('active').siblings().removeClass('active');

    e.preventDefault();
  });
});


//Initializer
function init() {
  //Set correct answers here
  sessionStorage.setItem('a1', 'c');
  sessionStorage.setItem('a2', 'a')
  sessionStorage.setItem('a3', 'b');
  sessionStorage.setItem('a4', 'b');
  sessionStorage.setItem('a5', 'd');
  sessionStorage.setItem('a6', 'b');
  sessionStorage.setItem('a7', 'c');
  sessionStorage.setItem('a8', 'b');
  sessionStorage.setItem('a9', 'a');
  sessionStorage.setItem('a10', 'd');
  sessionStorage.setItem('a11', 'b');
  sessionStorage.setItem('a12', 'c');
  sessionStorage.setItem('a13', 'c');
  sessionStorage.setItem('a14', 'b');
  sessionStorage.setItem('a15', 'd');
  sessionStorage.setItem('a16', 'b');
  sessionStorage.setItem('a17', 'c');
  sessionStorage.setItem('a18', 'a');
  sessionStorage.setItem('a19', 'b');
  sessionStorage.setItem('a20', 'd');
  sessionStorage.setItem('a21', 'b');
  sessionStorage.setItem('a22', 'c');
  sessionStorage.setItem('a23', 'a');
  sessionStorage.setItem('a24', 'b');
  sessionStorage.setItem('a25', 'd');
}



  var counter = 0;

  var score = 0; //Set score to 0
  var total = 25;

//Process the answers
function process(n) {
  //Get input value
  var submitted = $('input[name = q' + n + ']:checked').val();
  if(submitted == sessionStorage.getItem('a' + n + '')) {
    score++;
  }

  if(n == total) {
    $('#result').html('<h1>You scored ' +score+ ' out of 25!</h1>')
  }

  if(n == 1 || n == 4 || n == 7 || n == 9 || n == 12 || n == 15 || n == 18 || n == 20 || n == 22) {
    $('.divToSayNext').fadeIn(400);
  }

  return false;

}



$(document).ready(function() {


  //Hide all questions
  $('.questionForm').hide();
  $('.divToSayNext').hide();

  //Show first question:
  $('#q1').show();

  //Click handler
  $('.questionForm #check').click(function() {
    //Get data attributes
    current = $(this).parents('form:first').data('question');
    next = $(this).parents('form:first').data('question') + 1;

    //Hide all questions
    $('.questionForm').hide();
    $('.divToSayNext').hide();
    //Show/Fade in the next question
    $('#q' + next + '').fadeIn(400);
    process('' + current + '');
    return false;
  });
})

//Add event listener
window.addEventListener('load', init, false);
