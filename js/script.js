function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropimg')) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};



$(function(){
    init();

    console.log("Ready")

    $(".theme1").click(function(){
        settheme(1);
        localStorage.setItem("storenumbertheme", "1");
        currenttheme = 1;
    });

    $(".theme2").click(function(){
        settheme(2);
        localStorage.setItem("storenumbertheme", "2");
        currenttheme = 2;
    });
    $(".theme3").click(function(){
        settheme(3);
        localStorage.setItem("storenumbertheme", "3");
        currenttheme = 3;
    });
    $(".theme0").click(function(){
        settheme(4);
        localStorage.setItem("storenumbertheme", "4");
        currenttheme = 4;
    });
})

function init(){
    var img1 = new Image();
    var img2 = new Image();
    var img3 = new Image();
    var img4 = new Image();

    img1.src = 'assets/Background1.jpg';
    img2.src = 'assets/Background2.png';
    img3.src = 'assets/Background3.jpg';
    img4.src = 'assets/Background.jpg';
    if (typeof(Storage) !== "undefined") {
        currenttheme = parseInt(localStorage.getItem("storenumbertheme"));
        if (localStorage.getItem("storenumbertheme") === null)
        {
            settheme(1);
            currenttheme = 1;
        }
        else
        {
            settheme(currenttheme);
        }
    } else {
        console.log("This browser does not support local storage!");
    }
}

function settheme(theme){
    switch(theme)
    {
        case 1:
            $('body').css("background", 'url("assets/Background1.jpg") no-repeat center center fixed');
            $('body').css("background-size", 'cover');
            $('body').css("width", '100%');
            $('body').css("margin", 'auto');
            console.log("This works 1");
            break;

        case 2:
            $('body').css("background", 'url("assets/Background2.jpg") no-repeat center center fixed');
            $('body').css("background-size", 'cover');
            $('body').css("width", '100%');
            $('body').css("margin", 'auto');
            console.log("This works 2");
            break;

        case 3:
            $('body').css("background", 'url("assets/Background2.jpg") no-repeat center center fixed');
            $('body').css("background-size", 'cover');
            $('body').css("width", '100%');
            $('body').css("margin", 'auto');
            console.log("This works 3");
            break;

        case 4:
            $('body').css("background", 'url("assets/Background3.jpg") no-repeat center center fixed');
            $('body').css("background-size", 'cover');
            $('body').css("width", '100%');
            $('body').css("margin", 'auto');
            console.log("This works 4");
            break;
    }
}