<?php
$errors = array();     
$data = array();      
$num_max = 25;
$valid_num = filter_var($_POST['phone'], FILTER_SANITIZE_NUMBER_INT);
// validation
if (empty($_POST['nom']))
    $errors['nom'] = '*Obligatoire';

if (empty($_POST['email']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL))
    $errors['email'] = '*Obligatoire ou email non valide';

if (empty($_POST['phone']) || !preg_match('/^[0-9]{10}+$/', $valid_num))
    $errors['phone'] = '*Numéro de téléphone non valide';

if(strlen($_POST['cie']) > $num_max)
    $errors['cie'] = '*Maximum de 50 caractères';

if (empty($_POST['message']))
    $errors['message'] = '*Obligatoire';

if (!empty($errors)) {
    $data['success'] = false;
    $data['errors']  = $errors;
} else {
    $nom = $_POST['nom'];
    $mail = $_POST['email'];
    $company = $_POST['cie'];
    $telephone = $_POST['phone'];
    $mess = $_POST['message'];

    $toEmail = "*******@******.com";
    $mailHeaders = "From: " . $_POST["nom"] . $company . "<". $_POST["email"] .">\r\n";
    mail($toEmail, $telephone, $mess, $mailHeaders);
    // Retourne le message de confirmation
    $data['success'] = true;
    $data['messagefinal'] = 'Merci! Votre message a été reçu et vous serez contacté dans les meilleurs délais';
}
// Retourné les infos à la fonction ajax
echo json_encode($data);
exit();
?>


