$(document).ready(function() {
	$("#button-input").click(function(event) {
		var email = $("#form-input").val();
		var regx_email = /^[\w]+@[\w]+\.[a-z]{3,5}$/;
		if (regx_email.test(email)) {
			alert("Đăng ký thành công!")
		} else {
			alert("Email không hợp lệ!")
		}
		$("#form-input").val("");
	});
});