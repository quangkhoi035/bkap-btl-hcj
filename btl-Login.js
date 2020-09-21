$(function() {
	$(".btn-login").click(function(event) {
		var user = $("#accId").val();
		var password = $("#password").val();
		if (checkLogin()) {
			if(user=="pansyStore" && password=="1234"){
				alert("Đăng nhập thành công!");
			}else{
				alert("Sai tên tài khoản hoặc mật khẩu!");
			}
		}	
	});
	function checkLogin(){
		var user = $("#accId").val();
		var password = $("#password").val();
		var check = true;
		if(user == ""){
			$("#accId").attr('style', 'border: 1px solid red; background: #fff0ff');
			check = false;
		} else{
			$("#accId").attr('style', '');
		}
		if(password == ""){
			$("#password").attr('style', 'border: 1px solid red; background: #fff0ff');
			check = false;
		} else{
			$("#password").attr('style', '');
		}
		return check;
	}
	$("#accId, #password").blur(function(event) {
		checkLogin();
	});
	$("#accId, #password").keyup(function(event) {
		if(checkLogin()){
			$(".btn-login").attr('disabled',false);
			$(".btn-login").attr('style', 'background: #292929');
		}else{
			$(".btn-login").attr('disabled',true);
			$(".btn-login").attr('style', '');
		}
	});
});