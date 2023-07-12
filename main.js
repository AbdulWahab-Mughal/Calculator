let displayBox=document.getElementById("displayBox");
let buttons = document.querySelectorAll("button");
let string="";
let arr=Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e)=>{
        e.preventDefault()
        if(e.target.innerHTML=='='){
            string=eval(string);
            displayBox.value=string;
            }
        else if(e.target.innerHTML=='AC'){
            string="";
            displayBox.value=string;
        }
        else if(e.target.innerHTML=='DE'){
            string=string.substring(0,string.length-1)
            displayBox.value=string;
        }
        else if(e.target.innerHTML=='%'){

            string=string/100;
            // string=string*dec;
            // percenTage(150,string);
            displayBox.value=string;
        }
        else{
            string+=e.target.innerHTML;
            displayBox.value=string;
        }
    })
})

// function percenTage(str,percentage){
//     let percent=percentage/100;
//     str=str*percent;
//     return str



// }

// console.log(percenTage(200,40));