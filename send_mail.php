<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // make sure you have PHPMailer via composer

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = $_POST['name'] ?? '';
    $email   = $_POST['email'] ?? '';
    $phone   = $_POST['phone'] ?? '';
    $message = $_POST['message'] ?? '';

    $mail = new PHPMailer(true);

    try {
        // SMTP configuration
        $mail->isSMTP();
        $mail->Host       = 'www.creatixsolution.com'; // e.g. smtp.gmail.com
        $mail->SMTPAuth   = true;
        $mail->Username   = 'zivoxsolutions@gmail.com';
        $mail->Password   = '123456';
        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        // Sender and recipient
        $mail->setFrom('your-email@creatixsolution.com', 'Creatix Solution Website');
        $mail->addAddress('zivoxsolutions@gmail.com'); // recipient email

        // Email content
        $mail->isHTML(true);
        $mail->Subject = 'New Lead Submitted on Creatix Solution';
        $mail->Body    = "
            <h2>New Form Submission</h2>
            <p><strong>Name:</strong> {$name}</p>
            <p><strong>Email:</strong> {$email}</p>
            <p><strong>Phone:</strong> {$phone}</p>
            <p><strong>Message:</strong><br>{$message}</p>
        ";
        $mail->AltBody = "Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message";

        $mail->send();
        echo "success";
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
