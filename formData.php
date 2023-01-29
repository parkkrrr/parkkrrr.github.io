<?php 

$feedback=$_POST['feedback'];

$formData=fopen('formData.txt','a');
if(fwrite($formData,$feedback)){
    echo "<h1>It is our pleasure to hear your valuable feedback.</h1>";
}
fclose($formData);
?>