let egito = document.getElementById("margin-top-dropdown");
let expressoes = document.getElementById("linkExpressoes");
let moderna = document.getElementById("linkArtemoderna");
let sambaqui = document.getElementById("linkSambaqui");
let modernismo = document.getElementById("linkModernismo");
let hindu = document.getElementById("linkHindu");
let sintaxe = document.getElementById("linkSintaxe");
let vanguardas = document.getElementById("linkVanguardas");
let mesopotamia = document.getElementById("link-dropdown-excessao");
let mitologia = document.getElementById("link-mitologia");
let sairLogin = document.getElementById("link-sair");

function mouseSair() {
    let elementoHome = document.getElementById("link-home");
    elementoHome.classList.add("mouseSaiu");
    setTimeout(() => {
        elementoHome.classList.remove("mouseSaiu");
    }, 300);
}


if (egito !== null) {
    function sairEgipcia() {
        let elemento = document.getElementById("margin-top-dropdown");
        elemento.classList.add("saiuEgipcia");

        setTimeout(() => {
            elemento.classList.remove("saiuEgipcia");
        }, 300);
    }

    document.getElementById("margin-top-dropdown").addEventListener("mouseleave", sairEgipcia);
}

if (expressoes !== null) {
    function sairIrlanda() {
        let elementoexpressoes = document.getElementById("linkExpressoes");
        elementoexpressoes.classList.add("saiuexpressoes");
        setTimeout(() => {
            elementoexpressoes.classList.remove("saiuexpressoes");
        }, 300);
    }

    document.getElementById("linkExpressoes").addEventListener("mouseleave", sairIrlanda);
}

if (moderna !== null) {
    function sairmoderna() {
        let elementomoderna = document.getElementById(`linkArtemoderna`);
        elementomoderna.classList.add("saiumoderna");
        setTimeout(() => {
            elementomoderna.classList.remove("saiumoderna");
        }, 300);
    }

    document.getElementById("linkArtemoderna").addEventListener("mouseleave", sairmoderna);
}

if (sambaqui !== null) {
    function sairsambaqui() {
        let elementosambaqui = document.getElementById("linksambaqui");
        elementosambaqui.classList.add("saiusambaqui");
        setTimeout(() => {
            elementosambaqui.classList.remove("saiusambaqui");
        }, 300);
    }

    document.getElementById("linksambaqui").addEventListener("mouseleave", sairsambaqui);
}

if (modernismo !== null) {
    function sairmodernismo() {
        let elementomodernismo = document.getElementById("linkModernismo");
        elementomodernismo.classList.add("saiumodernismo");
        setTimeout(() => {
            elementomodernismo.classList.remove("saiumodernismo");
        }, 300);
    }

    document.getElementById("linkModernismo").addEventListener("mouseleave", sairmodernismo);
}

if (hindu !== null) {
    function sairHindu() {
        let elementoHindu = document.getElementById("linkHindu");
        elementoHindu.classList.add("saiuHindu");
        setTimeout(() =>  {
            elementoHindu.classList.remove("saiuHindu");
        }, 300);
    }

    document.getElementById("linkHindu").addEventListener("mouseleave", sairHindu);
}

if (sintaxe !== null) {
    function sairsintaxe() {
        let elementosintaxe = document.getElementById("linkSintaxe");
        elementosintaxe.classList.add("saiusintaxe");
        setTimeout(() => {
            elementosintaxe.classList.remove("saiusintaxe");
        }, 300);
    }

    document.getElementById("linkSintaxe").addEventListener("mouseleave", sairsintaxe);
}

if (vanguardas !== null) {
    function sairvanguardas() {
        let elementovanguardas = document.getElementById("linkVanguardas");
        elementovanguardas.classList.add("saiuvanguardas");
        setTimeout(() => {
            elementovanguardas.classList.remove("saiuvanguardas");
        }, 300);
    }

    document.getElementById("linkVanguardas").addEventListener("mouseleave", sairvanguardas);
}

if (mesopotamia !== null) {
    function linkMesopotamiaSair() {
        let elementoMesopotamia = document.getElementById("link-dropdown-excessao");
        elementoMesopotamia.classList.add("saiuMesopotamia");

        setTimeout(() => {
            elementoMesopotamia.classList.remove("saiuMesopotamia");
        }, 300);
    }

    document.getElementById("link-dropdown-excessao").addEventListener("mouseleave", linkMesopotamiaSair);
}


function sairLogout() {
    let elementoHome = document.getElementById("link-sair");
    elementoHome.classList.add("saiuLogin");
    setTimeout(() => {
        elementoHome.classList.remove("saiuLogin");
    }, 300);
}

document.getElementById("link-sair").addEventListener("mouseleave", sairLogout);