//when a user clicks a button with id 'trigger'
$('#trigger').click(function() {
  //change the body's background to yellow
  $('body').css("background", "yellow");

  //fade out all img's over 3 seconds 
  $('img').fadeOut(3000, function() {
    //remove imgs from page when fadeOut is done
    $(this).remove();
  });
});
