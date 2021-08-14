$(window).scroll(function (e){
    var scroll = $(window).scrollTop();
    if(scroll <= 150){
        document.querySelector(".navbar").style.background = "none";
        document.querySelector(".navbar").style.boxShadow = "none";
    }else{
        document.querySelector(".navbar").style.backgroundColor = "black";
        document.querySelector(".navbar").style.boxShadow = "0 2px 2px 0 #00ffff";
    }
})