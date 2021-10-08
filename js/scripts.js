var AccordianIndex_current = -1;

$(document).ready(function(){
    
    $('.accordian-head').on('click', onClick_AccordianHead);

});


function onClick_AccordianHead(event)
{        
    let accordianIndex = $(this).attr('accordian-index');
    //console.log('accordianIndex: ' + accordianIndex);

    if(AccordianIndex_current != accordianIndex){
        // hide other accordian body content
        $('.accordian-content').css('display', 'none');

        //look at the current open accordian body and flip it's icon back to normal
        $('img[accordian-index="'+ AccordianIndex_current +'"]').css('transform','scaleY(1)');

        //resest font-weight (make smaller)
        $('.accordian-head[accordian-index="'+ AccordianIndex_current +'"]').css('font-weight', '400');
    }

    if(AccordianIndex_current == accordianIndex){
        
        $('img[accordian-index="'+ accordianIndex +'"]').css('transform','scaleY(1)');
        $('.accordian-content[accordian-index="'+ accordianIndex +'"]').slideUp('fast').css('display','none'); 
        $('.accordian-head[accordian-index="'+ accordianIndex +'"]').css('font-weight', '400');

        AccordianIndex_current = -1;
        return;
    }

    //Set store the accordian index of the one most recently clicked
    AccordianIndex_current = accordianIndex;

    //Show accordian body
    $('.accordian-content[accordian-index="'+ accordianIndex +'"]').slideDown('fast').css('display','block');    

    //Rotate arrow icon so that it points up
    $('img[accordian-index="'+ accordianIndex +'"]').css('transform','scaleY(-1)');

    //Increase selected accordian head font weight
    $('.accordian-head[accordian-index="'+ accordianIndex +'"]').css('font-weight', '700');
    
}