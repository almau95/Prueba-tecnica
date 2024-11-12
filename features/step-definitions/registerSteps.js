const loginPage = require('../pages/login.page');
const registerPage = require('../pages/register.page');

Given('I open login screen', async () => {
    await loginPage.open();
});

When('I enter to registration screen', async () => {
    await registerPage.open();
});

And('I enter a valid user information', async () => {
    const name = await $('//android.widget.EditText[@hint="Name"]');
    const address = await $('//android.widget.EditText[@hint="Address"]');
    const email = await $('//android.widget.EditText[@hint="Email"]');
    const number = await $('//android.widget.EditText[@hint="Mobile Number"]');
    const password = await $('//android.widget.EditText[@hint="Password"]');
    const repassword = await $('//android.widget.EditText[@hint="Re-enter Password"]');
    await name.setValue('testuser');
    await address.setValue('Calacoto 123');
    await email.setValue('testuser@example.com');
    await number.setValue('6785453');
    await password.setValue('password');
    await repassword.setValue('password');
});

And('I click the register button', async () => {
    const createBut = await $('//android.widget.Button[@text="Create Account"]');
    await createBut.clickLoginButton();
});

Then('I should see the home screen', async () => {
    const titlemessage = await $('//android.widget.TextView[@text="Material Login Example"]');
    await expect(titlemessage).toBeDisplayed(); 
    
    const helloworld = await $('//android.widget.TextView[@text="Hello World!"]');
    await expect(helloworld).toBeDisplayed();
});