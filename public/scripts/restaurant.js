$(() => {
// function for event listener on submit button
// ajax POST request for order time alert

$(".pick-up-alert").submit(function(event) {
  event.preventDefault();
  // const customerName =
  // const phoneNumber =
  // const orderID =
  $.ajax('/api/twilio/pick-up-alert', {
    method: 'POST',
    dataType: 'TEXT',
    data: {
      //order ID
      //customer name
      // phone number
    },
    success: (data) => {
      console.log(data);
    },

    error: (err) => {
      console.log(`Error details: ${err}`);
    }
  })
})

    });

