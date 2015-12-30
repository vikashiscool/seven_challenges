function render(items) {
  var $target_div = $("div#target");
  items.forEach(function(item){
    $target_div.append("<p>" + item.message + "</p>");
  })
}

$(document).ready(function(){
  //When the user clicks the "tweet" button, can you submit the form

  $("form").on("submit", function (event){
    event.preventDefault();
    var $form = $(this);
    var data = $form.serialize();
   //****.serialize() -- Creates a text string of form values in standard URL encoded notation. Acts on a jQuery object that has selected individual form controls (like <input) when making an AJAX request.****
   // using ajax and then render the ajax-response data?
  
  
    $.post('/api/tweets', data, function(response){
      render(response.data);
    });
  })
  
})


//****event.preventDefault() method stops the default action of an element from happening. For example, it prevenst a submit button from submitting a form or a link from following the URL.****