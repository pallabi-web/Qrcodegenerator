var imgbox = document.getElementById("imgbox");
var qrimage = document.getElementById("qrimage");
var qrtext = document.getElementById("qrtext");
var qr = document.getElementById("qr");


function generateqr(){
    if(qrtext.value.length > 0){

    qrimage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value ;
    imgbox.classList.add("showimage");
    }
    else{
        qrtext.classList.add("error");
        setTimeout(()=>{
            qrtext.classList.remove("error");
        },1000);
    }
}