<?php
/**
 * Created by PhpStorm.
 * User: Artes
 * Date: 05/10/2016
 * Time: 21:47
 */


$send_to = "artesoscuras13@gmail.com";

$name = $_POST["name-input"];
$sender_email = $_POST["email-input"];
$subject = $_POST["subject-input"];
$message = $_POST["message"];

//$full_message = "Name: $name \n Email: $sender_email \n\n $message";
/*
mail($send_to, $subject, $full_message);
*/

$server = "policetribune.database.windows.net,1433";
$database = "police_tribune";
$username = "PoliceTribuneAdmin@policetribune";
$password = "1Sp4KP@ITH";


try {
    $conn = new PDO("sqlsrv:server:=$server;Database=$database", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $date_now = mktime();
    $stmt = $conn->prepare("INSERT INTO emails (sender_name, sender_email, sender_subject, sender_message, sender_date_time) VALUES ( $name, $sender_email, $subject, $message, $date_now )");
    $stmt->execute();

} catch (Exception $e) {
    echo "Failed.";
}

header("Location: thank_you.html");
?>
<!doctype html>
<html>
Processing
</html>
