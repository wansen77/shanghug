<?php

 

if (isset($_POST["submit"])){
    $name = $_POST["name"];
    $mail = $_POST["mail"];
    $tel = $_POST["tel"];
    $suggest = $_POST["suggest"];
    
    $errorEmpty = false;
    $errorMail = false;
  
    
    
 
    if(empty($name) || empty($mail) || empty($tel)){
        echo '<span class="form-error">您有欄位未填寫喔</span>';
         $errorEmpty = true;
    }elseif(!filter_var($mail,FILTER_VALIDATE_EMAIL)){
        echo '<span class="form-error">您輸入的電子信箱格式錯誤</span>';
        $errorMail = true;
    }else{
        $mailToname = "旺伸";
        $mailTo = 'linwangsen77@gmail.com';
        $mailFromname = $name ;
        $mailFrom = $mail;
        $mailTitle = '這是由官網寄來的客戶意見書';
        $mailContent = '姓名:'.$name.'<br>'.'電話:'.$tel.'<br>'.'建議內容:'.$suggest;
        
        if(mail($mailTo,$mailTitle,$mailContent,$mailFrom)){
           echo "<script> alert('信件寄送成功,感謝您給予本公司寶貴的意見。');parent.location.href='http://ken-cens.com/~wangsenc/shanghug/connection.html'; </script>";
        }else{
             echo '<span class="form-error">郵件發送失敗!</span>'; 
        }
    }
    
}else{
    echo '<span class="form-error">請檢查您的網路連線</span>';
}



?>


<script>
    $('#name,#mail,#tel').removeClass('input-error')
    
    var errorEmpty = "<?php echo $errorEmpty; ?>";
    var errorMail= "<?php echo $errorMail; ?>";
   
    
    if (errorEmpty) {
        $('#name,#mail,#tel').addClass('input-error')
    }else if (errorMail){
        $('#mail').addClass('input-error')
    }
    
</script>