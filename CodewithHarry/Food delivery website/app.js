let ham=$(".hamburger");
let navlinks=$(".list");
let link=$(".list li");

$(ham).on("click", ()=> {
    $(navlinks).toggleClass("open");
    $(link).each(function(){
        $(this).addClass("fade");
    });
});