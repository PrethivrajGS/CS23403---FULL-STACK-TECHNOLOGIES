document.getElementById('enter').onclick=function()
{
    let i=0,j=0;
    let string=document.getElementById('str').value;
    let a=string.charAt(0);
    if((a>='a'&&a<='z')||(a>='A'&&a<='Z'))
    {
        document.getElementById('out1').textContent=String does begin with alphabet;
    }
    else
    {
        document.getElementById('output1').textContent=String does not begin with alphabet;
        i=i+1;
    }
    for (let index = 0; index < string.length; index++) {
        let b=string.charAt(index);
    if((b>='a'&&b<='z')||(b>='A'&&b<='Z'))
    {
    }
    else if(b>=0||b<=9)
    {
    }
    else
    {
        j=j+1;
        i=i+1;
    }
    }
    if(j==0)
    {
        document.getElementById('out2').textContent=String does not contain special characters;
    }
    else
    {
        document.getElementById('output2').textContent=String contains special characters;
    }
    if(string.length<5)
    {
        document.getElementById('output3').textContent=String is below 5 characters;
        i=i+1;
    }
    else if(string.length>15)
    {
        document.getElementById('output3').textContent=String is above 15 characters;
        i=i+1;
    }
    else
    {
        document.getElementById('out3').textContent=String is between 5 and 15 characters;
    }
    if(string.charAt(string.length-1)=='_')
    {
        document.getElementById('output4').textContent=String ends with an underscore;
        i=i+1;
    }
    if(i!=0)
    {
        document.getElementById('statuswrong').textContent=Invalid;
    }
    else
    {
        document.getElementById('statusright').textContent=accepted;
    }
}