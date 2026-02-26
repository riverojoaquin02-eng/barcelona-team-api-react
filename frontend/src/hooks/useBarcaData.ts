import { useState, useEffect } from 'react';
import {
  ClubInfo,
  Jugador,
  Trofeo,
  EstadisticasTemporada,
  Estadio,
  Entrenador,
  Historia,
  getClubInfo,
  getJugadores,
  getJugadorById,
  getTrofeos,
  getEstadisticas,
  getEstadio,
  getEntrenador,
  getHistoria
} from '../data/barcaData';

// Hook para obtener toda la información del club
export const useClubInfo = () => {
  const [data, setData] = useState<ClubInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getClubInfo();
        setData(result);
      } catch (err) {
        setError('Error al cargar la información del club');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

// Hook para obtener todos los jugadores
export const useJugadores = () => {
  const [data, setData] = useState<Jugador[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getJugadores();
        setData(result);
      } catch (err) {
        setError('Error al cargar los jugadores');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

// Hook para obtener un jugador específico
export const useJugador = (id: number) => {
  const [data, setData] = useState<Jugador | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getJugadorById(id);
        if (result) {
          setData(result);
        } else {
          setError('Jugador no encontrado');
        }
      } catch (err) {
        setError('Error al cargar el jugador');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { data, loading, error };
};

// Hook para obtener los trofeos
export const useTrofeos = () => {
  const [data, setData] = useState<Trofeo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getTrofeos();
        setData(result);
      } catch (err) {
        setError('Error al cargar los trofeos');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

// Hook para obtener estadísticas
export const useEstadisticas = () => {
  const [data, setData] = useState<EstadisticasTemporada | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getEstadisticas();
        setData(result);
      } catch (err) {
        setError('Error al cargar las estadísticas');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

// Hook para obtener información del estadio
export const useEstadio = () => {
  const [data, setData] = useState<Estadio | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getEstadio();
        setData(result);
      } catch (err) {
        setError('Error al cargar la información del estadio');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

// Hook para obtener información del entrenador
export const useEntrenador = () => {
  const [data, setData] = useState<Entrenador | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getEntrenador();
        setData(result);
      } catch (err) {
        setError('Error al cargar la información del entrenador');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

// Hook para obtener la historia
export const useHistoria = () => {
  const [data, setData] = useState<Historia | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getHistoria();
        setData(result);
      } catch (err) {
        setError('Error al cargar la historia');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

// Hook para filtrar jugadores
export const useFilteredJugadores = (posicionFilter: string, searchTerm: string) => {
  const { data: jugadores, loading, error } = useJugadores();
  const [filtered, setFiltered] = useState<Jugador[]>([]);

  useEffect(() => {
    if (jugadores) {
      let result = jugadores;

      if (posicionFilter !== 'Todos') {
        result = result.filter(j =>
          j.posicion.toLowerCase().includes(posicionFilter.toLowerCase())
        );
      }

      if (searchTerm) {
        result = result.filter(j =>
          `${j.nombre} ${j.apellido}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
          j.posicion.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      setFiltered(result);
    }
  }, [jugadores, posicionFilter, searchTerm]);

  return { data: filtered, loading, error };
};
