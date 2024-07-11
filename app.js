
let output=document.getElementById('input')
function show(num){
    output.value=output.value+num
}
function calculate(){
    try{
    output.value=eval(output.value)
    }
    catch{
        output.value="Error!!"
    }
}
function allclear(){
    output.value=""
}
function remove(){
    output.value=output.value.slice(0,-1)
}

