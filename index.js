// var myArr = ['applsadfasdfsaffae', 'banana', 'carrsadsadot']
// let temp = ''
// let i = 0
// while (myArr.length>i){
//     if (temp.length<myArr[i].length){
//         temp = myArr[i]
//     }
//     i++
// }
// console.log(temp);








let arr = ['applsad', 'bpplsad', 'dpplsad','epplsad', 'fpplsad', 'gpplsad']
i = 0
tf = false
while (arr.length-1>i){
    f = arr[i]
    s = arr[i+1]
    if(f[0]<s[0]){
        tf = true
    } else{
        tf = false
    }
    i++
}

if (tf){
    console.log(tf)
}else if (!tf){
    console.log(tf)
}