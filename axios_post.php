<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);
$name = $data["nickname"];


$mysqli = new mysqli("localhost","root","","baza123");

$mysqli->query("INSERT INTO users (imie, nazwisko, login, haslo) VALUES ($name, $name, $name,$name);");



?>