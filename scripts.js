// Debugging to ensure script is loaded
// console.log("Script loaded");

function showWish() {
    // console.log("showWish function called");
    document.getElementById('popup').style.display = 'block';
    document.getElementById('videoFrame').src = 'https://www.youtube.com/embed/E_1Pc-RgEgA';
}

function closePopup() {
    // console.log("closePopup function called");
    document.getElementById('popup').style.display = 'none';
    document.getElementById('videoFrame').src = ''; // Stop the video when the popup is closed
}

// Ensure the script is correctly attaching the event listener
// document.addEventListener("DOMContentLoaded", function() {
//     console.log("DOM fully loaded and parsed");
// });
