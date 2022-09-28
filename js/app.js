//pin check
function getPin(){
    const pin = generatePin();
    //pin number convert string
    const pinString = pin + '';
    // check pin string lenght
    if(pinString.length === 4){
        return pin;
    }else{
        return getPin();
    }
};
//random number create
function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
};

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    //disply pin show
    const generatePinField = document.getElementById('generate-pin-field');
    generatePinField.value = pin; 
});

//daligate 
document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('type-numbers');
    const previousTypeNumber = typeNumberField.value;
    if(isNaN(number)){
        if(number == 'C'){
            typeNumberField.value = '';
        }
        else if(number === '<'){
            // last digit delete 
            const digits = previousTypeNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;
        }
    }else{
        const newTypeNumber = previousTypeNumber + number;
        typeNumberField.value = newTypeNumber;
    }
});

//submit btn
document.getElementById('btn-submit').addEventListener('click', function(){
    const displyPinField = document.getElementById('generate-pin-field');
    const currentPin = displyPinField.value;
    const typeNumberField = document.getElementById('type-numbers');
    const typedNumber = typeNumberField.value;
    const pinSuccessMessage = document.getElementById('pin-success');
    const pinIncorrectMessage = document.getElementById('pin-incorrect');
    if(typedNumber === currentPin){
        pinSuccessMessage.style.display = 'block';
        pinIncorrectMessage.style.display = 'none';
    }else{
        pinIncorrectMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
        const generatePinField = document.getElementById('generate-pin-field');
        generatePinField.value = '';

    }
});