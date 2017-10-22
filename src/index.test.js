import {expect} from 'chai';
import fs from 'fs';
import jsdom from 'jsdom';
const {JSDOM} = jsdom;

describe('our first test',() =>{
it('should pass', ()=>{
expect(true).to.equal(true);
});
});

describe('index.html',() => {
it('shoud say starter kit', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    const dom = new JSDOM(index);
        const h1 = dom.window.document.getElementsByTagName('h1')[0];
        expect(h1.innerHTML).to.equal('Starter Kit');
        done();
        window.close();
});
});
