;(function(){
	const email = "fredy_hdez_quintero@hotmail.com"

	$("#contact-form").on("submit",function(ev){ 
		ev.preventDefault()

		sendForm($(this)) 

		return false
	})

	function sendForm($form){
		console.log($form.formObject())
		$.ajax({
			url: $form.attr("action"), 
			method: "POST",
			data: $form.formObject(),
			dataType: "json",
			success: function(){
				 var $toastContent = $('<span>El mensaje a sido enviado</span>');
				 Materialize.toast($toastContent, 9000);
				$("#contact-form")[0].reset();
			}
    })
	}
})()