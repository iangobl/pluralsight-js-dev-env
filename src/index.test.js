import {expect} from 'chai'
import jsdom from 'jsdom'
import fs from 'fs'

describe('Our first test', () => {
  it('should pass', ()=>{
    expect(true).to.equal(true);
  });
});

// Unit test to ensure that the first H1 of the page says "Signature Generator"
describe('index.html', ()=>{
  it('should have h1 that says Signature Generator', (done) =>{
    const index = fs.readFileSync('./src/index.html', "utf-8");
    jsdom.env(index, function(err, window){
      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Signature Generator");
      done();
      window.close();
    });
  });
});
