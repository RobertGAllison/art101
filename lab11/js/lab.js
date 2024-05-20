/*
   lab.js - This simple JavaScript/jQuery script appends new elements to an output div
   Author: Robert G. Allison
   Date: May 2024
*/

$("#submit").click(function(){
    
    function sortString(inputString) {
    
    return inputString.split('').sort().join('');
    };
    
    const userName = $("#user-name").val();
    
    userNameSorted = sortString(userName);
    
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});

