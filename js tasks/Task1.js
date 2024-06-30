
let btn = document.querySelector("button");
let inp = document.querySelector("input");
let h2 = document.querySelector("h2");
inp.addEventListener("input",()=>{
    function reverseFunction(num, reversed =0) {
        if (num === 0) {
            return reversed;
        }
        return reverseFunction(Math.floor(num / 10),
            reversed * 10 + num % 10);
    }
    let result = reverseFunction(inp.value);
    h2.innerText= (` Reversed number is : ${result}`);
    

});




