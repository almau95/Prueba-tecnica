class registerPage {
    get usernameField() { return $('//android.widget.EditText[@hint="Name"]'); }
    get addressField() { return $('//android.widget.EditText[@hint="Address"]'); }
    get emailField() { return $('//android.widget.EditText[@hint="Email"]'); }
    get mobileField() { return $('//android.widget.EditText[@hint="Mobile Number"]'); }
    get passwordField() { return $('//android.widget.EditText[@hint="Password"]'); }
    get rePasswordField() { return $('//android.widget.EditText[@hint="Re-enter Password"]'); }
    get createButton() { return $('//android.widget.Button[@text="Create Account"]'); }

    async open() {
        // Si necesitas una acción para abrir la página de registro desde el login,
        // puedes incluir aquí el código para hacer clic en el botón de registro desde la pantalla de login
    }

    async register(username, address, email, mobile, password, repassword) {
        await this.usernameField.setValue(username);
        await this.addressField.setValue(address);
        await this.emailField.setValue(email);
        await this.mobileField.setValue(mobile);
        await this.passwordField.setValue(password);
        await this.rePasswordField.setValue(repassword);
        await this.createButton.click();
    }
}

module.exports = new registerPage();