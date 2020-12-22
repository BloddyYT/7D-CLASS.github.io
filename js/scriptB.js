blockHeight = $('.class').height()
$('half').hide()

    $('button').click(function() {
            $('.text').remove()
            $('button').animate({
                width: 0,
                display: 'none',
                fontSize: 0,
                Background: '#FFF',
                margin: '0',
                padding: '0',
                borderRadius : '0'
            },
                500, function() {
                $('button').animate({
                    height: blockHeight
                });

            if (screen.width > 900){
                $('button').css('marginRight', '45%');
            }
            $('.half').show('slow').animate({opacity: '1'}, 650)
        });
}); 
