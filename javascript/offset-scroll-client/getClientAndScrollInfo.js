function getClientAndScrollInfo() {
	let clientWidth = clientHeight = scrollHeight = scrollWidth = scrollLeft = scrollTop = 0;
	if(document.compatMode == 'BackCompat'){
		clientWidth = document.body.clientWidth;
		clientHeight = document.body.clientHeight;
		scrollWidth = document.body.scrollWidth;
		scrollHeight = document.body.scrollHeight;
		scrollTop = document.body.scrollTop;
		scrollLeft = document.body.scrollLeft;
	}else{
		clientWidth = document.documentElement.clientWidth;
		clientHeight = document.documentElement.clientHeight;
		scrollHeight = document.documentElement.scrollHeight;
		scrollWidth = document.documentElement.scrollWidth;
		scrollTop = document.documentElement.scrollTop;
		scrollLeft = document.documentElement.scrollLeft;
	}
	return info =`
		clientWidth:${clientWidth}px,
		clientHeight:${clientHeight}px,
		scrollWidth:${scrollWidth}px,
		scrollHeight:${scrollHeight}px,
		scrollTop:${scrollTop}px,
		scrollLeft:${scrollLeft}px
	`;
}