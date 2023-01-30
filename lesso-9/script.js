let str= 'Hello my name is John , I live in Kashkadaryo'
let result= '';
function checkString(str){
    for(let i = 0; i<str.length; i++){
        if(!str[i].includes('a')&&!str[i].includes('e')&&!str[i].includes('o')&&!str[i].includes('e')&&!str[i].includes('u')&&!str[i].includes('i')){
            result = result +str[i]
        }
    }
console.log(result)
}
checkString(str)

