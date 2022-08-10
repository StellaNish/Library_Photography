
// JAVASCRIPT FUNCTION 2: generate random location for the user
function generateLocation()
{
    var locationArray = new Array;
    locationArray[4] = "index.html";
    locationArray[1] = "resources.html";
    locationArray[0] = "types_photography.html";
    locationArray[2] = "books.html";
    locationArray[3] = "contact.html";

    var chosenLink = Math.floor(Math.random() * locationArray.length);
    window.open(locationArray[chosenLink]);
}

// JAVASCRIPT FUNCTION 7 :shows and hides filtered items
$(".filter-simple-button").click(function() {
    var value = $(this).attr('data-filter');
    if(value === "all") {
      $('.filter-simple-item').show('1000');
    } else {
      $(".filter-simple-item").not('.'+value).hide('3000');
      $('.filter-simple-item').filter('.'+value).show('3000');
    }
  });
  
// changes active class on filter buttons
  $('.filter-simple-button').click(function () {  
    $(this).siblings().removeClass('is-active');
    $(this).addClass('is-active');
  });
