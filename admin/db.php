<?php
try{
    $dbUserName = 'root';
    $dbPassword = '';
    $connection = 'mysql:host=localhost;dbname=etshop-oder;charset=utf8mb4';   
    $options = [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION, // TRY-CATCH
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_OBJ  // JSON 
    ];
    $db = new PDO($connection, $dbUserName, $dbPassword,$options);
}
catch(PDOException $ex){
    die("Connection error: " . $ex->getMessage());
}