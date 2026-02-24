function detectarNavegador() {
    let nav = navigator.userAgent.toLowerCase();
    let mensaje = "";

    if (nav.includes("chrome")) {
        mensaje = "Estás usando Google Chrome";
    } else if (nav.includes("firefox")) {
        mensaje = "Estás usando Mozilla Firefox";
    } else {
        mensaje = "El navegador no se ha identificado";
    }
    let win = window.open("", "", "width=300,height=200");
    win.document.write("<h3>" + mensaje + "</h3>");
}
