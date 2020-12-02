$( document ).ready(function() {
    console.log( "ready!" );

    $("#translateButton").click( async (event) => {
      const jobDescription = $('#inputField').val().toLowerCase()

      await $.ajax({url: "http://localhost:1337/results", success: function(result) {

      const values = Object.values(result)

      const keys = Object.keys(result);

        keys.map((x, index) => {
          if(jobDescription.includes(x)) {

            console.log(`MATCH: Key: ${x} Value: ${values[index]}`)


            $('#results ul').append(`<li>${values[index]}</li>`)
          }
          if(jobDescription.includes(x) != null) {
            $('#results ul').append("<li>I couldn't find any matches</li>")
          }
        }
        )

      }})
    });

});
