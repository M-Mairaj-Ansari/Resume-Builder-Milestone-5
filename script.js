var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var userNameElement = document.getElementById('username');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var profilePictureInput = document.getElementById('profilepicture');
    var educationElement = document.getElementById('education');
    var skillsElement = document.getElementById('skills');
    var exprienceElement = document.getElementById('exprience');
    if (userNameElement && nameElement && emailElement && phoneElement && profilePictureInput && educationElement && skillsElement && exprienceElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var profilePictureFile = (_a = profilePictureInput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        var education = educationElement.value;
        var skills = skillsElement.value;
        var exprience = exprienceElement.value;
        var userName = userNameElement.value;
        var uniquePaht = "resume/".concat(userName.replace(/\s+/g, '_'), "_cv.html");
        var resumeOutput = "\n    <h2>Resume Output</h2> \n     ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"profile picture\" class=\"profilepicture\">") : '', "\n\n    <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\"> ").concat(name_1, " </span> </p>\n\n    <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\">  ").concat(email, " </span> </p>\n\n    <p><strong>Phone Number:</strong> <span id=\"edit-phone\" class=\"editable\">  ").concat(phone, " </span> </p>\n\n    <h3>Education</h3>\n    <p id=\"edit-education\" class=\"editable\"> ").concat(education, " </p>\n\n    <h3>Skills</h3>\n    <p id=\"edit-skills\" class=\"editable\"> ").concat(skills, " </p>\n\n    <h3>Exprience</h3>\n    <p id=\"edit-exprience\" class=\"editable\"> ").concat(exprience, " </p>\n\n    ");
        var downloadeLink = document.createElement('a');
        downloadeLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
        downloadeLink.download = uniquePaht;
        downloadeLink.textContent = 'Downloade Your Resume';
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            makeEditable();
            resumeOutputElement.appendChild(downloadeLink);
        }
    }
    else {
        console.error('One or more output element are missing');
    }
});
function makeEditable() {
    var editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            if (currentElement.tagName === "p" || currentElement.tagName === 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}
