$('#hoge').change(function () {
	var val = $(this).val();

	console.log(val);
	if (val == "answer") {
		window.location.href = './clear.html' //windowのジャンプ先
	}


	console.log("input_change");
});