let value1="";
let value2="";
let reset="";
let operator="";
let count=-1;
const root=document.documentElement.style;
let theme2=
{
    "--background":"#E6E6E6",
    "--resultBg":"#EEEEEE",
    "--resultTextClr":"#36352D",
    "--buttonBg":"#D3CECD",
    "--buttonTextClr":"#37362D",
    "--buttonShadow":"#A9A198" ,
    "--numBg":"#E5E4E0",
    "--numBgHover":"#FFFFFF",
    "--ResetDelBg":"#388187",
    "--ResetDelHover":"#62B5BD",
    "--ResetDelShadow":"#2B666D",
    "--EqualToBg":"#C85401",
    "--EqualToHover":"#F96C5B",
    "--EqualToShadow":"#953F02",
    "--ToggleSwitchBg":"#D3CDCD",
    "--ToggleBallBg":"#C85501",
}
let theme3=
{
    "--background":"#17062A",
    "--resultBg":"#1E0836",
    "--resultTextClr":"#FCE440",
    "--buttonBg":"#1E0836",
    "--buttonTextClr":"#F2D844",
    "--buttonShadow":"#7A1F92" ,
    "--numBg":"#331B4D",
    "--numBgHover":"#6B34AC",
    "--ResetDelBg":"#56077C",
    "--ResetDelHover":"#8631B0",
    "--ResetDelShadow":"#AE19DF",
    "--EqualToBg":"#00DECF",
    "--EqualToHover":"#F96C5B",
    "--EqualToShadow":"#57F3EA",
    "--ToggleSwitchBg":"#1E0836",
    "--ToggleBallBg":"#04DED2",
}
function applyTheme(theme)
{
    const root=document.documentElement;
    for(const[property,value] of Object.entries(theme))
    {
        root.style.setProperty(property,value);
    }
}
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
    value1=result;
    value2="";
    operator="";
    console.log(value1,value2,operator); 
}
)
document.getElementById('switchId').addEventListener('click',()=>
{
    console.log("called");
    count+=1;
    if(count==1)
    {
        document.getElementById('switchId').style.justifyContent="center";
        applyTheme(theme2);

    }
    else if (count==2)
    {
        document.getElementById('switchId').style.justifyContent="end";
        applyTheme(theme3);
        count=-1;
    }
    else
    {
        document.getElementById('switchId').style.justifyContent="start";
        root.cssText="";
    }
})
