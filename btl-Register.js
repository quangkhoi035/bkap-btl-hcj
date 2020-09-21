$(function() {
	$(".btn-resgister").click(function(event) {
		var userRe = $("#accIdRe").val();
		if (checkRegister()) {
			if (userRe == "pansyStore") {
				alert("Tài khoản đã tồn tại !");
			}else{
				if (checkTC()) {
					alert("Đăng ký tài khoản thành công !");
					window.location.href = "btl-Login.html";
				}
				else{
					alert("Agree with Term and Conditions ? ");
				}
			}
		}	
	});
	function checkRegister(){
		var userRe = $("#accIdRe").val();
		var passwordRe = $("#passwordRe").val();
		var regStrongPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
		var check = true;
		$("#err-pass").text('');
		if(userRe == ""){
			$("#accIdRe").attr('style', 'border: 1px solid red');
			check = false;
		} else{
			$("#accIdRe").attr('style', '');
		}		
		if(passwordRe == ""){
			$("#passwordRe").attr('style', 'border: 1px solid red');
			check = false;
		} else{
			if(regStrongPass.test(passwordRe)==false){
				$("#err-pass").text("Mật khẩu tối thiểu 8 ký tự (latinh), ít nhất 1 chữ cái viết hoa, 1 chữ cái viết thường và 1 số");
				$("#passwordRe").attr('style', 'border: 1px solid red');
				check =false;
			}else{
				$("#passwordRe").attr('style', '');
			}
		}
		return check;
	}
	function checkTC(){
		var checkTc = false;
		if($("#checkTC").is(":checked")){
			$(".btn-resgister").attr('disabled',false);
			$(".btn-resgister").attr('style', 'background: #292929');
			checkTc = true;
		}else{
			$(".btn-resgister").attr('disabled',true);
			$(".btn-resgister").attr('style', '');
		}
		return checkTc;
	}
	$("#accIdRe, #passwordRe").blur(function(event) {
		checkRegister();
	});
	$("#checkTC").click(function(event) {
		checkTC();
	});
	$("#accIdRe, #passwordRe").keyup(function(event) {
		if(checkRegister()){
			$(".btn-resgister").attr('disabled',false);
			$(".btn-resgister").attr('style', 'background: #292929');
		}else{
			$(".btn-resgister").attr('disabled',true);
			$(".btn-resgister").attr('style', '');
		}		
	});
});