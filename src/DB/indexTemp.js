const axios = require('axios');
const jsdom = require('jsdom');

const { JSDOM } = jsdom;
const options = {
  headers: {
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36',
  },
};

axios('https://rus-ege.sdamgia.ru/test?id=31926141', options)
  .then((res) => {
    const dom = new JSDOM(res.data);
    // console.log(dom);
    const div = dom.window.document.getElementsByClassName('pbody');
    // console.log(div);
    const p = div[0].getElementsByTagName('p');
    for (let i = 0; i < p.length; i += 1) {
      console.log(p[i].textContent);
      // for (let i = 0; i < div.length; i += 1) {
      //   console.log(div[i]);
      // }
    }
  });
