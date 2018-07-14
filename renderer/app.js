// Modules
var fs = require('fs');

let rawdata = fs.readFileSync(`${__dirname}/mensajes.json`);
let mensajes = JSON.parse(rawdata);
console.log(mensajes);

const sendMesage = (mensajes) => {
    mensaje = mensajes.shift();
    url = `https://wa.me/${mensaje.tf}?text=${encodeURI(mensaje.text)}`;

    wb = `<webview id="webwhatsap" src="${url}" autosize="on" minwidth="600" minheight="800"></webview>`
    document.getElementById("wbcontent").innerHTML = wb

    var webview = document.getElementById("webwhatsap");
    webview.addEventListener('dom-ready', () => {
        webview.executeJavaScript(`document.getElementById("action-button").click();Promise.resolve(a);`)
    });
    let interv = setInterval(() => {

        webview.executeJavaScript(`document.getElementsByClassName("_2lkdt")[0].click();Promise.resolve(a);`)
        webview.executeJavaScript(`if(document.getElementsByClassName("_2S1VP")[0].innerHTML == ''){document.title = 'enviado'}   ;Promise.resolve(a);`)
        if (webview.getTitle() === 'enviado') {
            console.log('envioado..')

            if (mensajes.length == 0) {
                window.close();
            }
            sendMesage(mensajes)
        }
    }, 1000);
}
sendMesage(mensajes)