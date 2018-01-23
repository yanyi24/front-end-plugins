/**
 * 
 * @param {element} el 
 * 
 */
function getOffsetLeft(el) {  
	let size = el.offsetLeft;
	let currentParent = el.offsetParent;
	while(currentParent != null){
		top += currentParent.offsetLeft;
		currentParent =currentParent.offsetParent;
	}
	return size;
}