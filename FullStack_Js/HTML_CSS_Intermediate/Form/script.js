document.getElementById("login_form").addEventListener("submit", function(event){
	event.preventDefault()
	const password = document.getElementById("password").value
	const rePassword = document.getElementById("re-password").value
	const passwordError = document.getElementById("passwordError")
	if (password !== rePassword){
		passwordError.textContent = "Las contraseñas no coinciden"
	}
})