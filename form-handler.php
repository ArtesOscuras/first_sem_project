<?php
/**
 * Created by PhpStorm.
 * User: Artes
 * Date: 05/10/2016
 * Time: 21:47
 */
/*

$send_to = "artesoscuras13@gmail.com";

$name = $_POST["name-input"];
$sender_email = $_POST["email-input"];
$subject = $_POST["subject-input"];
$message = $_POST["message"];

$full_message = "Name: $name \n Email: $sender_email \n\n $message";
/*
mail($send_to, $subject, $full_message);
*/
$username = "PoliceTribuneAdmin@policetribune";
$password = "1Sp4KP@ITH";


try {
    $conn = new PDO("jdbc:sqlserver://policetribune.database.windows.net:1433", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Done";
/*    $new_id = $conn->prepare("SELECT MAX(id) FROM emails");
    $new_id++;
    $stmt = $conn->prepare("INSERT INTO emails VALUES ($new_id, $name, $sender_email, $subject, $message,  )");
    mail($send_to, $subject, $full_message);
*/
} catch (Exception $e) {
    echo "Failed.";
}

header("Location: thank_you.html");
?>
<!doctype html>
<html>
Processing
</html>
