/**
 * 
 * @param {element} el 
 * 
 */
function getOffsetTop(el) {  
	let size = el.offsetTop;
	let currentParent = el.offsetParent;
	while(currentParent != null){
		top += currentParent.offsetTop;
		currentParent =currentParent.offsetParent;
	}
	return size;
}