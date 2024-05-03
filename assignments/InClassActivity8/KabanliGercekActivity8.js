var languages = [
    "php",
    "java",
    "C",
    "C++",
    "C#",
    "python",
    "ruby",
    "perl",
    "javascript",
    "html",

];
$(document).ready(function () {
    $('#birthday').datepicker();
    $("#language").autocomplete({
        source: languages
    });
    $("input:required").each(function () {
        if ($(this).val().trim() === '') {
            $(this).css("border", "2px solid red");
        }
    });

    // Add this event listener to change the border color when the input value changes
    $("input:required").on('input', function () {
        if ($(this).val().trim() === '') {
            $(this).css("border", "2px solid red");
        } else {
            $(this).css("border", "");
        }
    });
    $("input[type='url']").on('input', function () {
        var urlRegex = /^(ftp|http|https):\/\/[^ "]+$/;
        if (!urlRegex.test($(this).val())) {
            $(this).css("border", "2px solid red");
        } else {
            $(this).css("border", "");
        }
    });
    $("input[type='email']").on('input', function () {
        var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailRegex.test($(this).val())) {
            $(this).css("border", "2px solid red");
        } else {
            $(this).css("border", "");
        }
    });
});
