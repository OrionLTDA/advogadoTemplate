showMenu()

$( window ).resize( () => {
    showMenu()
})

function showMenu(){
    const screenWidth = screen.width;
    const windowWidth = window.innerWidth;

    if ( screenWidth <= 800 || windowWidth <= 800){
        $('#navbar > ul').css({
            "display":"none"
        })
        $('#navbar > #openMenu').css({
            "display":"flex"
        })
        $('#menu').css({
            "display":"none"
        })

    }else{
        $('#navbar > ul').css({
            "display":"flex"
        })
        $('#navbar > #openMenu').css({
            "display":"none"
        })
    }
}

$('#openMenu').on('click', () => {
    $('#menu').toggle()
})