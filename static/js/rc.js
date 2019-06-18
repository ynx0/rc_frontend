'use strict';

const IP = "localhost";
const PORT = 23484;
const RC_CAR1_NS = "rc1";

const socket = io(`http://${IP}:${PORT}/${RC_CAR1_NS}`, {
    // reconnection: false,
    // pingInterval: 1,
    // pingTimeout: 1,
    transports: ['websocket'],
    allowUpgrades: false,
    maxHttpBufferSize: 10000000,
    timeout: 60000,
    pingTimeout: 60000,
    pingInterval: 1

});

const feed_el = document.querySelector("#feed");

socket.on('disconnect', (reason) => {
    console.log("Disconnected! because ", reason);
    socket.connect(`http://${IP}:${PORT}/${RC_CAR1_NS}`);
});


socket.on('image', (data) => {
    let image_b64 = data.image;
    // image_b64 = image_b64.substring(1).substring(0, image_b64.length - 2);
    // console.log('ayo', image_b64);
    feed_el.setAttribute("src", "data:image/png;base64," + image_b64)
});



