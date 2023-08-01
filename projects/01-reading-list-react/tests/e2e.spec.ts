import { test, expect } from '@playwright/test'

const LOCALHOST_URL = 'http://localhost:5173/'

test('available books and lecture books quantity', async ({ page }) => {
  await page.goto(LOCALHOST_URL)

  const nOfAvailableBooksText = await page.locator('.available-books-number').textContent()
  const nOfAvailableBooks = parseInt(nOfAvailableBooksText ? nOfAvailableBooksText : '0')

  const nOfLectureBooksText = await page.locator('.lecture-books-number').textContent()
  const nOfLectureBooks = parseInt(nOfLectureBooksText ? nOfLectureBooksText : '0')

  await expect(nOfAvailableBooks).toEqual(13)
  await expect(nOfLectureBooks).toEqual(0)
})
