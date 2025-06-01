import { $, expect, browser } from "@wdio/globals";

describe('Home', () => {
    it('Fill out form and assert confirmation', async ()=>{
        //Open URL
        await browser.url('/');
        await $('#menu-item-493').click();
        
        await $('#evf-277-field_ys0GeZISRs-1').setValue('Reymon');
        await $('#evf-277-field_LbH5NxasXM-2').setValue('Reymon@gmail.com');
        await $('#evf-277-field_66FR384cge-3').setValue('8002589874');
        await $('#evf-277-field_yhGx3FOwr2-4').setValue('Hola como estas');

        await $('#evf-submit-277').click();

        const successAlert = $("[role='alert']");


        //Assert title
        await expect(successAlert).toHaveText('Thanks for contacting us! We will be in touch with you shortly');
    });
});