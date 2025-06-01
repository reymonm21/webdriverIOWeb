import { $, expect, browser } from "@wdio/globals";
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);  // AQUÍ estaba el error (faltaba llamar a dirname)

describe('Upload Tests', () => {
    it('Upload test', async ()=>{
        //Open URL
        await browser.url('https://the-internet.herokuapp.com/upload');

        //store test file path
        const filePath = path.join(__dirname, '../data/asi.jpg');

        //upload test file
        const remoteFilePath = await browser.uploadFile(filePath);

        //set file path value in the input field
        await $('#file-upload').setValue(remoteFilePath);
        await $('#file-submit').click();

        //assertion
        await expect($('h3')).toHaveText('File Uploaded!');
    });
    it.only('Upload hidden input', async ()=>{
        //Open URL
        await browser.url('/cart/');

        //store test file path
        const filePath = path.join(__dirname, '../data/asi.jpg');

        //upload test file
        const remoteFilePath = await browser.uploadFile(filePath);

        //remove hidden class
        await browser.execute("document.querySelector('#upfile_1').className = '';");

        //set file path value in the input field
        await $('#upfile_1').setValue(remoteFilePath);
        await $('#upload_1').click();

        //assertion
        await expect($('#wfu_messageblock_header_1_label_1')).toHaveText(expect.stringContaining('uploaded successfully'));
    });
});
