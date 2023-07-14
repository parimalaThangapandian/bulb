function change()
{
    var imag=document.getElementById("bulb");
    if(imag.src.match("off"))
    {
        imag.src="image/on.jpeg";
    }
    else{
        imag.src="image/off.jpeg";
    }
}