/**
 * BOOLZAPP
 * 
 * Milestone 1
 */
$(document).ready(function () {
    
    // References
    var messageInput = $('.new-message-input');
    var sendIcon = $('.footer-icons.send i');

    /**
     * Show send message icon on message input focus
     */
    messageInput.on('focus blur', function() {
        sendIcon.toggleClass('fa-microphone fa-paper-plane');
    });


    /**
     * Detect new message sent
     */
    // with icon
    sendIcon.click(function() {
        sendMessage(messageInput);
    });

    // with enter
    messageInput.keypress(function(e) {
        if(e.which == 13) {
            sendMessage(messageInput);
        }
    });


}); // <-- End doc ready



/*****************************************
    FUNCTIONS
 *****************************************/

// invia nuovo messaggio
function sendMessage(input) {
    // ottieni testo
    var testoMessaggio = input.val().trim();

    // Check contenuto
    if(testoMessaggio.length > 0) {
        // clone template
        var nuovoMessaggio = $('.template .message').clone();

        // aggiunta testo messaggio
        nuovoMessaggio.children('.message-text').text(testoMessaggio);

        // Creazione e inserimento ora attuale
        var data = new Date();
        var ora = addZero( data.getHours() );
        var minuti = addZero( data.getMinutes() );
        var orario = ora + ':' + minuti;
        nuovoMessaggio.children('.message-time').text(orario);

        // Aggiungi classe sent (inviata dall'utente)
        nuovoMessaggio.addClass('sent');

        // Aggiunta nuovo messaggio al contenitore messaggi attivo
        $('.right-messages.active').append(nuovoMessaggio);

        // reset input messaggio
        input.val('');
    }
}


// Aggiungi zero iniziale a numeri inferiori a 10
function addZero(numero) {
    if(numero < 10) {
        numero = '0' + numero;
    }
    
    return numero;
}