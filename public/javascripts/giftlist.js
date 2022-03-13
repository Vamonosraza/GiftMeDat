document.addEventListener('DOMContentLoaded', (event) => {
    //the event occurred
    var addListingButton = document.getElementById("sItem");

    addListingButton.addEventListener("click",function(){
        var newListingDiv = document.getElementsByClassName("container")[0];
        console.log(newListingDiv);
        var gNameValue = document.getElementById("gName").value;
        if(gNameValue){
            newListingDiv.querySelectorAll(".gift_title")[0].innerHTML = gNameValue;
            console.log(newListingDiv);
            document.getElementById('TestingDiv').appendChild(newListingDiv);
        }
    })
})

