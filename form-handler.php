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

$full_message = "Name: $name \n Email: $sender_email \n\n $message";

mail($send_to, $subject, $full_message);
header("Location: thank_you.html");