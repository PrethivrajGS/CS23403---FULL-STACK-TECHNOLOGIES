let count=0;
 function display()
 {
    document.getElementById("count").innerText=count;
 }
function increment()
{
    count++;
    display();
}
function decrement()
{
    count--;
    display(); 
}
function reset()
{
    count=0;
    display();
}