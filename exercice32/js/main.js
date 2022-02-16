$("button").click(function() {
    $.ajax({
        url: "https://restcountries.com/v3.1/name/france",
        success: function(data) {
            let city = data[0];
            console.log(city.name.common)
            console.log(city.capital[0])
        }  
    })
})