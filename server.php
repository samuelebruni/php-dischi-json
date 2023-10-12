<?php

$compilation = json_decode(file_get_contents('compilation.json'), true);

header('Content-Type: application/json');

echo json_encode($compilation);
