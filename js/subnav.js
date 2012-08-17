$MASTHEAD = $('#masthead button');
SIGN_UP_STYLE = 'btn-primary'
BLEND_IN_STYLE = ''

if ($MASTHEAD.length === 0) {
    $('#global-nav button').removeClass(BLEND_IN_STYLE);
    $('#global-nav button').addClass(SIGN_UP_STYLE);
} else {
    $(document).scroll(function(){
        masthead_bottom = $MASTHEAD.offset().top
        if ($(this).scrollTop() > masthead_bottom) {
            $('#global-nav button').removeClass(BLEND_IN_STYLE);
            $('#global-nav button').addClass(SIGN_UP_STYLE);
        } else {
            $('#global-nav button').removeClass(SIGN_UP_STYLE);
            $('#global-nav button').addClass(BLEND_IN_STYLE);
        }
    });
}


$('#global-nav').scrollspy()
