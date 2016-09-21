// JavaScript - Steve Westhoff (c)2016

// Footer Function
function getFooterDate(footerText,originYear)
{
	var footerText=document.getElementById(footerText);
	var d = new Date();
	if (d.getFullYear() == originYear)
	{
	footerText.innerHTML="Copyright &copy; "+originYear+" Steven Karl Westhoff. All rights reserved.";
	}
	else
	{
	footerText.innerHTML="Copyright &copy; "+originYear+"-"+d.getFullYear()+" Steven Karl Westhoff. All rights reserved.";
	}
}