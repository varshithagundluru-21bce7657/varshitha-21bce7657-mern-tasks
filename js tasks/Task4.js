let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let h31 = document.getElementById("h31");
let h32 = document.getElementById("h32");

btn1.addEventListener("click",()=>{
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.toLocaleString('default',{month:'long'});
    const day = currentDate.getDate();
    h31.innerHTML = (`${day}/${month}/${year}`);

});
btn2.addEventListener("click",()=>{
    
let dateInMs = new Date().getTime();
let dateInWords = new Date(dateInMs);
let res =  dateInWords;
h32.innerText = res;

});








 





