<?php
$servername = 'localhost';
$username = 'root';
$password = '';
$database = 'pokemon';

header('Access-Control-Allow-Origin: *');
header("Content-Type: application/json; charset=UTF-8");

$content = trim(file_get_contents("php://input"));
$decoded = json_decode($content, true);

if (isset($decoded['name']) && isset($decoded['wins'])) {
    $name = $decoded['name'];
    $wins = $decoded['wins'];
    echo ("2");


    try {
        echo ("3");
        $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo ("4");
        $stmt = $conn->prepare("INSERT INTO wins (`name`, `wins`) VALUES (:name, 0) ON DUPLICATE KEY UPDATE wins = wins + 1");
        $stmt->bindParam(':name', $name);
        $stmt->execute();
        echo ("5");
        $stmt = $conn->prepare("SELECT id, wins FROM wins WHERE name = :name");
        $stmt->bindParam(':name', $name);
        $stmt->execute();
        echo ("6");
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        $id = $row['id'];
        $wins = $row['wins'];
        echo ("7");
        echo json_encode(['message' => 'success']);
    } catch (PDOException $e) {
        echo json_encode(['error' => 'Database error: ' . $e->getMessage()]);
    }

    $conn = null;
} else {
    echo json_encode(['error' => 'Invalid JSON']);
}
?>
