$( document ).ready(function() {
    console.log( "ready!" );

    var app_id = config.APP_ID;
    var api_key = config.API_KEY;
    console.log(app_id)
    console.log(api_key)

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


            $('#results ul').append(`<li><strong>${x}</strong> = ${values[index]}</li>`)
          }
        }
      )
      if (counter == keys.length) {
        console.log('finished')
        return $('#results ul').append("<strong>No more matches</strong>")
      }
      }})
    });


    $('#getRandomJobButton').click( async (event) => {
      await $.ajax({url: `https://api.adzuna.com/v1/api/jobs/au/search/1?app_id=${APP_ID}&app_key=${APP_KEY}&results_per_page=10&what=software%20engineer`,
         success: function(result) {
           console.log(result.results[0].description)
      }})
    })

});
