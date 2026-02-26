// Interfaces de datos para el FC Barcelona

export interface Jugador {
  id: number;
  nombre: string;
  apellido: string;
  dorsal: number;
  posicion: string;
  nacionalidad: string;
  edad: number;
  altura: string;
  peso: string;
  foto: string;
  biografia: string;
  estadisticas: {
    partidos: number;
    goles: number;
    asistencias: number;
    tarjetas_amarillas: number;
    tarjetas_rojas: number;
  };
  palmares: string[];
  fecha_nacimiento: string;
  lugar_nacimiento: string;
  debut: string;
  valor_mercado: string;
}

export interface Trofeo {
  id: number;
  nombre: string;
  cantidad: number;
  imagen: string;
  descripcion: string;
  ultimo_ganado: string;
  anios_ganados: string[];
}

export interface Estadio {
  nombre: string;
  capacidad: string;
  inauguracion: string;
  dimensiones: string;
  propietario: string;
  direccion: string;
  historia: string;
  reformas: string[];
  records: {
    asistencia_record: string;
    fecha_record: string;
    partidos_jugados: number;
  };
}

export interface Entrenador {
  nombre: string;
  nacionalidad: string;
  edad: number;
  formacion_preferida: string;
  desde: string;
  biografia: string;
  carrera: string[];
  titulos_ganados: number;
}

export interface Historia {
  fundacion: string;
  fundadores: string[];
  lema: string;
  colores: string[];
  himno: string;
  presidentes_notables: string[];
  momentos_historicos: {
    anio: number;
    titulo: string;
    descripcion: string;
  }[];
  leyendas: string[];
  records_club: {
    maxima_goleada: string;
    mas_partidos: string;
    maximo_goleador: string;
    mas_titulos: string;
  };
}

export interface EstadisticasTemporada {
  temporada: string;
  liga: {
    posicion: number;
    puntos: number;
    partidos_jugados: number;
    ganados: number;
    empatados: number;
    perdidos: number;
    goles_favor: number;
    goles_contra: number;
    diferencia_goles: number;
  };
  champions: {
    fase: string;
    partidos_jugados: number;
    ganados: number;
    empatados: number;
    perdidos: number;
    goles_favor: number;
    goles_contra: number;
  };
  copa_rey: {
    fase: string;
    resultado: string;
  };
}

export interface ClubInfo {
  nombre_completo: string;
  nombre_corto: string;
  apodo: string;
  fundacion: string;
  presidente: string;
  vicepresidente: string;
  estadio: Estadio;
  entrenador: Entrenador;
  historia: Historia;
  estadisticas_actuales: EstadisticasTemporada;
  trofeos: Trofeo[];
  jugadores: Jugador[];
  cantera: {
    nombre: string;
    descripcion: string;
    jugadores_famosos: string[];
    filosofia: string;
  };
  filiales: {
    nombre: string;
    categoria: string;
    estadio: string;
  }[];
  valores: string[];
  socios: string;
  seguidores_redes: {
    instagram: string;
    twitter: string;
    facebook: string;
    tiktok: string;
    youtube: string;
  };
  patrocinadores: {
    principal: string;
    equipacion: string;
    otros: string[];
  };
  presupuesto: string;
  valor_equipo: string;
  web_oficial: string;
}

// REST API calls to FastAPI backend
const API_URL = 'http://localhost:8001/api';

export const getClubInfo = async (): Promise<ClubInfo> => {
  const response = await fetch(`${API_URL}/club-info`);
  if (!response.ok) throw new Error('Error fetching club info');
  return response.json();
};

export const getJugadores = async (): Promise<Jugador[]> => {
  const response = await fetch(`${API_URL}/jugadores`);
  if (!response.ok) throw new Error('Error fetching jugadores');
  return response.json();
};

export const getJugadorById = async (id: number): Promise<Jugador | undefined> => {
  const response = await fetch(`${API_URL}/jugadores/${id}`);
  if (!response.ok) throw new Error('Error fetching jugador');
  return response.json();
};

export const getTrofeos = async (): Promise<Trofeo[]> => {
  const response = await fetch(`${API_URL}/trofeos`);
  if (!response.ok) throw new Error('Error fetching trofeos');
  return response.json();
};

export const getEstadisticas = async (): Promise<EstadisticasTemporada> => {
  const response = await fetch(`${API_URL}/estadisticas`);
  if (!response.ok) throw new Error('Error fetching estadisticas');
  return response.json();
};

export const getEstadio = async (): Promise<Estadio> => {
  const response = await fetch(`${API_URL}/estadio`);
  if (!response.ok) throw new Error('Error fetching estadio');
  return response.json();
};

export const getEntrenador = async (): Promise<Entrenador> => {
  const response = await fetch(`${API_URL}/entrenador`);
  if (!response.ok) throw new Error('Error fetching entrenador');
  return response.json();
};

export const getHistoria = async (): Promise<Historia> => {
  const response = await fetch(`${API_URL}/historia`);
  if (!response.ok) throw new Error('Error fetching historia');
  return response.json();
};
