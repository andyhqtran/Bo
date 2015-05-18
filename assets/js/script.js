$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    $(this).parent().toggleClass('open');
    $(this).parent().find("ul").parent().children("li.dropdown").toggleClass('open');
});

$('.navbar-form-toggle').on('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    $(this).parent().toggleClass('open');
    $(this).parent().find("ul").parent().children("form").toggleClass('open');
});

$(document).mouseup(function (e) {
    var container = $(".navbar-form");
    if (!container.is(e.target)
        && container.has(e.target).length === 0)
    {
        container.toggleClass('open');
    }
});