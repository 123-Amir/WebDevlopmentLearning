const printHello = () => {
    console.log("hello");
}
function countVowels(str){
    let count = 0;
    for(const char of str){
        if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
            count++;
        }
    }
    console.log(count);
}
function sqaure(x){
    x = x*x;
    return x;
}
let y=10;
let result = sqaure(y);
console.log(result);
console.log(y);

let person={
    name: "Amir",
    age: 20,
};
function increaseAge(obj) {
    obj.age += 1;
}
increaseAge(person);
console.log(person);

function countDown(FromNumber){
    console.log(FromNumber);
    countDown(FromNumber-1);
}
countDown();