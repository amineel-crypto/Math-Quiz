document.getElementById("button1").addEventListener("click", () => {

    // Generate random numbers and operation each time the button is clicked
    let num1 = Math.floor(Math.random() * 10) + 1;
    let num2 = Math.floor(Math.random() * 10) + 1;
    let op = ['*', '-', '+', '/'];
    let randomOp = op[Math.floor(Math.random() * op.length)];

    // Display the random numbers and operation
    num1Html=document.getElementById("num1");
    num2Html=document.getElementById("num2");
    opHtml=document.getElementById("op");
    num1Html.innerHTML=`num1: ${num1}`;
    num2Html.innerHTML=`num2: ${num2}`;
    opHtml.innerHTML=`op:${randomOp}`;
    message=document.getElementById("message");
    function check(){
        let UserInput=parseFloat(document.getElementById("Answer").value);
        let result;
        switch(randomOp){
            case "+":
                result=num1+num2;
                break;
            case "-":
                result=num1-num2;
                break;
            case "/":
                if(num2==0){
                    message.innerHTML="Error,this operation cannot continue.";
                }
                else{
                    result=num1/num2;
                }
                break;
            case "*":
                result=num1*num2;
                break;
            }                
            if(result===UserInput){
                message.innerHTML="Congratulations";
            }
            else
            {
                message.innerHTML="Are You Stupid";
            }
        }
    
    document.getElementById("button2").addEventListener("click",check);
    
});
