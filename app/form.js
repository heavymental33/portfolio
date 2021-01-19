$(document).ready(function() {
    $('form').submit(function(event) {
        var formData = {
            'nom'              : $('input[name=nom]').val(),
            'email'             : $('input[name=email]').val(),
            'phone'             : $('input[name=phone]').val(),
            'cie'               :$('input[name=cie]').val(),
            'message'    : $('textarea[name=message]').val()
        };
        $.ajax({
            type: 'POST', 
            url: 'send.php', 
            data: formData, 
            dataType: 'json', 
            encode: true,
            error: function(req, err){ console.log(err); }
        })
            .done(function(data) {
                // Affiche les erreurs de validation
                if (!data.success) {
                    if (data.errors.nom) {
                        $('#nom-group').addClass('has-error'); 
                        $('#nom-group').append('<div class="help-block error">' + data.errors.nom + '</div>'); // Message d'erreur de validation pour chaques sections
                    }
                    if (data.errors.email) {
                        $('#email-group').addClass('has-error'); 
                        $('#email-group').append('<div class="help-block error">' + data.errors.email + '</div>'); 
                    }
                    if (data.errors.phone) {
                        $('#phone-group').addClass('has-error'); 
                        $('#phone-group').append('<div class="help-block error">' + data.errors.phone + '</div>'); 
                    }
                    if (data.errors.cie) {
                        $('#cie-group').addClass('has-error'); 
                        $('#cie-group').append('<div class="help-block error">' + data.errors.cie + '</div>'); 
                    }
                    if (data.errors.message) {
                        $('#message-group').addClass('has-error'); // add the error class to show red input
                        $('#message-group').append('<div class="help-block error">' + data.errors.message + '</div>'); 
                    }
                } else {
                  $('form').html('<div class="alert alert-success">' + data.messagefinal + '</div>');
                }          
            });
        event.preventDefault();
    });
});