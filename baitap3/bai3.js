let time = '07:05:45PM';
let timearr = time.split("");
if(time[time.length - 2] == 'P'){
    let newtime = Number(time[0]+time[1])+12;
    timearr.splice(0,2);
    timearr.unshift(newtime);
    console.log(timearr.join(''));
}