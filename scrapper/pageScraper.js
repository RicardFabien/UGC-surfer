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
        var titles = []; 

        // Select the category of book to be displayed
		await page.$$eval('.dates-content > div > .slider-item', (cards) => {

            console.log('cards: ',cards)
            titles[0] = "something"
            // titles = cards.filter(card => !!card.querySelector("a.gaClick").getAttribute('title'))
            // titles = titles.map(card => card.querySelector("a.gaClick").getAttribute('title'))

		});
		
        console.log("Title: ", titles[0]);
    }
}

module.exports = scraperObject;
