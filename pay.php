<?php
require('./instamojo.php');
const API_KEY ="test_58c5ecaf91d1ddc386c5b93fdc3";
const AUTH_TOKEN = "test_b906d4ed62f1b62d827c56e380c";


if(isset($_POST['purpose']) && isset($_POST['name']) && isset($_POST['email']) && isset($_POST['amount']))
{
    $api = new Instamojo\Instamojo(API_KEY, AUTH_TOKEN,'https://test.instamojo.com/api/1.1/');
    
    try {
        $response = $api->paymentRequestCreate(array(
            "purpose" => $_POST['purpose'],
            "buyer_name" => $_POST['name'],
            "amount" => $_POST['amount'],
            "send_email" => true,
            "email" => $_POST['email'],
            "redirect_url" => "https://quirky-thompson-12c655.netlify.app/"
            ));
        header('Location:'. $response['longurl']);
    }
    catch (Exception $e) {
        print('Error: ' . $e->getMessage());
    }
}
?>
