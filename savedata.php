<?php

$dbhost = 'localhost';
$dbname = 'mydatabase';
$dbuser = 'myuser';
$dbpass = 'mypassword';

try {
  $pdo = new PDO("pgsql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
} catch (PDOException $e) {
  die("Error connecting to database: " . $e->getMessage());
}

$formData = $_POST;

$stmt = $pdo->prepare("INSERT INTO mytable (question1, question2, question3) VALUES (:question1, :question2, :question3)");
$stmt->bindParam(':question1', $formData['question1']);
$stmt->bindParam(':question2', $formData['question2']);
$stmt->bindParam(':question3', $formData['question3']);

if ($stmt->execute()) {
  echo "Form data saved successfully!";
} else {
  echo "Error saving form data!";
}