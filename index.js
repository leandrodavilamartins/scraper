const puppeteer = require('puppeteer');

async function main(){
    try{
        const browser = await puppeteer.launch({headless: false})
        const page = await browser.newPage();
        await page.goto('http://www.assuvap.com')
        await page.waitForSelector('input.myButton'); // the button below needs to be able before you click it !
        await page.click('[name="ctl00$ctl07"]', {delay: 2000})
        await page.waitForSelector('input#ctl00_USUA')
        await page.waitForSelector('input#ctl00_SENHA')
        await page.waitForSelector('input#ctl00_btLOGIN')
        await page.type('input#ctl00_USUA', 'email')
        await page.type('input#ctl00_SENHA', 'password')
        await page.click('input#ctl00_btLOGIN')
        
        await page.evaluate(() => {
            let elements = document.getElementsByClassName('edtleft');
            for (let element of elements)
                console.log(element)
        });
    }
    catch(err){
        console.error(err);
    }
}
main(); //