var box
main();
function main(){
	var box=document.createElement("textarea");
	box.style.width="200px";
	box.style.height="200px";
	box.innerHTML=" H E L L O  W O R L D ";
	document.body.append(box);
}
