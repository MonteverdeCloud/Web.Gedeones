// ============================================================
//  DATOS DEL SITIO — Turno de Oración · Camp. Monteverde
//  Edita solo este archivo para cambiar nombres, fecha o versículos
// ============================================================

const DATA = {
    // Sube este número cada vez que cambies datos (para verificar en el footer)
    version: "1.0.0",

    // Próximo lunes = Brian. Desde aquí rota: Gabriel, Freddy, Roger, Minor Díaz...
    // Debe ser un LUNES en formato YYYY-MM-DD
    fechaInicio: "2026-10-26",

    // Lista de nombres en orden de rotación
    nombres: ["Brian", "Gabriel", "Freddy", "Roger", "Minor Díaz"],

    // Hora de la reunión (formato 24h)
    hora: "19:00",
    horaTexto: "7:00 pm",

    // Nombre del grupo (aparece en el mensaje copiado)
    grupo: "Camp. Monteverde",

    // Versículos: se muestra uno al azar en cada visita
    versiculos: [
        { texto: "Y todo lo que hagáis, hacedlo de corazón, como para el Señor y no para los hombres.", ref: "Colosenses 3:23" },
        { texto: "Orad sin cesar.", ref: "1 Tesalonicenses 5:17" },
        { texto: "Por nada estéis afanosos, sino sean conocidas vuestras peticiones delante de Dios en toda oración y ruego, con acción de gracias.", ref: "Filipenses 4:6" },
        { texto: "Mira que te mando que te esfuerces y seas valiente; no temas ni desmayes, porque Jehová tu Dios estará contigo en dondequiera que vayas.", ref: "Josué 1:9" },
        { texto: "Encomienda a Jehová tu camino, y confía en él; y él hará.", ref: "Salmos 37:5" },
        { texto: "Mas buscad primeramente el reino de Dios y su justicia, y todas estas cosas os serán añadidas.", ref: "Mateo 6:33" },
        { texto: "Gozosos en la esperanza; sufridos en la tribulación; constantes en la oración.", ref: "Romanos 12:12" },
        { texto: "Estad siempre gozosos. Orad sin cesar. Dad gracias en todo, porque esta es la voluntad de Dios para con vosotros en Cristo Jesús.", ref: "1 Tesalonicenses 5:16-18" },
        { texto: "Jehová es mi pastor; nada me faltará.", ref: "Salmos 23:1" },
        { texto: "Esforzaos y cobrad ánimo; no temáis, ni tengáis miedo de ellos, porque Jehová tu Dios es el que va contigo; no te dejará, ni te desamparará.", ref: "Deuteronomio 31:6" },
        { texto: "Cercano está Jehová a todos los que le invocan, a todos los que le invocan de veras.", ref: "Salmos 145:18" },
        { texto: "Y esta es la confianza que tenemos en él, que si pedimos alguna cosa conforme a su voluntad, él nos oye.", ref: "1 Juan 5:14" },
        { texto: "Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos.", ref: "Mateo 18:20" },
        { texto: "Velad y orad, para que no entréis en tentación; el espíritu a la verdad está dispuesto, pero la carne es débil.", ref: "Mateo 26:41" },
        { texto: "Aclama al Señor, toda la tierra. Servid a Jehová con alegría; venid ante su presencia con regocijo.", ref: "Salmos 100:1-2" }
    ]
};