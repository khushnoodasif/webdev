var w=prompt("Enter Your Weight : ");
var h=prompt("Enter Your Height : ");

function bmicalc(weight,height)
{
    var bmi=weight/(height*height);
    return Math.round(bmi);
}


var bmi = bmicalc(w,h);

if(bmi<18.5)
{
    yourbmi="Underweight";
}
else if(bmi>18.5 && bmi<25)
{
    yourbmi= "Normal";
}
else if (bmi>=25&&bmi<30)
{
    yourbmi="Overweight";
}
else{
    yourbmi="Obese";
}
alert("Hello, your BMI is "+bmi+". You are "+yourbmi+"!");