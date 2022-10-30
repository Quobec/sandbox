<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$mysqli = new mysqli("localhost","root","","baza123");

if ($mysqli -> connect_errno !== null) {
    
    $result = $mysqli->query('SELECT vin FROM auto');
    
    $result = $result->fetch_all();

    //echo '<pre>'.var_export($result, true).'</pre>';
    $wynik = [];
    foreach ($result as $row) {

        $wynik[] = $row[0];
    }

    //print_r($wynik);

    echo json_encode($wynik);
    
    $mysqli->close();

} else {
    echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
    exit();

}



?>