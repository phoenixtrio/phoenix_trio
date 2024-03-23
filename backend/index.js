const axios = require('axios');

axios.get('https://api.spotify.com/v1/search?q=taylorswift+lover&type=track', {
    headers: {
    'Authorization': 'Bearer BQA01M8bgl-Z_pnDg63zQ22VpLICz5B4xKLaVzUkWwctbROp-cpjiT7cPn0fJ7cGszxx76ZR81KanlF1IFVzo7ecdmuXkwwVHmMswWo7MKU43yrxDeHW82XA7rJOsrueZD8yZ-h1--Fw6O4F_rFnJjiV7G3bOGd2T-GYxmG03fvIrXslYtM3anshkudTssYHuo_8wemSfjN_qctcGvA'
}
}).then((data)=>{
    console.log(data.data.tracks.items);
})