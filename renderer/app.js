// Modules
var fs = require('fs');
const { ipcRenderer } = require('electron')

let rawdata = fs.readFileSync(`${__dirname}/mensajes.json`);
let mensajes = JSON.parse(rawdata);
console.log(mensajes);

sendMesage(mensajes)

function sendMesage() {
    mensaje = mensajes.shift();
    url = `https://wa.me/${mensaje.tf}?text=${encodeURI(mensaje.text)}`;

    wb = `<webview id="webwhatsap" src="${url}" autosize="on" minwidth="600" minheight="800"></webview>`
    document.getElementById("wbcontent").innerHTML = wb

    let webview = document.getElementById("webwhatsap");
    webview.addEventListener('dom-ready', () => {

        webview.executeJavaScript(`document.title = 'inicio'`)

        let interval = setInterval(() => {

            if (webview.getTitle() == 'inicio') {
                webview.executeJavaScript(`document.getElementById("action-button").click();Promise.resolve(a);`)
            } else {
                let webview = document.getElementById("webwhatsap");
                webview.executeJavaScript(`if(document.getElementsByClassName("_2S1VP")[0].innerHTML !== '' ){
                                                document.getElementsByClassName("_2lkdt")[0].click()
                                                document.title = 'enviado'
                                            }Promise.resolve(a);`)

                if (webview.getTitle() === 'enviado') {
                    console.log('envioado..')
                    finishSend()
                }
            }
        }, 1000);
    });

}

const finishSend = () => {
    //eliminar mensaje   
    //cerrar ventana y abrir otra
    //enciar a mainwindow.js
    //ipcRenderer.send('after-send-whatsap', newItemURL)
}

/* ipcRenderer.on('new-send-whatsap', (e, item) => {
    //de vuelta 
}) */