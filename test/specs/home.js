//Practice E-Commerce Site – SDET Unicorns
import { expect } from '@wdio/globals';

describe('Home', () => {
    it('Open URL & Assert title', async ()=>{
        //Open URL
        await browser.url('https://practice.sdetunicorns.com/');

        //Assert title
        await expect(browser).toHaveTitle('Practice E-Commerce Site – SDET Unicorns');
    });
    it('Open URL & Assert URL', async ()=>{
        //Open URL
        await browser.url('https://practice.sdetunicorns.com/');

        //Assert title
        await expect(browser).toHaveUrl('https://practice.sdetunicorns.com/');
    });
        it('Open URL & Assert Get Started Page', async ()=>{
        //Open URL
        await browser.url('https://practice.sdetunicorns.com/');
        await $('#get-started').click();
        
        //Assert title
        await expect(browser).toHaveUrl(expect.stringContaining('get-started'));
    });
     it('Open URL & Assert Get Not to have Get Started Page', async ()=>{
        //Open URL
        await browser.url('https://practice.sdetunicorns.com/#get-started');
        await $('.custom-logo').click();

        //Assert title
        await expect(browser).toHaveUrl(expect.not.stringContaining('get-started'));
    });
         it('Find heading element and assert text', async ()=>{
        //Open URL
        await browser.url('https://practice.sdetunicorns.com/#get-started');
       //Find heading element
        const heading1 = await $('.elementor-widget-container h1');

        //Get text
        const text1 = await heading1.getText();

        //Assert text
        await expect(text1).toEqual('Think different. Make different');
        await expect(heading1).toHaveText('Think different. Make different.');

    });
});