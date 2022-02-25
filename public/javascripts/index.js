var submitButton = document.getElementById("submit1");

submitButton.addEventListener("click", function(){
    var nameSubmit = document.getElementById("name");
    var itemSubmit = document.getElementById("item");
 alert(nameSubmit.value + itemSubmit.value)
})