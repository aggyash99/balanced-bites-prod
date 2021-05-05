<?php 


echo "<pre>";
print_r($_POST);
echo "</pre>";
$username=$_POST['fullname'];
$phone=$_POST['phone'];
$emailid=$_POST['email'];
$msg=$_POST['msg'];
$to="sumannaman7@gmail.com";
$body="";
$body.= $username.$phone.$msg;
mail($to, "Customer", $body);

?>
<html>
    <body>
        thankyou
</body>
</html>