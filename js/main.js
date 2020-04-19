$(document).ready(function () {
    var todoChat = [];
    var list = $('chat3');
    for (var i = 0; i > todoChat.length; i++) {
        var elementChat = $('.template a').clone();

        elementChat.attr('data-element', 1);
        elementChat.prepend(todoChat[i]);
        list.append()(todoChat)
    }
    $('body').on('click', '.chat3 a', function () {
        $(this).parent().append();

        newInput.keyup(function (e) {
            console.log(e.which, e.keyCode);

            if (e.which == 13 || e.keyCode == 13) {
                var text = newInput.val().trim()
                console.log(text);
            
                if (text !== '') {
                    var elementNew = $('.template a').clone();
                    elementNew.prepend(text);
                    list.append(elementNew);

                    newInput.val('');
                }
            }
        });