
var t = {

    0: "1000",
 

}

var obj = {
    '24month' : {
        'quarterly' : '3.500.00',
        'monthly' : '1.28',
        'weekly' : '2.2'
    },
    '18month' : {
        'quarterly' : '2.000.00',
        'monthly' : '1.25',
        'weekly' : '1.8'
    },
    '12month' : {

        'quarterly' : '2.500.00',
        'monthly' : '1.225',
        'weekly' : '1.15'
    }
};

$(document).ready(function() {


    

    $("#slider_amirol").slider({
        range: "min",
        animate: true,

        min: 0,
        max: 28,
        step: 1,
        slide: 
            function(event, ui) 
            {
                update(1,ui.value); //changed
                calcualtePrice(ui.value);
            }
    });

    $('.month').on('click',function(event) {
        var id = $(this).attr('id');

        $('.month').removeClass('selected-month');
        $(this).addClass('selected-month');
        $(".month").removeClass("active-month");
        $(this).addClass("active-month");

        $('#month').val(id);

        calcualtePrice()
    });

    $('.term').on('click',function(event) {
        var id = $(this).attr('id');

        $('.term').removeClass('selected-term');
        $(this).addClass('selected-term');
        $(".term").removeClass("active-term");
        $(this).addClass("active-term");
        $('#term').val(id);

        calcualtePrice()
    });

    update();
    calcualtePrice();
});
        

        
function update(slider,val) {

    if(undefined === val) val = 0;
    var amount = p[val];

    $('#sliderVal').val(val);

    $('#slider_amirol a').html('<label><span class="glyphicon glyphicon-chevron-left"></span> '+amount+' <span class="glyphicon glyphicon-chevron-right"></span></label>');
}

function calcualtePrice(val){
    
    if(undefined === val)
        val = $('#sliderVal').val();

    var month = $('#month').val();
    var term = obj[month][$('#term').val()];

    var totalPrice = term;

    $("#total").val(totalPrice);
    $("#total12").val(Math.round((500)));
    $("#total52").val(Math.round((120)));
}
