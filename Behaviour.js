function test(){
    const hamburger = document.querySelector(".ham");
    const navMenu = document.querySelector(".head-container");

    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}



function GetInTouch(){
     
    document.location.href = "GetInTouch.html";
    
}

function Hire(){

    if(document.getElementById("HireButton").innerHTML != "Go Back" && document.getElementById("client-mail").value != ""){
    document.getElementById("Success").setAttribute("style", "margin-left: 47%; font-size: xx-large; color: rgb(0, 255, 0); font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; display: inline;");
    document.getElementById("HireButton").innerHTML = "Go Back";
    sendEmail(document.getElementById("client-mail"));
    document.getElementById("client-mail").value = "";
    }
    else if(document.getElementById("HireButton").innerHTML == "Go Back"){
        document.location.href = "index.html";
    }
    else{
        alert("Please enter your email adress.");
    }


}

function SendQueries(){

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var query = document.getElementById("query").value;

    //send email to yourself with the given information
    if(name == "" || email == "" || query == ""){
        alert("Please enter full details !");
    }
    else{
        sendEmail(email);
    }


    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("query").value = "";
}

function sendEmail(sender_mail) {
	// Make this working !
}
