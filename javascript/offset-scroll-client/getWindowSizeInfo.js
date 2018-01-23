function getWindowSizeInfo() {
	let size = `
		网页可见区域宽度clientWidth: ${document.body.clientWidth},
		网页可见区域高度clientHeight: ${document.body.clientHeight}, 
		网页可见区域宽度offsetWidth: ${document.body.offsetWidth} (包括边线和滚动条宽度), 
		网页可见区域高度offsetHeight: ${document.body.offsetHeight} (包括边线的宽度),
		网页正文全文宽度scrollWidth: ${document.body.scrollWidth}, 
		网页正文全文高度scrollHeight: ${document.body.scrollHeight}, 
		网页内容被卷去的高度scrollTop: ${document.body.scrollTop} (Firefox浏览器),
		网页内容被卷去的高度scrollTop: ${document.documentElement.scrollTop} (IE浏览器), 
		网页内容被卷去的宽度scrollLeft: ${document.body.scrollLeft}, 
		网页内容正文部分上screenTop: ${window.screenTop}, 
		网页内容正文部分左screenLeft: ${window.screenLeft},
		屏幕分辨率的高度height: ${window.screen.height}, 
		屏幕分辨率的宽度width: ${window.screen.width}, 
		屏幕可用区域高度availHeight: ${window.screen.availHeight},
		屏幕可用区域宽度availWidth: ${window.screen.availWidth}`
	return size;
}