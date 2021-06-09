const os = require("os");
const fs = require("fs");


let totMem = byteToGb(os.totalmem());
let freMem = byteToGb(os.freemem());
let useMem = totMem - freMem;

function byteToGb(byte) {
    return Math.round(byte / 1024 / 1024 / 1024)
}

let pcInfo = () => {

    fs.writeFile("pc_info.txt", pcInfo(), "utf8", (err) => {
        if (err) throw err;
        console.log('Dosya kaydedildi!');
    });

    function pcInfo() {
        return `CPU Adı:  ${os.cpus()[0].model}\nCPU Sayısı: ${os.cpus().length}\nToplam RAM: ${totMem} GB\nBoş RAM: ${freMem} GB\nKulanılan RAM: ${useMem} GB`;
    }
}

exports.pcInfo = pcInfo;






