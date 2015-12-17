$(document).ready(function(){

  // $('.memory-match-box').slideToggle('slow', function(){
  //     if($('.memory-match-box').is(':hidden')){
  //       $('.memory-match-box').text('if');
  //     } else {
  //       $('.memory-match-box').text('else');
  //     }
  //   });
  var numberOfClicks = 0;

  var values = ['cat', 'cat', 'car', 'car', 'dog', 'dog', 'rabbit', 'rabbit', 'snake', 'snake', 'fish', 'fish', 'bear', 'bear', 'kangaroo', 'kangaroo']
  
  var value = values[Math.floor(values.length * Math.random())];

  var boxes = $('.memory-match-box');

  $('.memory-match-box').html().addClass('hide');

  for(i = 0; i < boxes.length; i++){
    var box = boxes[i];
    box.innerHTML = values.splice(Math.floor(values.length * Math.random()), 1);
  };
  

  $('.memory-match-box').click(function(){
    numberOfClicks += 1;
    $(this).addClass('clicked');
    $(this).removeClass('hidden');

    clicks();
  });

  // $('#box1').click(function(){
  //    numberOfClicks += 1;
  //    $(this).addClass('clicked');
     
  //    clicks();
  // });

  // $('#box2').click(function(){
  //   numberOfClicks += 1;
  //   $(this).addClass('clicked');
     
  //    clicks();
  // });

  // $('#box3').click(function(){
  //   numberOfClicks += 1;
  //   $(this).addClass('clicked');
    
  //   clicks();
  // });

  // $('#box4').click(function(){
  //   numberOfClicks += 1;
  //   $(this).addClass('clicked');
    
  //   clicks();
  // });

  // $('#box5').click(function(){
  //   numberOfClicks += 1;
  //   $(this).addClass('clicked');
    
  //   clicks();
  // });

  // $('#box6').click(function(){
  //   numberOfClicks += 1;
  //   $(this).addClass('clicked');
    
  //   clicks();
  // });

  // $('#box7').click(function(){
  //   numberOfClicks += 1;
  //   $(this).addClass('clicked');
    
  //   clicks();
  // });

  // $('#box8').click(function(){
  //   numberOfClicks += 1;
  //   $(this).addClass('clicked');
    
  //   clicks();
  // });

  // $('#box9').click(function(){
  //   numberOfClicks += 1;
  //   $(this).addClass('clicked');
    
  //   clicks();
  // });

  // $('#box10').click(function(){
  //   numberOfClicks += 1;
  //   $(this).addClass('clicked');
    
  //   clicks();
  // });

  // $('#box11').click(function(){
  //   numberOfClicks += 1;
  //   $(this).addClass('clicked');
    
  //   clicks();
  // });

  // $('#box12').click(function(){
  //   numberOfClicks += 1;
  //   $(this).addClass('clicked');
    
  //   clicks();
  // });

  // $('#box13').click(function(){
  //   numberOfClicks += 1;
  //   $(this).addClass('clicked');
    
  //   clicks();
  // });

  // $('#box14').click(function(){
  //   numberOfClicks += 1;
  //   $(this).addClass('clicked');
    
  //   clicks();
  // });

  // $('#box15').click(function(){
  //   numberOfClicks += 1;
  //   $(this).addClass('clicked');

  //   clicks();
  // });

  // $('#box16').click(function(){
  //   numberOfClicks += 1;
  //   $(this).addClass('clicked');
    
  //   clicks();
  // });

  function clicks(){
    while (numberOfClicks == 2){
        var array = []

        $('.clicked').each(function() {
        array.push(this.innerHTML);
        console.log(array);
        });
        if (array[0] == array[1]) {
        alert('you win!');
        numberOfClicks = 0;

        } else {
        numberOfClicks = 0;
        alert('no match');
        $('.clicked').each(function() {
        $(this).removeClass('clicked');
        this.innerHTML = '';
        });
        }
      };
  }














});
