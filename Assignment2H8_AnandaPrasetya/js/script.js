// Fungsi Edit
var a;
function show_hide()
{
    if(a==0)
    {
        document.getElementById("form_container").style.display="none";
        return a=1;
    } 
    else 
    {
        document.getElementById("form_container").style.display="flex";
        return a=0;
    
    }
}

//Fungsi mengubah section profile
 function ubahData(){
    name1 = document.getElementById("name").value;
    position1 = document.getElementById("position").value;
    available1 = document.getElementById("availablee").value;
    umur1 = document.getElementById("umur").value;
    location1 = document.getElementById("location").value;
    exp1 = document.getElementById("exp").value;
//Tampilkan data
    document.getElementById("showName").innerHTML=name1;
    document.getElementById("showPosition").innerHTML=position1;
    document.getElementById("showAvailablee").innerHTML=available1;
    document.getElementById("showUmur").innerHTML=umur1;
    document.getElementById("showLocation").innerHTML=location1;
    document.getElementById("showExp").innerHTML=exp1;

}
