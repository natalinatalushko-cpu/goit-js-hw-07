const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", event => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    if (email === "" || password === "") {
        alert("All form fields must be filled in!");
    } else {
        const formDataObject = {
            email,
            password
        };
        console.log(formDataObject);
        event.currentTarget.reset();
    }
}); 

