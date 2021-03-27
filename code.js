
Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}


$('#myButton').click( function() {
	var s = $('#myText').val();
	
	var newStr = processUrl(s);
	
	if (newStr) {
		$('#myText').val(newStr);
	}
	
	return false; 
});



function processUrl(url) {
	var m;
	
	// https://sj.uukanshu.com/book.aspx?id=153179
	// https://www.uukanshu.com/b/153179
	if ((m = url.match(/^https:\/\/sj\.uukanshu\.com\/book\.aspx\?id=(\d+)/)) && m[1]) return 'https://www.uukanshu.com/b/' + m[1];
	
	return '';
}







