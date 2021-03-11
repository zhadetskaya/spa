<?php
// Проверяем тип запроса, обрабатываем только POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Получаем параметры, посланные с javascript
    $name = $_POST['name'];
    $ritual = $_POST['ritual'];
    $phone = $_POST['phone'];
    $timeDate = $_POST['timeDate'];


    // создаем переменную с содержанием письма
    $content = $name . ' оставил заявку на бронирование ритуала ' . $ritual . ' на дату ' . $timeDate . '. Его телефон: ' . $phone;

    // Первый параметр - кому отправляем письмо, второй - тема письма, третий - содержание
    $success = mail("admin@whitelotus.com", 'Запрос на бронирование ритуала', $content);

    if ($success) {
        // Отдаем 200 код ответа на http запрос
        http_response_code(200);
        echo "Письмо отправлено";
    } else {
        // Отдаем ошибку с кодом 500 (internal server error).
        http_response_code(500);
        echo "Письмо не отправлено";
    }

} else {
    // Если это не POST запрос - возвращаем код 403 (действие запрещено)
    http_response_code(403);
    echo "Данный метод запроса не поддерживается сервером";
}




if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $number = $_POST['number'];
    $numberPhone = ' Заявка на звонок по номеру' . $number;
    $success = mail("callme@whitelotus.com", 'Запрос на звонок', $numberPhone);

    if ($success) {
        http_response_code(200);
        echo "Письмо отправлено";
    } else {
        http_response_code(500);
        echo "Письмо не отправлено";
    }
} else {
    http_response_code(403);
    echo "Данный метод запроса не поддерживается сервером";
}