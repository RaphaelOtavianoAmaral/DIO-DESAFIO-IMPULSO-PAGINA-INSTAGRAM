function checkTextFields(){
    var userNameText = document.getElementById("usernameTextfield").value;
    var passwordText = document.getElementById("passwordTextfield").value;
    return userNameText == "" || passwordText == "";
}

function onTextfieldChange(){
    var val = checkTextFields();
    if(val) { 
        document.getElementById("enterButton").disabled = true;
    } else { 
        document.getElementById("enterButton").disabled = false;
    }
}
