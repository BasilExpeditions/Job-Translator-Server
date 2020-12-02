$( document ).ready(function() {
    console.log( "ready!" );
    // console.log('Developer Easter Egg Will Be Added Shortly!')

    const regex = /\b[a-z]+\b/gi


    $("#translateButton").click( async (event) => {
      const jobDescription = $('#inputField').val().toLowerCase()

      await $.ajax({url: "http://localhost:1337/results", success: function(result) {

        const values = Object.values(result)

        const keys = Object.keys(result);

        keys.map((x, index) => {
          if(jobDescription.includes(x)) {

            console.log(`MATCH: Key: ${x} Value: ${values[index]}`)


          $('#results').append("<h1>HERE</h1>")
          }
        }
        )


      }})
    });

});
