import { $, expect, browser } from "@wdio/globals";

describe('Home', () => {
    it('Get the text from all menu items and assert them', async ()=>{
        //Open URL
        await browser.url('/blog');

        const recentPosts = await $$('#recent-posts-3 ul li');

        for(const post of recentPosts){
            const text = await post.getText();
            await expect(text.length).toBeGreaterThan(10);
        }
        //Assert title
        await expect(recentPosts).toHaveLength(5);
    });
});