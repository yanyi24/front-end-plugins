/**
 * 
 * @param {DOM || null} wrap  外层容器，默认以整个文档结构为外容器
 * @param {Number} threshold  滚动阀值，当滚动到离底部还有一段距离时，就开始执行callback
 * @param {Function} cb callback
 */
let scrollToLoad = (wrap,threshold,cb) => {
	let scrollTop = 0,
			wrapHeight,
			listHeight,
			_threshold_ = threshold || 0;
	if(!wrap){
		//获取滚动条当前位置
		if(document.documentElement && document.documentElement.scrollTop){
			scrollTop = document.documentElement.scrollTop;
		}else if(document.body){
			scrollTop = document.body.scrollTop;
		}
		//获取当前可视范围的高度
		if(document.body.clientHeight && document.documentElement.clientHeight){
			wrapHeight = Math.min(document.body.clientHeight,document.documentElement.clientHeight);
		}else{
			wrapHeight = Math.max(document.body.clientHeight,document.documentElement.clientHeight);
		}
		//获取list完整的高度
		listHeight = Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);
	}else{
		scrollTop = wrap.scrollTop;
		wrapHeight = wrap.clientHeight;
		listHeight = wrapHeight.scrollHeight;
	}
	if(listHeight <= wrapHeight + scrollTop - _threshold_){
		cb && cb();
	}
}