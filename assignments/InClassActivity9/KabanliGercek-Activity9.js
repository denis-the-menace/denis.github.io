$(document).ready(function() {
    $("#image_list a").each(function() {
        var swappedImage = new Image();
        swappedImage.src = $(this).attr("href");
    });
  
    $("#image_list a").click(function(evt) {
        var url = $(this).attr("href");
        var caption = $(this).attr("title");
        $("#image, #caption").fadeOut(1000, function() {

            $("#image").attr("src", url);
            $("#caption").text(caption);

            $("#image, #caption").fadeIn(1000);
        });

        evt.preventDefault();
    });
    
    $("li:first-child a").focus();
}); 
