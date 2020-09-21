$(document).ready(function() {
	$("#button-input").click(function(event) {
		var email = $("#form-input").val();
		var regx_email = /^[\w]+@[\w]+\.[a-z]{2,5}$/;
		if (regx_email.test(email)) {
			alert("Đăng ký thành công!")
		} else {
			alert("Email không hợp lệ!")
		}
		$("#form-input").val("");
	});

	

	$("#send-mess-button").click(function(event) {

		function isEmail(emailStr) {
		var regx_email = /^[\w]+@[\w]+\.[a-z]{2,5}$/;
		var flag = regx_email.test(emailStr);
		return flag;
		}

		var name = $('#inputName').val();
		var email = $('#inputEmail').val();
		var subject = $('#inputSubject').val();
		var message = $('#inputMessage').val();

		if (name == ""| email =="" |subject == ""|message == "") {
			$('#input-error').text('Vui lòng nhập đầy đủ thông tin!')
		} else if(!isEmail(email)){
			$('#input-error').text('Vui lòng nhập email đúng định dạng!')
		} else {
			alert("Gửi thông tin thành công!");
			$('#inputName').val('');
			$('#inputEmail').val('');
			$('#inputSubject').val('');
			$('#inputMessage').val('');
		}
	});
});