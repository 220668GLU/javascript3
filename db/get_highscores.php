<?php
include 'db.php';
header('Content-Type: application/json; charset=utf-8');


try {
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $conn->prepare("SELECT * FROM score INNER JOIN players ON score.player_id = players.id ORDER BY score DESC");
    $stmt->execute();

    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
  
echo json_encode($results);
}
    catch(PDOException $e) {
    echo json_encode('[{"name":"error","msg":"' . $e->getMessage() . '"}]');
}

$conn = null;
?>