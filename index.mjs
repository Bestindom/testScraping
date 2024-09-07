import { chromium } from 'playwright'

const browser = await chromium.launch(
    { headless: true }
)

const page = await browser.newPage()

await page.goto(
    'https://zcodesystem.com/soccerbuddy/'
)

const resultsMatch = await page.$$eval(
    'closed',
    (results) => (
        results.map((x) => {

            const TotalScorePrediction = x
                .querySelector('.score tc c2 rollup')
                ?.innerText

            if (!TotalScorePrediction) return null


            return {TotalScorePrediction}
        })
    )
)

console.log(resultsMatch)
console.log('FUNCIONA')
await browser.close()