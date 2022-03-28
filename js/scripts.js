$(document).ready(function() {
  $("#form").submit(function(e)  {
    e.preventDefault();
    let char = $("#sentence").val();
    let array = char.split(" ");

    let newArray = [];

    array.forEach(function(element) {
      if (element.length >= 3) {
        newArray = newArray.concat(element);
      }     
    });
    newArray.reverse();
    const newChar = newArray.join(" ");
    $("#new-sentence").text(newChar);


});
});