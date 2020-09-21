$(function() {
	function checkEmpty(){
		var check = true;
		var regZipCode = /^\d{5}$/;
		var regPhone = /^0\d{9}$/;
		var regEmail = /^[\w\-\.]+@[\w\-\.]{2,}\.[a-z]{2,3}$/;
		$(".err").text('');
		if($("#firstName").val() == ""){
			$("#firstName").attr('style', 'border: 1px solid red');
			check = false;
		} else{
			$("#firstName").attr('style', '');
		}
		if($("#lastName").val() == ""){
			$("#lastName").attr('style', 'border: 1px solid red');
			check = false;
		} else{
			$("#lastName").attr('style', '');
		}
		if($("#country").val() == ""){
			$("#country").attr('style', 'border: 1px solid red');
			check = false;
		} else{
			$("#country").attr('style', '');
		}
		if($("#addr").val() == ""){
			$("#addr").attr('style', 'border: 1px solid red');
			check = false;
		} else{
			$("#addr").attr('style', '');
		}
		if($("#city").val() == ""){
			$("#city").attr('style', 'border: 1px solid red');
			check = false;
		} else{
			$("#city").attr('style', '');
		}
		if($("#state").val() == ""){
			$("#state").attr('style', 'border: 1px solid red');
			check = false;
		} else{
			$("#state").attr('style', '');
		}
		if($("#zip").val() == ""){
			$("#zip").attr('style', 'border: 1px solid red');
			check = false;
		} else{
			if(regZipCode.test($("#zip").val()) == false){
				$(".err-zip").text("Mã Postcode gồm 5 ký tự số");
				$("#zip").attr('style', 'border: 1px solid red');
				check =false;
			}else{
				$("#zip").attr('style', '');
			}		
		}
		if($("#phone").val() == ""){
			$("#phone").attr('style', 'border: 1px solid red');
			check = false;
		} else{
			if(regPhone.test($("#phone").val()) == false){
				$(".err-phone").text("Sđt gồm 10 số và bắt đầu bằng 0");
				$("#phone").attr('style', 'border: 1px solid red');
				check =false;
			}else{
				$("#phone").attr('style', '');
			}
		}
		if($("#mail").val() == ""){
			$("#mail").attr('style', 'border: 1px solid red');
			check = false;
		} else{
			if(regEmail.test($("#mail").val()) == false){
				$(".err-mail").text("Sai định dạng email");
				$("#mail").attr('style', 'border: 1px solid red');
				check =false;
			}else{
				$("#mail").attr('style', '');
			}
		}
		return check;
	}	
	$("#firstName, #lastName, #country, #addr, #city, #state, #zip, #phone, #mail").blur(function(event) {
		checkEmpty();
	});
	$("#firstName, #lastName, #country, #addr, #city, #state, #zip, #phone, #mail").keyup(function(event) {
		if (checkEmpty()) {
			$("#btn-order").attr('disabaled', false);
			$("#btn-order").css('background', '#fe3e57');
		}else{
			$("#btn-order").attr('disabled', true);
			$("#btn-order").css('background', '');
		}
	});
	
});