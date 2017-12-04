$(document).ready(function() {
var elements = ["h1", "p", "img"];

 elements.forEach(function(element) {
  $(element).click(function(event) {
    alert("This is a(n) " + element + " element");

    event.preventDefault();
    });
  });
});



//   $("h1").click(function() {
//     alert("This is a header.");
//   });
//
//   $("p").click(function() {
//     alert("This is a paragraph.");
//   });
//
//   $("img").click(function() {
//     alert("This is an image.");
//   });
// });
