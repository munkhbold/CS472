$(document).ready(function(){
  $('#idBtnStart').click(function(){
    start();
  })

  $('#idScreen').on('click', '.circle', function(event){
    clean(event.target);
  })

  $('#idScreen').on('mouseover', '.circle', function(event){
    $('.circle').css('opacity', '0.5');
    $(event.target).css('opacity', '1.0');
  })


  /**
   * Start the game
   */
  function start(){
    const size = $('#idAmount').val();
    const interval = $('#idRate').val();
    const width = $('#idWidth').val();
    const qty = $('#idQty').val();
    createCircles(parseInt(width), parseInt(qty));
    setInterval(grow.bind(null, parseInt(size)), parseInt(interval));
  }

  /**
   * Increase circle size
   * @param {Number} size - increase size
   */
  function grow(size){
    const w = $('.circle').css('width');
    $('.circle').css({
      width: parseInt(w) + size + 'px',
      height: parseInt(w) + size + 'px'
    })
  }

  /**
   * Remove div when use click on it
   * @param {WindowElement} target 
   */
  function clean(target){
    $(target).remove();
  }

  /**
   * @returns {Number} random integer between 1-256
   */
  function random(){
    return Math.floor(Math.random() * 256);
  }

  /**
   * Create circles with random colors and position
   * @param {Number} width - start width of circles
   * @param {Number} qty - number of circles
   */
  function createCircles(width, qty){
    const $screen = $('#idScreen');
    for(let i=0; i<qty; i++){
      let x = random();
      let y = random();
      let z = random();
      let bgColor = `rgb(${x},${y},${z})`;
      let $newDiv = $('<div class="circle">');
      $newDiv.css({
        'width': width + 'px',
        'height': width + 'px',
        'background-color': bgColor,
        'left': random() * 2 + 'px',
      });
      $screen.append($newDiv);
    }
  }
});