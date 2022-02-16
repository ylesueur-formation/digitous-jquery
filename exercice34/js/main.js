$("button").click(function() {
    let URL = "https://restcountries.com/v3.1/name/" +
        $("input").val();
    console.log("URL: ", URL);
    $.ajax({
        url: URL,
        success: function(data) {
            let city = data[0];
            $("#country").html(city.name.common);
            $("#capital").html(city.capital[0]);
        }  
    })
})