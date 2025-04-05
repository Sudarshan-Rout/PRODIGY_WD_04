// Simulating popup confirmation on recommendation submission
function showPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";

    setTimeout(function () {
        popup.style.display = "none";
    }, 3000);  // Hide after 3 seconds
}

document.getElementById('recommendation-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get the values of the name and message fields
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    // Check if the message is not empty
    if (message.trim() !== '') {
        // Create a new recommendation entry
        const recommendationList = document.querySelector('.recommendation-list');
        const newRecommendation = document.createElement('div');
        newRecommendation.classList.add('recommendation');
        newRecommendation.innerHTML = `<p>${message} <br> - ${name ? name : 'Anonymous'}</p>`;
        
        // Append the new recommendation to the list
        recommendationList.appendChild(newRecommendation);

        // Show the popup message
        showPopup();

        // Clear the form
        document.getElementById('recommendation-form').reset();
    }
});
// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("scrollToTopButton").style.display = "block";
    } else {
        document.getElementById("scrollToTopButton").style.display = "none";
    }
}

// Scroll to the top of the document when the user clicks the button
document.getElementById('scrollToTopButton').addEventListener('click', function(event){
    event.preventDefault();
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});
