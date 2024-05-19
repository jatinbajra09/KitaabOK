var currentQuestionIndex = 0; // Track the index of the current question

// Function to start the survey and display the first question
function startfunc() {
    // Hide the background container and details container
    document.getElementById("bg-container").style.display = "none";
    document.querySelector(".details-container").style.display = "none";
    // Show the survey container
    document.getElementById("survey-container").style.display = "block";

    // Display the first question
    var questions = document.querySelectorAll(".survey-questions");
    questions[currentQuestionIndex].style.display = "block";

    // Enable next button if an option is selected
    var options = questions[currentQuestionIndex].querySelectorAll('input[type="radio"]');
    options.forEach(function(option) {
        option.addEventListener("change", function() {
            document.getElementById("nextButton").disabled = false;
        });
    });
}

// Function to display the previous question
function prevQuestion() {
    var questions = document.querySelectorAll(".survey-questions");
    if (currentQuestionIndex > 0) {
        questions[currentQuestionIndex].style.display = "none"; // Hide the current question
        currentQuestionIndex--; // Decrement the index to move to the previous question
        questions[currentQuestionIndex].style.display = "block"; // Show the previous question

        // Enable back button if not at the first question
        document.getElementById("backButton").disabled = currentQuestionIndex === 0;

        
    }
}

// Function to display the next question
function nextQuestion() {
    var questions = document.querySelectorAll(".survey-questions");
    if (currentQuestionIndex < questions.length - 1) {
        questions[currentQuestionIndex].style.display = "none"; // Hide the current question
        currentQuestionIndex++; // Increment the index to move to the next question
        questions[currentQuestionIndex].style.display = "block"; // Show the next question

        // Enable back button
        document.getElementById("backButton").disabled = false;
        
        // Disable next button until an option is selected
        document.getElementById("nextButton").disabled = true;

        // Enable next button if an option is selected
        var options = questions[currentQuestionIndex].querySelectorAll('input[type="radio"]');
        options.forEach(function(option) {
            option.addEventListener("change", function() {
                document.getElementById("nextButton").disabled = false;
            });
        });
    } else {
        alert("congrats");
    }
}

function loginFunction() {
    document.getElementById("bg-container").style.display = "none";
    document.querySelector(".details-container").style.display = "none";
    document.getElementById("survey-container").style.display = "none";
    document.getElementById("login-signup").style.display = "block";
}

let signup = document.querySelector(".signup");
let loginButton = document.querySelector(".login"); // Renamed the variable to avoid conflict
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
 
signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});
 
loginButton.addEventListener("click", () => { // Changed variable name here as well
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});
