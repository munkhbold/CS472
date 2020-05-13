$(function(){
    "use strict";
    $('#btnFetch').click(function(){
      createLoadingMesage("#posts");
      const uid = $("#userId").val();
      $.get('http://jsonplaceholder.typicode.com/posts',
        {"userId": uid},
      ).done(renderPost)
    })

    $("#posts").on('click', '.btnPostComment', function(evt){
      createLoadingMesage("#comments");
      $.get('http://jsonplaceholder.typicode.com/comments',
        {"postId": parseInt(this.getAttribute("postid"))+1},
      ).done(renderComment)
    })

    /**
     * Display json Object posts recieved from service
     * @param {Object} data - json data
     */
    function renderPost(data){
      let rawHtml = "<ul>";
      for(let inx in data){
        let row = data[inx];
        rawHtml += `<li><strong>${row.title}</strong><br/>${row.body}<br/>
                    <input type="button" class="btnPostComment" value="Comment" postId="${inx}"></li>`
      }
      rawHtml += "</ul>";
      $('#posts').html(rawHtml);
    }

    /**
     * Display json Object comments recieved from service
     * @param {Object} data - json data
     */
    function renderComment(data){
      let rawHtml = "";
      for(let inx in data){
        let row = data[inx];
        rawHtml += `<li>${row.body}</li>`
      }
      $('#comments').html(rawHtml);
    }


    /**
     * Show loader
     * @param {String} selector - $query selector
     */
    function createLoadingMesage(selector) {
      var throbber = $('<img>').attr('src','loading.gif');
      var div = $('<div>',{
          'text':'Loading...',
          'id':'loading'
      })
          .append(throbber)
          .hide()
          .ajaxStart(function() {
              $(this).show();
              $('#boot').empty();
          }).ajaxStop(function() {
              $(this).hide();
          });
  
      $(selector).append(div);
    }
    
})