function calendar(){

	var day=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	var month=['January','February','March','April','May','June','July','August','September','November','December'];
     var d=new Date();
setText('calday',day[d.getDay()]);
setText('caldate',d.getDate());
setText('calyear',month[d.getMonth()]+' '+(d.getYear()+1900));
 }


 function setText(id,val) {
 	// body...
if(val<10)
	val='0'+val;
   
document.getElementById(id).innerHTML=val;


 }
 window.onload=calendar;

 var tabs=document.querySelectorAll(".options .a")
 var panels=document.querySelectorAll(".other-options .tabpanels")


 function showPanel(panelIndex)
 {
	 tabs.forEach(function(Node)
	 {
		 Node.style.backgroundColor="";
		 Node.style.color="";
	 });
	 tabs[panelIndex].style.backgroundColor="white";
	 tabs[panelIndex].style.color="green";
	 panels.forEach(function(Node){
		Node.style.display="none";

	 });
	 panels[panelIndex].style.display="block";
     
 }
showPanel(0)
