let value1="";
let value2="";
let reset="";
let operator="";
//Select all the elements with the class name Number - returns a nodeList
let NumClass=document.querySelectorAll('.Number');
NumClass.forEach(button => //add click event for each element with the class name Number
    {
        button.addEventListener('click',getNumValue=>
        {
            if(operator=="")     //If operator string is empty, store the retrieved element in variable value1
            {
                value1+=getNumValue.target.textContent;
                document.getElementById('Result').innerHTML=Number(value1);
            }
            else  //If operator is not empty, store the content in variable value2
            {
                value2+=getNumValue.target.textContent;
                document.getElementById('Result').innerHTML=Number(value2);
            }
            console.log(value1,value2,operator);
        })
    })
//When Reset button is clicked reset all the values to 0
document.getElementById('Reset').addEventListener('click',()=>
{
    value1=value2=result=0;
    operator="";
    console.log(Number(value1),Number(value2),operator,result);
    document.getElementById('Result').innerHTML=result;
})
//Select all the elements with the class name operator - returns a nodeList
let OperatorClass=document.querySelectorAll('.operator');
OperatorClass.forEach(opButton=>    //add click event for each element with the class name Operator
    {
        opButton.addEventListener('click',getOperator=>
        {
            operator=getOperator.target.textContent;
            document.getElementById('Result').innerHTML=operator;  //retrieve the inner contents from the clicked element 
        })
    })
//if equal to is entered, display the result according to the operator entered
document.getElementById('EqualTo').addEventListener('click',()=>
{
    switch(operator)
    {
        case "+":
            result=Number(value1)+Number(value2);
            break;
        case "-":
            result=Number(value1)-Number(value2);
            break;
        case "X":
            result=Number(value1)*Number(value2);
            break;
        case "/":
            result=Number(value1)/Number(value2);
            break;
        default:
            result=Number(value1);   //if equal to is pressed even before the operator is entered, displat value1
    }
    document.getElementById('Result').innerHTML=result;
}
)
