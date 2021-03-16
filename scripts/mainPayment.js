(function (window) {
    'use strict';
    var FORM_SELECTOR = '[data-coffee-payment="form"]';
    var App = window.App;

    var FormHandler = App.FormHandler;
    var formHandler = new FormHandler(FORM_SELECTOR);

    formHandler.addSubmitHandler(function (data) {
        $(".modalText").text("Thank you for your payment, " + data.title + " " + data.username);
    });

    var modal = document.getElementById("myModal");
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
        modal.style.display = "block";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }
})(window);
