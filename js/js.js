$(window).scroll(function (){
    var scroll = $(window).scrollTop();
    if(scroll <= 150){
        document.querySelector(".navbar").style.background = "none";
        document.querySelector(".navbar").style.boxShadow = "none";
    }else{
        document.querySelector(".navbar").style.backgroundColor = "black";
        document.querySelector(".navbar").style.boxShadow = "0 2px 2px 0 #00ffff";
    }
})

$('nav-link, btn-ghost').click(function(){
    if(
        location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        &&
        location.hostname == this.hostname
    ){
        var target = $(this.hash);
        target = target.length ? target: $('name' + this.hash.scile(1) + '1');
        if(target.length){
            $('html', 'body').animate({
                scrollTop: target.offset,

            }, 3000)
            return false;
        }
    }
})
$(".navbar li a").click(function(){
    $(".navbar li a").parent().removeClass("active")
    $(this).parent().addClass("active");
})

$(window).scroll(function (){
    var scroll = $(window).scrollTop();
    if(scroll >= 0 && scroll <= 650){
        $('#home1').parent().addClass("active")
    }else{
        $('#home1').parent().removeClass("active")
    }
})
$(window).scroll(function (){
    var scroll = $(window).scrollTop();
    if(scroll >= 651 && scroll <= 1450){
        $('#about1').parent().addClass("active")
    }else{
        $('#about1').parent().removeClass("active")
    }
})
$(window).scroll(function (){
    var scroll = $(window).scrollTop();
    if(scroll >= 1451 && scroll <= 2184){
        $('#slider1').parent().addClass("active")
    }else{
        $('#slider1').parent().removeClass("active")
    }
})
$(window).scroll(function (){
    var scroll = $(window).scrollTop();
    if(scroll >= 2185 && scroll <= 3075){
        $('#skills1').parent().addClass("active")
    }else{
        $('#skills1').parent().removeClass("active")
    }
})
$(window).scroll(function (){
    var scroll = $(window).scrollTop();
    if(scroll >= 3076 && scroll <= 3560){
        $('#contact1').parent().addClass("active")
    }else{
        $('#contact1').parent().removeClass("active")
    }
})
$(window).scroll(function (){
    var scroll = $(window).scrollTop();
    if(scroll >= 3561){
        $('#projects1').parent().addClass("active")
    }else{
        $('#projects1').parent().removeClass("active")
    }
})