$( document ).ready(function() {

    let counter = 0;

    const dummyData = "Prestige WorldWide has an urgent need to hire a talented lead developer who shows an energetic spirit and can demonstrate their knowledge using cutting edge technology such as C#, React, Node, Assembly & has a strong foundation in Test Driven Development. The right candidate will be a team player who loves working in a fast paced environment with minimal supervision. Our team is passionate and is currently using agile as a day to day process. This job entails a dynamic environment with plenty of great benefits and perks. A bonus to have is web design & 1000 years experience coding."

    $("#translateButton").click( async (event) => {
      const jobDescription = $('#inputField').val().toLowerCase()
      // Scroll animation on translate button
      $("html, body").animate({
        scrollTop: $('html, body').get(0).scrollHeight
      }, 2500);

      // For this to work locally, change the below url to 'localhost:1337/results'

      await $.ajax({url: "https://job-translator.herokuapp.com/results", success: function(result) {

      const values = Object.values(result)

      const keys = Object.keys(result);

        keys.map((x, index) => {
          counter++
          if(jobDescription.includes(x)) {

            $('#results ul').append(`<li style='text-decoration: none; padding-top: 1em;'><strong>${x}</strong> &rarr; ${values[index]}</li>`)
          }
        }
      )

      if (counter == keys.length) {
        return $('#results ul').append("<strong class='text-primary'>No more matches</strong>")
      }

      }})
    });

    // Dummy data variable to showcase matching logic
    $('#getDummyDataButton').click( (event) => {
      $('#inputField').val(dummyData)
    })

    // Random Job data using Adzuna API (Has weird formatting)
    // Currently formatted for australia wide only
    $('#getRandomJobButton').click( async (event) => {
      await $.ajax({url: `https://api.adzuna.com/v1/api/jobs/au/search/1?app_id=6969f274&app_key=985462037ccb638ed824f8b40b5b4986&results_per_page=20&what=software%20engineer`,
        contentType: "application/json",
         success: function(result) {
           console.log(result)

           let stringToFormat = result.results[0].description
           var randomJobResult = result.results[Math.floor(Math.random() * result.results.length)];

           // Format came back with html tags within the data
           // console.log(randomJobResult)

           let regex = /(<([^>]+)>)/ig
           // REGEX i = Insensitive flag = Case-Insensitive matching
           // REGEX g = Global flag = find all matches rather then stopping at first

           let formatted = randomJobResult.description.replaceAll(regex, "")
           $('#inputField').val(formatted)
      }})
    })

    console.log('Can you guess who i am?')
    console.log("அரசாங்கம் மக்களின் உரிமைகளை மீறும் போது, ​​கிளர்ச்சி என்பது மக்களுக்கும் மக்களின் ஒவ்வொரு பகுதிக்கும், உரிமைகளில் மிகவும் புனிதமானது மற்றும் கடமைகளுக்கு மிகவும் இன்றியமையாதது." +
    "جب حکومت لوگوں کے حقوق کی خلاف ورزی کرتی ہے تو ، لوگوں کے لئے اور لوگوں کے ہر حصے کے لئے ، بغاوت ، حقوق کا سب سے مقدس اور فرائض کی سب سے زیادہ ناگزیر ہے۔" +
    "เมื่อรัฐบาลละเมิดสิทธิของประชาชนการจลาจลเป็นสิ่งที่ศักดิ์สิทธิ์ที่สุดของสิทธิและหน้าที่ที่ขาดไม่ได้สำหรับประชาชน" +
    "ప్రభుత్వం ప్రజల హక్కులను ఉల్లంఘించినప్పుడు, తిరుగుబాటు అనేది ప్రజలకు మరియు ప్రజల యొక్క ప్రతి భాగానికి, హక్కుల యొక్క అత్యంత పవిత్రమైనది మరియు విధులకు అత్యంత అనివార్యమైనది." +
    "സർക്കാർ ജനങ്ങളുടെ അവകാശങ്ങൾ ലംഘിക്കുമ്പോൾ, കലാപം ജനങ്ങൾക്കും ജനങ്ങളുടെ ഓരോ ഭാഗത്തിനും അവകാശങ്ങളുടെ ഏറ്റവും പവിത്രവും കടമകളിൽ ഒഴിച്ചുകൂടാനാവാത്തതുമാണ്." + "அரசாங்கம் மக்களின் உரிமைகளை மீறும் போது, ​​கிளர்ச்சி என்பது மக்களுக்கும் மக்களின் ஒவ்வொரு பகுதிக்கும், உரிமைகளில் மிகவும் புனிதமானது மற்றும் கடமைகளுக்கு மிகவும் இன்றியமையாதது." +
    "جب حکومت لوگوں کے حقوق کی خلاف ورزی کرتی ہے تو ، لوگوں کے لئے اور لوگوں کے ہر حصے کے لئے ، بغاوت ، حقوق کا سب سے مقدس اور فرائض کی سب سے زیادہ ناگزیر ہے۔" +
    "เมื่อรัฐบาลละเมิดสิทธิของประชาชนการจลาจลเป็นสิ่งที่ศักดิ์สิทธิ์ที่สุดของสิทธิและหน้าที่ที่ขาดไม่ได้สำหรับประชาชน" +
    "ప్రభుత్వం ప్రజల హక్కులను ఉల్లంఘించినప్పుడు, తిరుగుబాటు అనేది ప్రజలకు మరియు ప్రజల యొక్క ప్రతి భాగానికి, హక్కుల యొక్క అత్యంత పవిత్రమైనది మరియు విధులకు అత్యంత అనివార్యమైనది." +
    "സർക്കാർ ജനങ്ങളുടെ അവകാശങ്ങൾ ലംഘിക്കുമ്പോൾ, കലാപം ജനങ്ങൾക്കും ജനങ്ങളുടെ ഓരോ ഭാഗത്തിനും അവകാശങ്ങളുടെ ഏറ്റവും പവിത്രവും കടമകളിൽ ഒഴിച്ചുകൂടാനാവാത്തതുമാണ്.")
    console.log('You can submit your answer via "submit translation"')

});
