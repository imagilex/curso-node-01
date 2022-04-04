const fs = require('fs');
let colors = require('colors');

const CrearArchivo = (base=5, limite=10, mostrar=false) => {
    return new Promise((resolve, reject) => {
        try {
            let output = "", archCnt="";
            for(let x=1; x <= limite; x++) {
                output += `${base} `.padStart(5).magenta;
                output += ` x`.yellow;
                output += `${x} `.padStart(5).magenta;
                output += ` = `.yellow;
                output += `${base * x}\n`.padStart(5).green;
                archCnt += `${base} x ${x} = ${base * x}\n`;
            }

            if(mostrar) {
                console.log("".padStart(40, '=').cyan.bgGray)
                console.log(`               Tabla del ${base}             `.cyan.bgGray)
                console.log("".padStart(40, '=').cyan.bgGray)
                console.log("\n" + output)
            }
            
            arch = `tablas/tabla${base}.txt`
            fs.writeFileSync(arch, archCnt.trim());

            resolve(arch);
        } catch(err) {
            reject(err);
        }
    });
}

module.exports = {
    CrearArchivo
}