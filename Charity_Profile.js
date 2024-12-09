document.addEventListener("DOMContentLoaded", () => {
    
    // Select elements from the DOM
    const volunteerBtn = document.getElementById("volunteerBtn");
    const volunteerFormContainer = document.getElementById("volunteerFormContainer");
    const volunteerForm = document.getElementById("volunteerForm");
    const exitBtn = document.getElementById("exitBtn"); // New exit button
    const extraDetails = document.getElementById("extraDetails");
    const charityInfo = document.querySelector(".charity-info");
    
    // Event listener for the "Volunteer Now" button
    volunteerBtn.addEventListener("click", () => {
        // Show the volunteer form when the button is clicked
        volunteerFormContainer.style.display = "block";
        volunteerBtn.style.display = "none"; // Hide the "Volunteer Now" button after click
    });
    
    // Event listener to handle the form submission
    volunteerForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get form data (basic example of extracting input values)
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;

        // Display a thank you message or handle the submission (e.g., send the data to a server)
        alert(`Thank you for signing up, ${name}! We will contact you at ${email} shortly.`);

        // Reset the form (optional)
        volunteerForm.reset();

        // Optionally hide the form after submission
        volunteerFormContainer.style.display = "none";
        volunteerBtn.style.display = "block"; // Show the "Volunteer Now" button again
    });

    // Adding hover functionality to display extra charity details
    if (charityInfo) {
        charityInfo.addEventListener("mouseover", () => {
            extraDetails.style.display = "block"; // Show the extra charity details on hover
        });

        charityInfo.addEventListener("mouseout", () => {
            extraDetails.style.display = "none"; // Hide the extra details when mouse leaves
        });
    }

    // Event listener for the exit button
    if (exitBtn) {
        exitBtn.addEventListener("click", () => {
            // Hide the volunteer form when the exit button is clicked
            volunteerFormContainer.style.display = "none";
            volunteerBtn.style.display = "block"; // Show the "Volunteer Now" button again
        });
    }
});


// Slideshow functionality
document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slides');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const radioButtons = document.querySelectorAll('input[name="slide"]');
    
    let currentSlide = 0;

    function showSlide(index) {
        if (index < 0) {
            currentSlide = slides.length - 1;
        } else if (index >= slides.length) {
            currentSlide = 0;
        } else {
            currentSlide = index;
        }

        slides.forEach((slide, i) => {
            slide.style.display = 'none'; // Hide all slides
            radioButtons[i].checked = false; // Uncheck all radio buttons
        });

        slides[currentSlide].style.display = 'block'; // Show the current slide
        radioButtons[currentSlide].checked = true; // Check the corresponding radio button
    }

    prevButton.addEventListener('click', () => {
        showSlide(currentSlide - 1); // Show previous slide
    });

    nextButton.addEventListener('click', () => {
        showSlide(currentSlide + 1); // Show next slide
    });

    radioButtons.forEach((radioButton, index) => {
        radioButton.addEventListener('change', () => {
            showSlide(index); // Show the corresponding slide when radio button is changed
        });
    });

    showSlide(currentSlide);

    setInterval(() => {
        showSlide(currentSlide + 1); // Automatically move to the next slide every 5 seconds
    }, 5000);
});


// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
    
    // Select elements from the DOM
    const volunteerBtn = document.getElementById("volunteerBtn");
    const volunteerFormContainer = document.getElementById("volunteerFormContainer");
    const volunteerForm = document.getElementById("volunteerForm");
    const exitBtn = document.getElementById("exitBtn");
    const extraDetails = document.getElementById("extraDetails");
    const charityInfo = document.querySelector(".charity-info");
    
    // Event listener for the "Volunteer Now" button
    volunteerBtn.addEventListener("click", () => {
        // Show the volunteer form when the button is clicked
        volunteerFormContainer.style.display = "block";
        volunteerBtn.style.display = "none"; // Hide the "Volunteer Now" button after click
    });
    
    // Event listener to handle the form submission
    volunteerForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get form data (basic example of extracting input values)
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const phone = document.getElementById("phone").value;

        // Display a thank you message or handle the submission (e.g., send the data to a server)
        alert(`Thank you for signing up, ${name}! We will contact you at ${email} shortly.`);

        // Reset the form (optional)
        volunteerForm.reset();

        // Optionally hide the form after submission
        volunteerFormContainer.style.display = "none";
        volunteerBtn.style.display = "block"; // Show the "Volunteer Now" button again
    });

    // Adding hover functionality to display extra charity details
    if (charityInfo) {
        charityInfo.addEventListener("mouseover", () => {
            extraDetails.style.display = "block"; // Show the extra charity details on hover
        });

        charityInfo.addEventListener("mouseout", () => {
            extraDetails.style.display = "none"; // Hide the extra details when mouse leaves
        });
    }

    // Event listener for the exit button
    if (exitBtn) {
        exitBtn.addEventListener("click", () => {
            // Hide the volunteer form when the exit button is clicked
            volunteerFormContainer.style.display = "none";
            volunteerBtn.style.display = "block"; // Show the "Volunteer Now" button again
        });
    }
});