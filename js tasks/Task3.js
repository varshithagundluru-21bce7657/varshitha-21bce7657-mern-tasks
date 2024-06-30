let inp1 = document.getElementById("num1");
let inp2 = document.getElementById("num2");
let butn1 = document.getElementById("btn1");
let butn2 = document.getElementById("btn2");
let h2 = document.querySelector("h2");

butn1.addEventListener("click",()=>{
    let result = inp1.value * inp2.value;
    h2.innerHTML = "The Result is : " +result;

});

butn2.addEventListener("click",() => {
    let result = inp1.value / inp2.value;
    h2.innerHTML = "The Result is : " +result;
});


