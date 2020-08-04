const puppeteer = require('puppeteer');

    (async () => {
    let productUrl = 'https://www.flipkart.com/realme-x2-pearl-green-128-gb/p/itm75023903eb431';

    let browser = await puppeteer.launch();
    let page = await browser.newPage();

    await page.goto(productUrl, { waitUntil : 'domcontentloaded'});
    let data = await page.evaluate(() => {
        let inStock = document.querySelector('#container > div > div._3Z5yZS.NDB7oB._12iFZG._3PG6Wd > div.ooJZfD._3FGKd2 > div.ooJZfD._2oZ8XT.col-8-12 > div:nth-child(4) > div._1mzTZn');
        return  (inStock ? "Item Out of Stock" : "Item In stock")
    })

    console.log(data);

    await browser.close();
})();

