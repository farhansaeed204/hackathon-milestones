// Get references to the form and display area
var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("resume-display");
// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input value
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var education = document.getElementById("education").value;
    var experience = document.getElementById("experience").value;
    var skills = document.getElementById("skills").value;
    // Generate the resume content dynamically
    var resumeHTML = "\n    <h2><>Editable Resume</b></h2>\n    <h3>Personal Information</h3>\n    <p><b>Name:</b><span contentededitable=\"true\">".concat(name, "</span></p>\n    <p><b>Email:</b><span contentededitable=\"true\">").concat(email, "</span></p>\n    <p><b>Phone:</b><span contentededitable=\"true\">").concat(phone, "</span></p>\n\n    <h3>Education</h3>\n    <p contentededitable=\"true\">").concat(education, "</p>\n\n    <h3>Experience</h3>\n    <p contentededitable=\"true\">").concat(experience, "</p>\n\n    <h3>Skills</h3>\n    <p contentededitable=\"true\">").concat(skills, "</p>\n    ");
    // Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
"";
