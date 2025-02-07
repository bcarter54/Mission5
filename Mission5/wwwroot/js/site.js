// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// This set of code monitors the number box to make sure only positive numbers are entered
$(document).ready(function () {
    $("input").on("input", function () {
        let value = $(this).val();
        
        // Alert if a negative number is entered
        if (value < 0) {
            $(this).val(0);
            alert("Please enter a number greater than 0");
        }
    });

    // Prevent entering non-numeric characters
    $("input").on("keypress", function (e) {
        if (e.which < 48 || e.which > 57) {
            e.preventDefault();
        }
    });
});

// Function that runs when calculate button is pressed
$("#calcTotal").click(function () 
{
    // Assign values to variables and then calculate total
    let numHours = $("#numHours").val();
    let rate = $("#rate").val();
    let total = numHours * rate;
    
    // Display total in div on page
    $("#totalCost").text('Total Estimated Cost: $' + total);
})