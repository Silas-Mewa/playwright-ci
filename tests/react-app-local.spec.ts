import { test, expect } from '@playwright/test';
import { beforeEach, describe } from 'node:test';

describe("local tests", (page) => {

  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5173/');
  })
  
  test('has title', async ({ page }) => {
    await expect(page.getByRole('heading')).toContainText('Vite + React')
  });
  
  test('has button', async ({ page }) => {
    await expect(page.getByRole('button')).toContainText('count is')
  });

  test('can click', async ({ page }) => {
    await expect(page.getByRole('button')).toContainText('count is 0')
    await page.getByRole('button', {name: 'count is '}).click()
    await expect(page.getByRole('button')).toContainText('count is 1')
    await page.getByRole('button', {name: 'count is '}).click()
    await expect(page.getByRole('button')).toContainText('count is 2')
  });
  


  
  // test('can access swagger', async ({ page }) => {
  //   await page.goto('http://localhost:8080/swagger-ui/index.html');
  //   await expect(page.getByRole('heading', { name: 'OpenAPI definition v0 OAS' })).toContainText('OpenAPI definition')
  // });
  
  test('can access external links', async ({ page }) => {
    await page.goto('http://google.com');
  });
})



