var name = "test";
var password = "1234";

$(document).ready(function() {
    if (typeof localStorage.auth === "undefined") {
        localStorage.auth = false;
    }
    if (localStorage.auth == 'true') {
        $("#success").show();
    } else {
        $("#table").show();
    }
    $("#success button").click(function() {
        delete localStorage.auth;
        $("#success").hide();
        $("#table").show();
    })
    $("#submit").click(function() {
        $("#table").hide();
        if (name == $("#name").val() && password == $("#password").val()) {
            $("#success").show();
            localStorage.auth = true;
        } else {
            $("#error").show();
        }
        return false;
    });

});