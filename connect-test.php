<?php

$server = "policetribune.database.windows.net,1433";
$database = "police_tribune";
$username = "PoliceTribuneAdmin@policetribune";
$password = "1Sp4KP@ITH";

try {
    $conn = new PDO("sqlsrv:server:=$server;Database=$database", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Succesful!";
} catch (Exception $e) {
    echo "Failed. " . $e->getMessage();
}
?>
<html>
<body>

</body>
</html>