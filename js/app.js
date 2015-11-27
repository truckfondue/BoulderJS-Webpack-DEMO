console.log('app loaded');

var img = document.createElement('img');
img.style.height = '25%';
img.style.width = '25%';
img.src = require('../images/google_logo.jpg');

document.getElementById('img_container').appendChild(img);

require('../css/app.css');