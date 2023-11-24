let value1="";
let value2="";
let reset="";
let operator="";
let count=-1;
const root=document.querySelector(":root");
//when del button is clicked, the last stored value is modified and new value is displayed
document.getElementById('del').addEventListener('click',()=>
{
    let currentValue=document.getElementById('Result').innerHTML;
    let newValue=currentValue.substring(0,currentValue.length-1)
    if(operator=="")
    {
        value1=newValue;
    }
    else
    {
        value2=newValue;
    }
    document.getElementById('Result').innerHTML=currentValue.substring(0,currentValue.length-1);
})
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
            document.getElementById('Result').innerHTML=Number(value1);  //retrieve the inner contents from the clicked element 
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
document.getElementById('switchId').addEventListener('click',()=>
{
    console.log("called");
    count+=1;
    if(count==1)
    {
        document.getElementById('switchId').style.justifyContent="center";

    }
    else if (count==2)
    {
        document.getElementById('switchId').style.justifyContent="end";
        count=-1;
    }
    else
    {
        document.getElementById('switchId').style.justifyContent="start";
    }
})
