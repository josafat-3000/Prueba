const ThermalPrinter = require("node-thermal-printer").printer;
const Types = require("node-thermal-printer").types;
// Obtener la fecha y hora actual
const fechaHoraActual = new Date();
fechaHoraActual.setHours(fechaHoraActual.getHours() - 14);

// Formatear la fecha y hora en una cadena
const cadenaFechaHora = fechaHoraActual.toLocaleString();




async function printImage() {
    const printer = new ThermalPrinter({
      type: Types.EPSON,
      interface: 'ticket.bin',
    });
    printer.alignCenter();   
    await printer.printImage('/home/orangepi/Desktop/g.png')
    printer.bold(true); 
    printer.setTextSize(1,1);  
    printer.println("SUS DOCUMENTOS");
    printer.println("SERAN REVISADOS");
    printer.newLine(); 
    printer.newLine();
    printer.bold(true); 
    printer.setTextSize(0,0);  
    printer.println(cadenaFechaHora);

    printer.cut();
    printer.execute();
  }
  
  printImage();