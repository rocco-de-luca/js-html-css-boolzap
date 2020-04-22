/****************
      jQuery
 ****************/
$(document).ready(function () {
    // References
    var messageInput = $('.nuovo-messaggio');
    var sendIcon = $('.footer-icons.send i');
    var searchInput = $('.search-input');
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
    
    /**
     * sidebar search
     */
    
    searchInput.keyup(function(){
    var search = $(this).val().toLowerCase().trim();
    
    $('.profiles').each(function(){
       // nome del contatto attuale nel loop
        var nomeContatto = $('this').find('.descrizione h3').text().toLowerCase();
    
        // verifica input con nomi contatti
        if(nomeContatto.includes(".search")){
          $(this).show();  
        } else{
            $(this).hide();
        }
    });
    });
    
     
    
    
    
    //function
    
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
        var orario = oraAttuale();
        nuovoMessaggio.children('.message-time').text(orario);
    
        // Aggiungi classe sent (inviata dall'utente)
        nuovoMessaggio.addClass('sent');
    
        // Aggiunta nuovo messaggio al contenitore messaggi attivo
        $('.right-messages.active').append(nuovoMessaggio);
    
        // reset input messaggio
        input.val('');
    
        // scroll in fondo
    
        scrollMessaggio();
    
        // risposta automatica
    
        setTimeout(function(){
            //clona template
    var nuovaRisposta = $('.template .messagge').clone();
    //add class
    nuovaRisposta = addClass('received');
    
    
    //add text mess
    nuovaRisposta.children('.message-text').text('ok!');
    
    //ora mess
    var orario = oraAttuale();
    
    // aggiungi ora a template
    nuovaRisposta.children('.message-time').text(orario);
    
    // aggiunta messaggio nel contenitore messaggi attuale
    
    $('.right-message.active').append(nuovaRisposta);
    
    // scroll in fondo
    
    scrollMessaggio();
    
    },1000);
    
    
    
    }
    }
    
    //genera o ritorna ora attuale
    
    function oraAttuale(){
    var data = new Date();
        var ora = addZero( data.getHours() );
        var minuti = addZero( data.getMinutes() );
        return ora = ':' + minuti;
    }
    
    // Aggiungi zero iniziale a numeri inferiori a 10
    function addZero(numero) {
    if(numero < 10) {
        numero = '0' + numero;
    }
    
    return numero;
    }
    
    //  scroll all'ultimo messaggio inserito
    function scrollMessaggio() {
    var pixelScroll = $('.right-message.active').height();
    
    //$('.messages-container').scrollTop(pixelScroll);
    $('.messages-container').animate({
      scrollTop: pixelScroll
    }, 500);
    }

}); //<- end document ready