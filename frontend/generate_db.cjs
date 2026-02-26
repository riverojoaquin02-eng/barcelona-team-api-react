const fs = require('fs');

const barcelonaData = {
    nombre_completo: "Fútbol Club Barcelona",
    nombre_corto: "FC Barcelona",
    apodo: "Barça, Blaugrana, Culés",
    fundacion: "29 de noviembre de 1899",
    presidente: "Joan Laporta",
    vicepresidente: "Rafa Yuste",
    estadio: {
        nombre: "Spotify Camp Nou",
        capacidad: "99.354 espectadores",
        inauguracion: "24 de septiembre de 1957",
        dimensiones: "105m x 68m",
        propietario: "Fútbol Club Barcelona",
        direccion: "C. d'Arístides Maillol, 12, 08028 Barcelona",
        historia: "El Camp Nou es el estadio más grande de Europa y uno de los más emblemáticos del mundo. Ha sido testigo de innumerables momentos históricos del club, desde las 5 Copas de Europa hasta las épicas remontadas.",
        reformas: [
            "1982: Ampliación para el Mundial de España",
            "1994: Instalación de nueva iluminación",
            "2008: Renovación de asientos",
            "2023-2026: Reforma integral 'Espai Barça'"
        ],
        records: {
            asistencia_record: "120.000 espectadores",
            fecha_record: "5 de marzo de 1986",
            partidos_jugados: 3000
        }
    },
    entrenador: {
        nombre: "Hansi Flick",
        nacionalidad: "Alemana",
        edad: 59,
        formacion_preferida: "4-2-3-1 / 4-3-3",
        desde: "29 de mayo de 2024",
        biografia: "Hansi Flick es uno de los entrenadores más exitosos de la última década. Tras una brillante carrera como asistente y entrenador, llevó al Bayern Munich a ganar el sextete histórico en 2020.",
        carrera: [
            "2000-2005: Asistente en Austria Salzburgo",
            "2006-2014: Asistente de la selección alemana",
            "2019-2021: Entrenador del Bayern Munich",
            "2021-2023: Seleccionador de Alemania",
            "2024-presente: FC Barcelona"
        ],
        titulos_ganados: 18
    },
    historia: {
        fundacion: "29 de noviembre de 1899",
        fundadores: ["Joan Gamper", "Gualteri Wild", "Lluís d'Ossó", "Bartomeu Terradas", "Otto Kunzle"],
        lema: "Més que un club",
        colores: ["Azul", "Granate"],
        himno: "Cant del Barça",
        presidentes_notables: [
            "Joan Gamper (fundador)",
            "Josep Lluís Núñez (1978-2000)",
            "Joan Laporta"
        ],
        momentos_historicos: [
            { anio: 1902, titulo: "Primera final", descripcion: "Llega por primera vez a la final" },
            { anio: 1992, titulo: "Primera Copa", descripcion: "Wembley, Koeman" },
            { anio: 2009, titulo: "Sextete", descripcion: "Guardiola conquista los 6 títulos" }
        ],
        leyendas: ["Lionel Messi", "Johan Cruyff", "Andrés Iniesta", "Xavi Hernández", "Ronaldinho", "Carles Puyol"],
        records_club: {
            maxima_goleada: "Barcelona 10-1",
            mas_partidos: "Lionel Messi - 778 partidos",
            maximo_goleador: "Lionel Messi - 672 goles",
            mas_titulos: "Lionel Messi - 35 títulos"
        }
    },
    estadisticas_actuales: {
        temporada: "2024-2025",
        liga: {
            posicion: 1,
            puntos: 38,
            partidos_jugados: 16,
            ganados: 12,
            empatados: 2,
            perdidos: 2,
            goles_favor: 50,
            goles_contra: 18,
            diferencia_goles: 32
        },
        champions: {
            fase: "Fase de Liga",
            partidos_jugados: 6,
            ganados: 4,
            empatados: 1,
            perdidos: 1,
            goles_favor: 18,
            goles_contra: 8
        },
        copa_rey: {
            fase: "Octavos de final",
            resultado: "En disputa"
        }
    },
    trofeos: [
        {
            id: 1,
            nombre: "Liga Española",
            cantidad: 27,
            imagen: "🏆",
            descripcion: "Campeonato de Liga",
            ultimo_ganado: "2022-2023",
            anios_ganados: ["1929", "2023"]
        },
        {
            id: 2,
            nombre: "Champions League",
            cantidad: 5,
            imagen: "🏆",
            descripcion: "Liga de Campeones",
            ultimo_ganado: "2014-2015",
            anios_ganados: ["1992", "2006", "2009", "2011", "2015"]
        }
    ],
    jugadores: [
        {
            id: 1,
            nombre: "Marc-André",
            apellido: "ter Stegen",
            dorsal: 1,
            posicion: "Portero",
            nacionalidad: "Alemana",
            edad: 32,
            altura: "1.87m",
            peso: "85kg",
            foto: "ter_stegen",
            biografia: "Llegó al Barcelona en 2014...",
            estadisticas: { partidos: 420, goles: 0, asistencias: 3, tarjetas_amarillas: 12, tarjetas_rojas: 0 },
            palmares: ["2 Champions League"],
            fecha_nacimiento: "30 de abril de 1992",
            lugar_nacimiento: "Alemania",
            debut: "24 de septiembre de 2014",
            valor_mercado: "€25M"
        },
        {
            id: 9,
            nombre: "Lamine",
            apellido: "Yamal",
            dorsal: 19,
            posicion: "Extremo Derecho",
            nacionalidad: "Española",
            edad: 17,
            altura: "1.78m",
            peso: "72kg",
            foto: "lamine",
            biografia: "La gran sensación...",
            estadisticas: { partidos: 75, goles: 18, asistencias: 22, tarjetas_amarillas: 8, tarjetas_rojas: 0 },
            palmares: ["1 Liga española"],
            fecha_nacimiento: "13 de julio de 2007",
            lugar_nacimiento: "España",
            debut: "29 de abril de 2023",
            valor_mercado: "€150M"
        },
        {
            id: 11,
            nombre: "Robert",
            apellido: "Lewandowski",
            dorsal: 9,
            posicion: "Delantero Centro",
            nacionalidad: "Polaca",
            edad: 36,
            altura: "1.85m",
            peso: "81kg",
            foto: "lewandowski",
            biografia: "Considerado uno de los mejores...",
            estadisticas: { partidos: 110, goles: 75, asistencias: 18, tarjetas_amarillas: 12, tarjetas_rojas: 0 },
            palmares: ["1 Liga española"],
            fecha_nacimiento: "21 de agosto de 1988",
            lugar_nacimiento: "Polonia",
            debut: "13 de agosto de 2022",
            valor_mercado: "€15M"
        }
    ],
    cantera: {
        nombre: "La Masia",
        descripcion: "Famosa academia juvenil del FC Barcelona.",
        jugadores_famosos: ["Lionel Messi", "Xavi", "Iniesta"],
        filosofia: "Posesión y juego ofensivo"
    },
    filiales: [
        { nombre: "Barça Atlètic", categoria: "Primera Federación", estadio: "Estadi Johan Cruyff" }
    ],
    valores: ["Respeto", "Esfuerzo", "Ambición", "Trabajo en equipo", "Humildad"],
    socios: "144.000",
    seguidores_redes: { instagram: "122M", twitter: "47M", facebook: "112M", tiktok: "30M", youtube: "15M" },
    patrocinadores: { principal: "Spotify", equipacion: "Nike", otros: ["Estrella Damm"] },
    presupuesto: "859 millones de euros",
    valor_equipo: "4.76 mil millones de dólares",
    web_oficial: "https://www.fcbarcelona.es"
};

const db = {
    clubInfo: barcelonaData,
    jugadores: barcelonaData.jugadores,
    trofeos: barcelonaData.trofeos,
    estadisticas: barcelonaData.estadisticas_actuales,
    estadio: barcelonaData.estadio,
    entrenador: barcelonaData.entrenador,
    historia: barcelonaData.historia
};

fs.writeFileSync('./api/db.json', JSON.stringify(db, null, 2));
console.log('Database generated!');
