class loginPage {
    get usernameField() { return $('//android.widget.EditText[@hint="Email"'); }
    get passwordField() { return $('//android.widget.EditText[@hint="Password"]'); }
    get loginBut() { return $('//android.widget.Button[@text="Login"]'); }

    async open() {
    
    }

    async login(username, password) {
        await this.usernameField.setValue('testuser@example.com');
        await this.passwordField.setValue('password');
        await this.loginBut.click();
    }
}

module.exports = new loginPage();