<?php

//Ловим полезную нагрузку в запросе
$postData = file_get_contents('php://input');
$data = json_decode($postData, true);

//Развлекаемся с полученными данными
$a = $data['a'];
$b = $data['b'];

//Формируем ответ
$res = array(
    'a' => $a,
    'b' => $b,
    'c' => $a + $b
);

//Отправляем ответ
print_r(json_encode($res));
