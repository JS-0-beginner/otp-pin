function getPin()
{
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4)
    {
        return pin;
    }
    else
    {
        return getPin()
    }
}

function generatePin()
{
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
    
}

document.getElementById('keypad').addEventListener('click',

function(event)
{
    const number = (event.target.innerText);
    const calcInput = document.getElementById('typed-numbers');

    if(isNaN(number))
    {
        if(number == 'C') //here>>>>>>>>>>>>>>>>>>>>>
        {
            //Clear User Pin-Input
            calcInput.value = '';

            //Clear Notification
            document.getElementById('notify-success').style.display = 'none';
            document.getElementById('notify-fail').style.display = 'none';
                        

        }
    }
    else
    {
        
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;

    }
    
}

);

function verifyPin()
{
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const success = document.getElementById('notify-success');
    const error = document.getElementById('notify-fail');
    
    if(typedNumbers == pin)
    {
        success.style.display = 'block';
        error.style.display = 'none';
    }
    else
    {        
        error.style.display = 'block';
        success.style.display = 'none';
    }
}