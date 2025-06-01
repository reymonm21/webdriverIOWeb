import { $, expect, browser } from "@wdio/globals";

describe('IFrame', () => {
    it('Working with iFrame', async ()=>{
    //Open URL
    await browser.url('https://practice.sdetunicorns.com/iframe-sample/');


    //access iFrame
    const iframe = await $('#advanced_iframe');
    await browser.switchFrame(iframe);


    //Verify logo exist in the iFrame
    await expect($('.hfe-site-logo')).toExist();
    
    //Switch to parent frame
    await browser.switchToParentFrame();

    //Verify parent website
    await expect($('h1.zak-page-title')).toHaveText('IFrame Sample');

    });
});