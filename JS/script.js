// alert("hi")
    var index = 0;
    kchange();

    function kchange() {

        //Collect all images with class 'slides'
        var xp = document.getElementsByClassName("chng");
        
        //Set all the images display to 'none' (invisible)
       for(let y of xp){
           y.style.display = "none";
       }

        //Increment index variable
        index++;

        //Set index to 1 if it's greater than the amount of images
        if (index > xp.length) {
            index = 1;
        }
        //set image display to 'block' (visible)
        xp[index - 1].style.display = "block";        //set loop to change image every 3000 milliseconds (3 seconds)
        setTimeout(kchange, 2000);
    }


   
    // SHow none

    let none_show = document.getElementById("none-show");

    window.addEventListener('wheel', function(event){
        if(event.deltaY < 0){
            none_show.style.display="block";
        }
        if(event.deltaY > 0){

            none_show.style.display="none";
        }
    });



    // form Validation

   