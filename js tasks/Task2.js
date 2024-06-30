let btn = document.querySelector("button");
let inp = document.querySelector("input");
let h3 = document.querySelector("h3");


inp.addEventListener("input", () => {
    function SortedStr (string) {
        return string.split("").sort().join("");
    }
    let str = inp.value;
    let result = SortedStr(str);
    h3.innerText = "Sorted string : "+ result;
})





