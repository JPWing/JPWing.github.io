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

$(".theme1").click(function(){
    $('body').css("background", 'url("assets/background1") no-repeat center center fixed')
    loadpage(currentpage, 1);

    currentpage = 1;
});

$(".theme2").click(function(){
    $('body').css("background", 'url("assets/background2") no-repeat center center fixed')
    loadpage(currentpage, 1);

    currentpage = 1;
});

$(".theme3").click(function(){
    $('body').css("background", 'url("assets/background3") no-repeat center center fixed')
    loadpage(currentpage, 1);

    currentpage = 1;
});