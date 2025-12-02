const API_URL = "https://yg88t6zat6.execute-api.ap-south-1.amazonaws.com/resume"; 
// REGISTER USER
function register() {
    const email = document.getElementById("regEmail").value;

    fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({
            action: "register",
            email: email
        })
    })
    .then(res => res.text())
    .then(alert);
}

// LOGIN USER
function login() {
    const email = document.getElementById("loginEmail").value;

    fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({
            action: "login",
            email: email
        })
    })
    .then(res => res.text())
    .then(alert);
}

// SAVE RESUME
function saveResume() {
    const name = document.getElementById("name").value;
    const skills = document.getElementById("skills").value;
    const about = document.getElementById("about").value;

    fetch(API_URL, {
        method: "POST",
        body: JSON.stringify({
            action: "saveResume",
            email: document.getElementById("loginEmail").value,
            resumeData: { name, skills, about }
        })
    })
    .then(res => res.text())
    .then(alert);
}

// DOWNLOAD (simple resume export)
function downloadPDF() {
    const name = document.getElementById("name").value;
    const skills = document.getElementById("skills").value;
    const about = document.getElementById("about").value;

    const text =
`Resume
-----------------
Name: ${name}
Skills: ${skills}
About: ${about}
`;

    const blob = new Blob([text], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "resume.txt";
    link.click();
}
