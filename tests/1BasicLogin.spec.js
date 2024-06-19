const {test,expect} = require('@playwright/test')

test('Verify the Login with valid Credentials', async({page}) => {

 let DashboardELE = await page.locator('h6[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')

 await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

 await page.locator('input[name="username"]').fill('Admin')
 await page.locator('input[name="password"]').fill('admin123')
 await page.locator('button[type="submit"]').click()

 await expect(DashboardELE).toBeVisible()
 await expect(DashboardELE).toHaveText('Dashboard')
 await expect(page.locator('img[alt="client brand banner"]')).toBeVisible()
 await expect(page).toHaveTitle('OrangeHRM')
 await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

})

test('Verify the Login with invalid Credentials', async({page})=>{
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.locator('input[name="username"]').fill('admin')
    await page.locator('input[name="password"]').fill('Akshata')
    await page.locator('button[type="submit"]').click()

    await expect(page.locator('div[role="alert"]')).toBeVisible()
    await expect(page.locator('p[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toHaveText('Invalid credentials')
    
})


test('Verify the Login with Required Credentials', async({page})=>{
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.locator('input[name="username"]').fill('admin')
    await page.locator('input[name="password"]').fill('')
    await page.locator('button[type="submit"]').click()

    await expect(page.locator('span[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]')).toHaveText('Required')

})








//TagName[attr = "Value"]
//input[name ="username"]

