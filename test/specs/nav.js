import { expect } from '@wdio/globals';

describe('Home', () => {
    it('Get the text from all menu items and assert them', async ()=>{
        //Open URL
        await browser.url('/');

        const workLinks = [
            "Home",
            "About",
            "Shop",
            "Blog",
            "Contact",
            "My account"
        ];

        const actualLinks = [];

//        const navLinks = await $('#zak-primary-menu').$$('li[id*=menu]');
        const navLinks = await $$('#zak-primary-menu li[id*=menu]');

        for(const link of navLinks){
            actualLinks.push(await link.getText());
        }
        //Assert title
        await expect(workLinks).toEqual(actualLinks);
    });
});