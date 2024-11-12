const loginPage = require('../pages/login.page');

Given('I open login screen', async () => {
    await loginPage.open();
});

When('I enter a valid username and password', async () => {
    const email = await $('//android.widget.EditText[@hint="Email"]');
    const password = await $('//android.widget.EditText[@hint="Password"]');
    await email.setValue('testuser@example.com');
    await password.setValue('password');
});

And('I click the loggin button', async () => {
    const loginBut = await $('//android.widget.Button[@text="Login"]');
    await loginBut.clickLoginButton();
});

Then('I should see the home screen', async () => {
    const titlemessage = await $('//android.widget.TextView[@text="Material Login Example"]');
    await expect(titlemessage).toBeDisplayed(); 
    
    const helloworld = await $('//android.widget.TextView[@text="Hello World!"]');
    await expect(helloworld).toBeDisplayed();
});