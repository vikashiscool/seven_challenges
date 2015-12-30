var response = {
  data: [
    { message: "Hello World" },
    { message: "One man's constant is another man's variable." },
    { message: "Syntactic sugar causes cancer of the semicolon." }
  ]
};

$(document).ready(function(){

  /*
   * Can you append _every_ message in
   * response data to the target container
   * in index.html, using a loop?
  */
//define the function first
  function render (items) {
    items.forEach(function (item) {
    $('#target').append("<p>" + item.message + "</p>");
    // $('#target').append(response.data[0].message);
    })
    // LOOP
      // var item = ...
      // $("div#target").append("<p>" + item.message + "</p>")
    //
    }
  //...then call the function
  render(response.data);
});

 
