


const $ = jQuery = require('jquery')
var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var pushButton = new Gpio(23, 'in', 'falling', {debounceTimeout: 50}); //use GPIO pin 17 as input, and 'both' button presses, and releases should be handled



$(document).ready(function(){
   
    var count = 0
    

    const setVal = () => {
        result = count.toString()
        if (count > 99) {
            endresult = result
            
        } else if (count > 9) {
            endresult = "0".concat(result) 
        } else {
            endresult = "00".concat(result) 
        }
        $('#result').text(endresult)
    }

    const inc = () => {
        count++
        setVal()
    }

    const dec = () => {
        count--
        setVal()
    }

    setVal()

    $(document).click(function() {
        inc()
    })
    
    $(document).contextmenu(function() {
        dec()
    })
    
    $(document).on('keypress', function(e) {
        console.log('KEY: ', e.which)
    })

    $(document).on('keypress', function(e) {
        console.log('KEY: ', e.which)
    })


    pushButton.watch(function (err, value) { //Watch for hardware interrupts on pushButton GPIO, specify callback function
        if (err) { //if an error
          console.error('There was an error', err); //output error message to console
        return;
        }
        inc()
    });
      



})

