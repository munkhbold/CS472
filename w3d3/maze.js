$(document).ready(function(){
    "use strict"

    let status = null;
    let $boundary = $('.boundary');

    /** Lose when mouse enter to boundry */
    $boundary.mouseover(function(){
      if( status !== 'start') return;
      if(!$boundary.hasClass('youlose')) lost();
    })

    /** Finish the maze when mouse enter to end */
    $('#end').mouseover(function(){
      if(status === 'start'){
        $('#status').text('You win! :]');
        status = 'end';
      }
    });

    /** start the maze */
    $('#start').click(function(){
      $boundary.trigger('mouseover');
      reset();
    });

    /** make user lose if user cheats */
    $('#maze').mouseleave(function(){
      if(status === 'start') lost();
    });

    /** reset all */
    function reset(){
      status = 'start';
      $('#status').text('Click the "S" to begin.')
      $boundary.removeClass('youlose');
    }

    /** Make boundry red and show text to notify that user lost */
    function lost(){
      $('#status').text('Sorry, you lost. :[');
      $('.boundary').addClass('youlose');
      status = 'lost';
    }
})