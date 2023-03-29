<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Recipient email address
    $to = 'prakharverma2019@bbdu.ac.in';
    
    // Email subject
    $subject = 'New message from my website';
    
    // Email message
    $body = "Name: $name\n\nEmail: $email\n\nMessage:\n$message";
    
    // Additional headers
    $headers = "From: $email\r\n";
    
    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo '<p>Your message has been sent!</p>';
    } else {
        echo '<p>There was an error sending your message. Please try again later.</p>';
    }
}
?>