// ************************************************
// Système de shopping cart 
// algorithme et idée inspiré du tuto a freecodecamp.org 
// Tuto vidéo javascript shopping cart https://www.youtube.com/watch?v=q_TZhCWbS3I
// ************************************************
$( document ).ready(function() {
// Variable globales
  let compteur = 0;
  let grandTotal = [];
 // Changement de page liste/mosaique pointeur souris
 $('.liste').css( 'cursor', 'pointer' );
 $('.mosaique').css( 'cursor', 'pointer' );

 $('.liste').on("click", function(event) {
    redirectListe();
  })

function redirectListe() {
    location.replace("index-mo.html");
  }

  $('.mosaique').on("click", function(event) {
    redirectMo();
  })

function redirectMo() {
    location.replace("index.html");
  }

  // FIN Changement de page liste/mosaique pointeur souris

  $("#btn1, #btn2, #btn3, #btn4, #btn5").click(function() {
      compteur++;
      $('.total-clique').html(compteur); 
  });

  $('#btn1').on("click", function() {
    let name = $(this).data('name');
    let price = $(this).data('price');
    let output = "<tr>"
    + "<td>" + "<span>" + name  + "</span>" + "<span>" + price + " $" + "</span>" + "</td>"  
    + "</tr>";
    $('.show-cart').append(output);
  });

  $('#btn2').on("click", function() {
    let name = $(this).data('name');
    let price = $(this).data('price');
    let output = "<tr>"
    + "<td>" + "<span>" + name  + "</span>" + "<span>" + price + " $" + "</span>" + "</td>"  
    + "</tr>";
    $('.show-cart').append(output);
  });

  $('#btn3').on("click", function() {
    let name = $(this).data('name');
    let price = $(this).data('price');
    let output = "<tr>"
    + "<td>" + "<span>" + name  + "</span>" + "<span>" + price + " $" + "</span>" + "</td>"  
    + "</tr>";
    $('.show-cart').append(output);
  });

  $('#btn4').on("click", function() {
    var name = $(this).data('name');
    var price = $(this).data('price');
    var output = "<tr>"
    + "<td>" + "<span>" + name  + "</span>" + "<span>" + price + " $" + "</span>" + "</td>"  
    + "</tr>";
    $('.show-cart').append(output);
  });

  $('#btn5').on("click", function() {
    var name = $(this).data('name');
    var price = $(this).data('price');
    var output = "<tr>"
    + "<td>" + "<span>" + name  + "</span>" + "<span>" + price + " $" + "</span>" + "</td>"  
    + "</tr>";
    $('.show-cart').append(output);
  });


// sur chaque clic , mettre le prix dans un array , et calculé le total avec le nombre de prix dans l'array

  


});