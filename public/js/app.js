window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.documentElement.scrollTop > 850) 
    {     document.getElementById("navbar").style.backgroundColor = "black";   } 
    else {     document.getElementById("navbar").style.backgroundColor = "transparent";   }
    if (document.documentElement.scrollTop > 2700) 
    {     document.getElementById("navbar").style.backgroundColor = "transparent";   }
    if (document.documentElement.scrollTop > 3500) 
    {     document.getElementById("navbar").style.backgroundColor = "black";   }
    if (document.documentElement.scrollTop > 5200) 
    {     document.getElementById("navbar").style.backgroundColor = "transparent";   }
    if (document.documentElement.scrollTop > 5500) 
    {     document.getElementById("navbar").style.backgroundColor = "black";   } 
}