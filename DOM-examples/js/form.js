console.log('hello world!')
const firstName = document.getElementById('first-name')
const secondName = document.getElementById('second-name')
const submitButton = document.getElementById('submit')
submitButton.onclick = () =>{
    if(firstName.value == "" || secondName.value == ""){
        console.log("it's game over man! game over!")
    }else{
        console.log("Poyo!")
    }
}