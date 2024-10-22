document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const userNameElement = document.getElementById('username') as HTMLInputElement;
    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const profilePictureInput = document.getElementById('profilepicture') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const skillsElement = document.getElementById('skills') as HTMLInputElement;
    const exprienceElement = document.getElementById('exprience') as HTMLInputElement;


    if (userNameElement && nameElement && emailElement && phoneElement && profilePictureInput && educationElement && skillsElement && exprienceElement) {

        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const profilePictureFile = profilePictureInput.files?.[0]
        const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        const education = educationElement.value;
        const skills = skillsElement.value;
        const exprience = exprienceElement.value;
        const userName = userNameElement.value;
        const uniquePaht = `resume/${userName.replace(/\s+/g, '_')}_cv.html`


        const resumeOutput = `
    <h2>Resume Output</h2> 
     ${profilePictureURL ? `<img src="${profilePictureURL}" alt="profile picture" class="profilepicture">` : ''}

    <p><strong>Name:</strong> <span id="edit-name" class="editable"> ${name} </span> </p>

    <p><strong>Email:</strong> <span id="edit-email" class="editable">  ${email} </span> </p>

    <p><strong>Phone Number:</strong> <span id="edit-phone" class="editable">  ${phone} </span> </p>

    <h3>Education</h3>
    <p id="edit-education" class="editable"> ${education} </p>

    <h3>Skills</h3>
    <p id="edit-skills" class="editable"> ${skills} </p>

    <h3>Exprience</h3>
    <p id="edit-exprience" class="editable"> ${exprience} </p>

    `;
        const downloadeLink = document.createElement('a')
        downloadeLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput)
        downloadeLink.download = uniquePaht;
        downloadeLink.textContent = 'Downloade Your Resume';


        const resumeOutputElement = document.getElementById('resumeOutput')
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput
            makeEditable();
            resumeOutputElement.appendChild(downloadeLink);
        }

    } else {
        console.error('One or more output element are missing')
    }
})


function makeEditable() {
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.addEventListener('click', function () {
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";

            if (currentElement.tagName === "p" || currentElement.tagName === 'SPAN') {
                const input = document.createElement('input')
                input.type = 'text'
                input.value = currentValue
                input.classList.add('editing-input')

                input.addEventListener('blur', function () {
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline'
                    input.remove()
                })

                currentElement.style.display = 'none'
                currentElement.parentNode?.insertBefore(input, currentElement)
                input.focus()
            }
        })
    })
}