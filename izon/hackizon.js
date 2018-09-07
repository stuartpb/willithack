/* global QRCode */

var ssidInput = document.getElementById('ssid');
var passInput = document.getElementById('pass');
var camipInput = document.getElementById('camip');
var qrCanvas = document.getElementById('qr');
var camLink = document.getElementById('camlink');
var camWifiLink = document.getElementById('camwifi');

function getWifiString(params) {
  return 'WIFI:T: ;S:' + params.ssid + ';P:' + params.pass + ';;' +
    params.ssid.length + ':' + params.pass.length +
    ':;IP:' + (params.ip || '127.0.0.1') + ';PID:2000;##';
}

function updateQR() {
  QRCode.toCanvas(qrCanvas,
      getWifiString({ssid: ssidInput.value, pass: passInput.value}));
}

ssidInput.addEventListener('input', updateQR);
passInput.addEventListener('input', updateQR);

function updateCamLinks() {
  var rootUrl = 'http://admin:admin@' + camipInput.value + '/mobileye';
  camLink.href = camLink.textContent = rootUrl;
  camWifiLink.href = camWifiLink.textContent =
    rootUrl + '/settings/settings-wifi.html';
}

camipInput.addEventListener('input', updateCamLinks);
