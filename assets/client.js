$( document ).ready(function() {
    console.log( "ready!" );
    console.log('Developer Easter Egg Will Be Added Shortly!')


    $("#translateButton").click( async (event) => {
      const jobDescription = $('#inputField').val()
      console.log(jobDescription)
      await $.ajax({url: "http://localhost:1337/results", success: function(result) {
        console.log(result)
      }})
    });

});
