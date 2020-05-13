$(function(){
    "use strict";

    let users=null;
    $('#btnFetch').click(function(){
      createLoadingMesage("#posts");
      const uid = $("#userId").val();
      // get user posts
      fetch(`http://jsonplaceholder.typicode.com/posts?userId=${uid}`)
        .then(response=>response.json())
        .then(renderPost)
        .catch(error=>console.log(error));

      createLoadingMesage("#info");
      // get users
      fetch(`http://jsonplaceholder.typicode.com/users`)
        .then(response=>response.json())
        .then(renderUserInfo)
        .catch(error=>console.log(error));
     
    })

    
    $("#posts").on('click', '.btnPostComment', function(evt){
      createLoadingMesage("#comments");
      let _id = parseInt(this.getAttribute("postid"))+1;
      fetch(`http://jsonplaceholder.typicode.com/comments?postId=${_id}`,
      ).then(response=>response.json()).then(renderComment);
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
     * @param {Promise} response - json data
     */
    function renderComment(data){
      let rawHtml = "<ul>";
      for(let inx in data){
        let row = data[inx];
        rawHtml += `<li>${row.body}</li>`
      }
      rawHtml += "</ul>"
      $('#comments').html(rawHtml);
    }

    /**
     * Display json Object user
     * @param {Promise} response - json data
     */
    function renderUserInfo(data){
      console.log(data);
      const uid = $("#userId").val();
      const user = data.find(u=>u.id==uid);
      if(user===undefined) return;
      
      let rawHtml = "";
      rawHtml = `<dl>
        <dt>ID</dt>
        <dd>${user.id}</dd>
        <dt>Name</dt>
        <dd>${user.name}</dd>
        <dt>Username</dt>
        <dd>${user.username}</dd>
        <dt>Email</dt>
        <dd>${user.email}</dd>
        <dt>Phone</dt>
        <dd>${user.phone}</dd>
        <dt>Website</dt>
        <dd>${user.website}</dd>
      </dl>`
      $('#info').html(rawHtml);
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