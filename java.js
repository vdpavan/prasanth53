function loadjson(file,callback){
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4 && xhr.status=="200"){
			callback(xhr.responseText);

		}
	}
    xhr.send();
 }
 loadjson("data.json",function(text){
 	let data=JSON.parse(text);
 	console.log(data);
 	basic(data.details);
 	care(data.career);
    for1(data.education);
    skill(data.skills);
 })
 var main=document.querySelector(".main");
 var left=document.createElement("div");
 left.classList.add("left");
 main.appendChild(left);
 function basic(details1){
var image=document.createElement("img");
image.src=details1.image;
left.appendChild(image);
var name=document.createElement("h2");
name.textContent=details1.name;
left.appendChild(name);
var phone=document.createElement("h2");
phone.textContent=details1.phone;
left.appendChild(phone);
var email=document.createElement("h2");
email.textContent=details1.email;
left.appendChild(email);
}

var right=document.createElement("div");
 right.classList.add("right");
 main.appendChild(right);
function for1(details2){
	var h2=document.createElement("h2");
	h2.textContent="Education Qualification";
    right.appendChild(h2);
    var hr=document.createElement("hr");
    right.appendChild(hr);
    var ul=document.createElement("ul");
    right.appendChild(ul);
    for(var i=0;i<details2.length;i++){
    	var li=document.createElement("h2");
    	li.textContent=details2[i].course;
    	ul.appendChild(li);
    	var coll=document.createElement("p");
    	coll.textContent=details2[i].college;
    	ul.appendChild(coll);
    	var perc=document.createElement("p");
    	perc.textContent=details2[i].per;
    	ul.appendChild(perc);
    }

}
function skill(skilldata){
	var s=document.createElement("div");
	right.appendChild(s);
	s.appendChild(document.createElement("HR"));
	var head=document.createElement("h1");
	head.textContent="skills set";
	s.appendChild(head);
	var t=document.createElement("table");
	var tabledata="";
	for(var i=0;i<skilldata.length;i++){
		tabledata+="<tr><td>"+skilldata[i].title+"</td><td>"+skilldata[i].output+"</td></tr>";
		t.innerHTML=tabledata;
	}
 	  head.appendChild(t);



}
function care(career1){
	var d=document.createElement("div");
	d.classList.add("career1");
	right.appendChild(d);
	var e=document.createElement("h1");
	e.textContent="career objective";
	d.appendChild(e);
	var para=document.createElement("p");
	para.textContent=career1.c;
	e.appendChild(para);
}