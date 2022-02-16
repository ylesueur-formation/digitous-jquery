$("button").click(function() {
    $.ajax({
        url: "https://restcountries.com/v3.1/name/france",
        success: function(data) {
            let city = data[0];
            $("#country").html(city.name.common);
            $("#capital").html(city.capital[0]);
        }  
    })
})