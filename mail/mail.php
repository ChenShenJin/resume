<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<?php
   include("class.phpmailer.php"); //匯入PHPMailer類別       
 
   $mail= new PHPMailer();          //建立新物件
   $mail->IsSMTP();                 //設定使用SMTP方式寄信
   $mail->SMTPAuth = true;          //設定SMTP需要驗證
   $mail->SMTPSecure = "ssl";       // Gmail的SMTP主機需要使用SSL連線
   $mail->Host = "smtp.gmail.com";  //Gamil的SMTP主機
   $mail->Port = 465;               //Gamil的SMTP主機的SMTP埠位為465埠。
   $mail->CharSet = "utf-8";        // 信件內容的編碼方式			
   $mail->Encoding = "base64";		// 信件處理的編碼方式        
 
   $mail->Username = "csjindesign@gmail.com";  //Gmail帳號
   $mail->Password = "tp6gprup1986"; //Gmail密碼        
 
   $mail->From = $_POST['email']; //設定寄件者信箱
   $mail->FromName = $_POST['name'] ;           //設定寄件者姓名
   $mail->Subject = "來自Jin's Zone";    //設定郵件標題
   $mail->Body = '<table width="660" align="left" cellpadding="10" cellspacing="1" style="border:3px solid #999;">
					<tbody>
						<tr>
							<td style="color:#FF3333;font-weight:bold;text-align:center;">此為系統自動通知信，請勿直接回信！</td>
						</tr>
						<tr>
							<td style="color:black;font-weight:bold;">
								<p>此資訊來自<span style="color:#FF9900;">'.$_POST['name'].' </span> 先生/小姐</p>
							</td>
						</tr>
						<tr>
							<td style="color:#black;font-weight:bold;text-align:center;background-color:#F5F3F1;">
								<p>聯絡E-mail：<span style="color:#3333CC">'.$_POST['email'].'</span></p>
								<p>傳送資訊：<span style="color:#3333CC">'.$_POST['msg'].'</span></p>
							</td>
						</tr>
					</tbody>
				</table>';  //設定郵件內容
    $mail->IsHTML(true);                     //設定郵件內容為HTML
	//$mail->AddAddress("gc.wu168@xuite.net", "吳先生"); //設定收件者郵件及名稱        
	$mail->AddAddress("csjindesign@gmail.com", "陳先生"); //設定收件者郵件及名稱 
	if($mail->Send()){

    	echo '已收到您的來信，我將盡快回覆<br/>';

    	echo "<script>alert('寄信成功');</script>";
    	echo "<script>location.href='../index.html#a4'</script>";

	}else{

    	echo 'Not sent: <pre>'.print_r(error_get_last(), true).'</pre>';

	}
   

?> 