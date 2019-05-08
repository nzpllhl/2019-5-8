function doMove(obj,attr,dir,target,endFn){
	dir=parseInt(getStyle(obj,attr))<target?dir:-dir;
	clearTimeout(obj.timer);
	// alert(parseInt(getStyle(div,'left')));
	obj.timer=setInterval(function(){
	var speed=parseInt(getStyle(obj,attr))+dir;
	if(dir>=0&&speed>target||speed<target&&dir<0){
		speed=target;
	}
	obj.style[attr]=speed+'px';
	if(speed==target){
		clearTimeout(obj.timer);
		// alert(speed);
		endFn&&endFn();//如果有回调函数则执行，没有不执行
		}
	},30)
}
function getStyle(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}