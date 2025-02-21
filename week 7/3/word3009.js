document.getElementById("analyse").onclick= function(){
    let string=document.getElementById("input").value;
    let s1=0,s2=0,e1=0,e2=0;
    let a=string.length;
    let b=a,c=0,uc=0,lc=0,n=0;
    document.getElementById("out1").textContent=`no. of characters with space: ${a}`;
    for(let index=0;index<string.length;index++){
    let d=string.charAt(index);
    if(d==' ')
        {
    b=b-1;
    c=c+1;
    if(s1==0)
        {
            s1=index;
        }
        else
        {
            e1=index;
            if((e1-s1)>(e2-s2))
                {
                    s2=s1;e2=e1;
                }
                s1=index;
        }
    }
    if(index==string.length-1)
        {
    e1=index;
    if((e1-s1)>(e2-s2))
        {
            s2=s1;e2=e1;
        }
    }
    if(d>='a'&&d<='z')
        {
            lc=lc+1;
        }
    if(d>='A'&&d<='Z'){uc=uc+1;}
    if(d>='0'&&d<='9'){n=n+1;}
    }
    c=c+1;
    let longestWord=string.slice(s2,e2+1);
    document.getElementById("out2").textContent=`no. of characters without spaces: ${b}`;
    document.getElementById("out3").textContent=`no. of words: ${c}`;
    document.getElementById("out4").textContent=`no. of uppercase characters: ${uc}`;
    document.getElementById("out5").textContent=`no. of lowercase characters: ${lc}`;
    document.getElementById("out6").textContent=`no. of numbers: ${n}`;
    document.getElementById("out7").textContent=`longest word: ${longestWord}`;
}    
document.getElementById("clear").onclick=function()
{
    document.getElementById("input").value=``;
    document.getElementById("out1").textContent=``;
    document.getElementById("out2").textContent=``;
    document.getElementById("out3").textContent=``;
    document.getElementById("out4").textContent=``;
    document.getElementById("out5").textContent=``;
    document.getElementById("out6").textContent=``;
    document.getElementById("out7").textContent=``;
}
