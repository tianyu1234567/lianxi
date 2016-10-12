function setCookie(name,value,edate){
	var sDate=new Date();
	sDate.setDate(sDate.getDate()+edate);
	document.cookie=encodeURIComponent(name)+"="+encodeURIComponent(value)+";expires="+sDate;
}
function getCookie(name){
	var str=document.cookie;
	var sname="";
	var arr=str.split("; ")
	for(var i=0;i<arr.length;i++){
		var arrI=arr[i].split("=");
		if(arrI[0]==name){
			sname=arrI[1]
		}
	}
	return decodeURIComponent(sname)
}
function delCookie(name){
	setCookie(name,"",-1)
}


