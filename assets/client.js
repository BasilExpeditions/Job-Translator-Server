$( document ).ready(function() {
    console.log( "ready!" );

    let counter = 0;

    $("#translateButton").click( async (event) => {
      const jobDescription = $('#inputField').val().toLowerCase()

      await $.ajax({url: "http://localhost:1337/results", success: function(result) {

      const values = Object.values(result)

      const keys = Object.keys(result);

        keys.map((x, index) => {
          counter++
          if(jobDescription.includes(x)) {

            console.log(`MATCH: Key: ${x} Value: ${values[index]}`)


            $('#results ul').append(`<li>${values[index]}</li>`)
          }
        }
      )
      if (counter == keys.length) {
        console.log('finished')
        return $('#results ul').append("<li>No more matches</li>")
      }
      }})
    });
});
