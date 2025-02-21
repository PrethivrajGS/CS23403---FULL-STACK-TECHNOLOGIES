document.getElementById('btn').onclick= function()
{
    let mail ,first,last,name,domain,ext,i
    mail=document.getElementById('mail').value;
    i=mail.indexOf('@');

    if(i>5)
    {
        first= mail.slice(0,3);
        last= mail.slice(mail.indexOf('@')-2,mail.indexOf('@'));
        name= first+'....'+last;
    }
    else
    {
        name=mail.slice(0,mail.indexOf('@'));
    }
domain= mail.slice(mail.indexOf('@')+1,mail.indexOf('.'));
ext= mail.slice(mail.indexOf('.')+1);
document.getElementById('out1').textContent=username:${name}
document.getElementById('out2').textContent=domain:${domain}
document.getElementById('out3').textContent=extension:${ext}
}