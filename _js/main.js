$('ul').on('click', 'li', function(){
    $(this).toggleClass('complete');
});

$('ul').on('click', 'span', function(evento){
    console.log($(this).parent());
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    evento.stopPropagation();
});

$('input[type="text"]').keypress(function(evento){
    if(evento.which === 13 && $(this).val() !== ""){
        $('ul').append('<li><span><i class="fa fa-trash"></i></span> ' + $(this).val() + '</li>');
        $(this).val('');
    }
});

$('.fa-plus').on('click', function(){
    $('input').slideToggle(500);
});