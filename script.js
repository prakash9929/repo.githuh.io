function validate(){
    var name = document.getElementById("uname");
    
    if(name.value!=="jashu"){
     alert("blank or other names are not allowed not allowed");
     return false;
    }
    else{
        true;
    }
}