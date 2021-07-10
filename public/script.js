
var ip = document.getElementById('ip');
var ip_addr = document.getElementById('ip_addr');
var continent = document.getElementById('continent');
var country = document.getElementById('country');
var country_flag = document.getElementById('country_flag');
var country_phone = document.getElementById('country_phone');
var region = document.getElementById('region');
var city = document.getElementById('city');
var latitude = document.getElementById('latitude');
var longitude = document.getElementById('longitude');
var org = document.getElementById('org');


axios({
    url: 'http://ipwhois.app/json/',
    method: 'GET',
})
.then(res=>{ 
    ip.innerText += ' '+res['data']['ip'];
    ip_addr.innerText += res['data']['ip'];
    continent.innerText += res['data']['continent'];
    country.innerText += res['data']['country'];
    country_flag.setAttribute('src', res['data']['country_flag']);
    country_phone.innerText += res['data']['country_phone'];
    region.innerText += res['data']['region'];
    city.innerText += res['data']['city'];
    latitude.innerText += res['data']['latitude'];
    longitude.innerText += res['data']['longitude'];
    org.innerText += res['data']['org'];

})
