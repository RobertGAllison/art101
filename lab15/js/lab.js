/**
 * Robert G Allison
 * Tuesday May 28th
 * Javscript for Lab15
 * MUCHO HELP FROM CHATGPT GREAT PARTNER INDEED!
 */

// Using the core $.ajax() method
$(document).ready(function() {
    $("#activate").click(function() {
        // Make AJAX call
        $.ajax({
            url: "https://pokeapi.co/api/v2/ability/?limit=20&offset=20",
            type: "GET",
            success: function(response) {
                // Update output div with fetched data
                $("#outputDiv").html(JSON.stringify(response));
            },
            error: function(xhr, status, error) {
                console.error("Error fetching data:", error);
            }
        });
    });
});