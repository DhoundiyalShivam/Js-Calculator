let input = document.getElementById("input")
let inputUp = document.getElementById("inputUp")

function isOpxyz(opxyz){
    if(opxyz==="+" || opxyz==='-' || opxyz==='/' || opxyz==='*')
        return true
    return false
}
function button(a){
    if(input.innerText===""){
        if(a!='0' && a!="+" && a!='-' && a!='/' && a!='*'  ){
            input.innerText = input.innerText+a
            inputUp.innerText = inputUp.innerText+a

        }
    }
    else{
        // Just to make sure that 2 operators don't come in consecutive positions
        // last charac of display
        var innerTextxyz = input.innerText
        var lenxyz = innerTextxyz.length

        var lastCharxyz = innerTextxyz[lenxyz-1]

        if(isOpxyz(lastCharxyz)===true){
            if(a!='0'){
                if(isOpxyz(a)===true){
                    input.innerText = input.innerText.slice(0,-1)
                    inputUp.innerText = inputUp.innerText.slice(0,-1)

                }
                input.innerText = input.innerText+a
                inputUp.innerText = inputUp.innerText+a


            }
        }else{
            input.innerText = input.innerText+a
            inputUp.innerText = inputUp.innerText+a

        }

    }
    // input.innerText += a; 
}
function clr(a){
    input.textContent =" "
    inputUp.textContent =" "

}

function equal(a){
    try{
    input.innerText =eval(input.textContent);
    }
    catch(err){
    input.innerText = "Error";

    }
}
function backSpace(a){
input.innerText = input.innerText.slice(0,-1);
inputUp.innerText = inputUp.innerText.slice(0,-1);

}