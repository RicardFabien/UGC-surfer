const scraperObject = {
    url: 'https://www.ugc.fr/cinema.html?id=20',
    async scraper(browser, category){
        let page = await browser.newPage();
        console.log(`Navigating to ${this.url}...`);
        // Navigate to the selected page
        await page.goto(this.url);
       await page.waitForSelector('.didomi-continue-without-agreeing');
       await page.click('.didomi-continue-without-agreeing')

       await page.waitForSelector('.dates-content .slick-initialized');
       await page.waitForTimeout(4000);
        let titles = []; 

        // Select the category of book to be displayed
		let selectedCategory = await page.$$eval('.dates-content > div > .slider-item', (cards, _category) => {


            titles = cards.filter(card => card.querySelector("a.gaClick").title).map(card => card.querySelector(".dates-content > div > .slider-item a.gaClick").title)

		}, category);
		
        console.log("Title: ", titles[0]);
    }
}

module.exports = scraperObject;
