import { expect } from '@wdio/globals';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);  // AQUÍ estaba el error (faltaba llamar a dirname)

describe('Upload Tests', () => {
    it('Upload test', async ()=>{
        //Open URL
        await browser.url('https://the-internet.herokuapp.com/upload');

        const filePath = path.join(__dirname, '../data/asi.png');

        const remoteFilePath = await browser.uploadFile(filePath);

        await $('#file-upload').setValue(remoteFilePath);
        await $('#file-submit').click();

        await expect($('h3')).toHaveText('File Uploaded!');
    });
});