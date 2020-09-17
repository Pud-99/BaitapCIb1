let $second = document.getElementById('second');
function timeleft() {
    setInterval(function(){
        $second.innerText -= 1;
    },1000) 
}
function colortraffic(){
let $green = document.getElementById('green');
let $yellow = document.getElementById('yellow');
let $red = document.getElementById('red');
    setTimeout(function(){
        $green.classList.add('bg-success');
        $second.innerText = 10;
        $red.classList.remove('bg-danger');
    },0);
    setTimeout(function(){
        $yellow.classList.add('bg-warning');
        $green.classList.remove('bg-success');
        $second.innerText = 2;
    },11000)
    setTimeout(function(){
        $red.classList.add('bg-danger');
        $yellow.classList.remove('bg-warning');
        $second.innerText = 7;
    },14000)
}
timeleft();
setInterval(() => colortraffic(), 22000);
colortraffic();



const numb = [1,2,3,3,4,4,5,6,7,8];

const result = numb.filter((number,index) => numb.indexOf(number) == index);

console.log(result);
