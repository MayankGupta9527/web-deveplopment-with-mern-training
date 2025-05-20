/*let a=5;
        let b=10;
        let c=a+b;
        console.log(`the sum of ${a} and ${b}=${c}`);*/

function tableprint()
{
   // console.log("Hello");
    let a=parseInt(document.getElementById("Tb1").value);
    let i;
    for(i=1;i<=10;i++)
    {
        document.getElementById("para").innerHTML +=`${i*a}<br>`;
    }
}
        
