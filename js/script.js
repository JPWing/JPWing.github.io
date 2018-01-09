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

$(document).ready(function(){
    $(".theme1").click(function(){
        $('body').css("background", 'url("assets/Background1.jpg") no-repeat center center fixed');
        console.log("This works 1");
    });

    $(".theme2").click(function(){
        $('body').css("background", 'url("assets/Background2.jpg") no-repeat center center fixed');
        console.log("This works 2");
    });

    $(".theme3").click(function(){
        $('body').css("background", 'url("assets/Background3.jpg") no-repeat center center fixed');
        console.log("This works 3");
    });
});