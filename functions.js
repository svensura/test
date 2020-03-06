


const $ = jQuery = require('jquery')
var Gpio = require('onoff').Gpio; //include onoff to interact with the GPIO
var LED = new Gpio(4, 'out'); //use GPIO pin 4, and specify that it is output
var pushButton = new Gpio(17, 'in', 'both'); //use GPIO pin 17 as input, and 'both' button presses, and releases should be handled

pushButton.watch(function (err, value) { //Watch for hardware interrupts on pushButton GPIO, specify callback function
  if (err) { //if an error
    console.error('There was an error', err); //output error message to console
  return;
  }
  LED.writeSync(value); //turn LED on or off depending on the button state (0 or 1)
});


$(document).ready(function(){
   
    var count = 100
    

    const setVal = () => {
        $('#result').text(count)
    }
    const inc = () => {
        count++
        setVal()
        LED.writeSync(1); //set pin state to 1 (turn LED on)
    }

    const dec = () => {
        count--
        setVal()
        LED.writeSync(0); //set pin state to 1 (turn LED off)
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
      


    // const setVal = () => {
    //     $('#result').text(count)
    // }

    // setVal()

    // $('#plus').click(function()
    // {
    //     count++
    //     setVal()
    // })
    // $('#minus').click(function()
    // {
    //     count--
    //     setVal()
    // })

})

