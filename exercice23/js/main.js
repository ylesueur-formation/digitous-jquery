// $(".btn").click(function() {
//     $("#square").animate({
//         "margin-top": "130px",
//         marginLeft: "300px"
//     })
// })

// Attention, il ne faut pas que votre élément soit en position static
$(".btn").click(function() {
    $("#square").animate({
        "right": "0",
        "bottom": "0"
    })
})