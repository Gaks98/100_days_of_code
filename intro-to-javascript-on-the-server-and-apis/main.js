const express = require('express'),
  fetch = require('node-fetch'),
  app = express();

app.set('view engine', 'ejs');

function getCryptos(code) {
    return fetch('https://api.nexchange.io/en/api/v1/currency/')
        .then(cryptoData => cryptoData.json())
        .then(cryptoData => {
            // return cryptoData.filter(crypto => crypto.code == code);
          return code ? cryptoData.filter(crypto => crypto.code == code) : cryptoData
        })        
        .catch(err => console.log(err));
}
app.get('/', (req, res) => {
    const code = req.query.code;
    getCryptos(code)
        .then(cryptoData => {
          res.render('home', { cryptoData: cryptoData });
        })
        .catch(err => console.log(err))
});

app.listen(3000, () => {
  console.log(`server listening at port 3000`);
});
