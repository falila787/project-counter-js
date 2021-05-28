let increment = document.querySelector("#add");
let decrement = document.querySelector("#reduce");
let counterValue = document.querySelector("#startValue");

let counter = 0;

increment.addEventListener("click", () => {
    counter++;
    counter.style.color=(counterValue<0)?"red":
    counterValue.innerText = counter;
})
    ;
decrement.addEventListener("click", () => {
    counter--;
    counter.style.color=(counterValue>0)?"green":
    counterValue.innerText = counter;
});
