var tabs=document.getElementById("white").getElementsByTagName("li")
console.log(tabs);
for (let index = 0; index < tabs.length; index++) {
    tabs[index].onclick=red;  
}
function red()
{
    for (let index = 0; index < tabs.length; index++) {
       if (tabs[index]===this) {
        tabs[index].className="active";
    }
        else
        tabs[index].className="";
    }
    
}