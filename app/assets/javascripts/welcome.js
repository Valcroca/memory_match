$(document).ready(function(){

  var animals = ['cat', 'cat', 'dog', 'dog', 'lion', 'lion', 'elephant', 'elephant', 'tiger', 'tiger', 'bear', 'bear', 'liger', 'liger', 'raccoon', 'raccoon'];

  var clickCount = 0;

  var comparisonArray = [];

  var matchCount = 0;

  var divArray = [];

  function innerHTML () {
    $('.memory-card').each(function() {
      var randomElement = Math.floor(Math.random() * animals.length);
      var animal = animals.splice(randomElement, 1).toString();
      $(this).html(animal);
    })
  };

  innerHTML();

  $('.card-panel').click(function(){
    clickCount++;
    text = $(this).children().first();
    text.removeClass('hide');
    divArray.unshift(text);
    comparisonArray.unshift(text.html());
    if (clickCount == 2) {
      matchCheck(divArray);
    }

  });


  function matchCheck(divArray) {
    if (comparisonArray[0] == comparisonArray[1]) {
      alert('It is a match!');
      matchCount++;
      gameOverCheck();
    } else {
        alert('Nope, try again!');
        divArray[0].addClass('hide');
        divArray[1].addClass('hide');
        clickCount = 0;
        divArray.length = 0;
    }
  }

  function gameOverCheck() {
    if (matchCount == 8) {
      alert('You win!');
      location.reload();
    } else {
      clickCount = 0;
    }
  }
});
