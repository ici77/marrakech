export interface ItineraryImage {
  url: string;
  description: string;
  author: string;
  source: string;
  license: string;
  licenseUrl: string;
}

const by = (version: string) => `https://creativecommons.org/licenses/by/${version}/`;
const bySa = (version: string) => `https://creativecommons.org/licenses/by-sa/${version}/`;

export const itineraryImages: Record<string, ItineraryImage> = {
  '19-diciembre': { url: '/images/itinerario/19.jpg', description: 'La plaza Jemaa el-Fna al atardecer', author: 'Herokk', source: 'https://commons.wikimedia.org/wiki/File:Jemaa_el-Fnaa_Marrakech_at_sunset.jpg', license: 'CC BY-SA 4.0', licenseUrl: bySa('4.0') },
  '20-diciembre': { url: '/images/itinerario/20.jpg', description: 'Patio del Palacio de la Bahía', author: 'Val Traveler', source: 'https://commons.wikimedia.org/wiki/File:Bahia_Palace_large_court.jpg', license: 'CC BY-SA 4.0', licenseUrl: bySa('4.0') },
  '21-diciembre': { url: '/images/itinerario/21.jpg', description: 'Jardín Majorelle en Marrakech', author: 'Viault', source: 'https://commons.wikimedia.org/wiki/File:Le_jardin_des_majorelle_16.JPG', license: 'CC BY-SA 4.0', licenseUrl: bySa('4.0') },
  '22-diciembre': { url: '/images/itinerario/22.jpg', description: 'Palacio El Badi en Marrakech', author: 'Jakub Hałun', source: 'https://commons.wikimedia.org/wiki/File:El_Badi_Palace,_Marrakesh,_Morocco,_20250125_0946_7103.jpg', license: 'CC BY 4.0', licenseUrl: by('4.0') },
  '23-diciembre': { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/A%C3%AFt_Benhaddou_%28panorama%29.jpg/1280px-A%C3%AFt_Benhaddou_%28panorama%29.jpg', description: 'Panorámica de Aït Ben Haddou', author: 'Виктор Пинчук', source: 'https://commons.wikimedia.org/wiki/File:A%C3%AFt_Benhaddou_(panorama).jpg', license: 'CC BY 4.0', licenseUrl: by('4.0') },
  '24-diciembre': { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Dades_Valley_-_panoramio.jpg/1280px-Dades_Valley_-_panoramio.jpg', description: 'Paisaje del valle del Dades', author: 'Angela Stefanoni', source: 'https://commons.wikimedia.org/wiki/File:Dades_Valley_-_panoramio.jpg', license: 'CC BY 3.0', licenseUrl: by('3.0') },
  '25-diciembre': { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Todra_Gorge_-_panoramio.jpg/1280px-Todra_Gorge_-_panoramio.jpg', description: 'Gargantas del Todra', author: 'Angela Stefanoni', source: 'https://commons.wikimedia.org/wiki/File:Todra_Gorge_-_panoramio.jpg', license: 'CC BY 3.0', licenseUrl: by('3.0') },
  '26-diciembre': { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Erg_Chebbi_sunset.jpg/1280px-Erg_Chebbi_sunset.jpg', description: 'Atardecer en las dunas de Erg Chebbi', author: 'Thomas Fuhrmann', source: 'https://commons.wikimedia.org/wiki/File:Erg_Chebbi_sunset.jpg', license: 'CC BY-SA 4.0', licenseUrl: bySa('4.0') },
  '27-diciembre': { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Ziz_Valley_Ziz_River_Morocco_-_panoramio.jpg/1280px-Ziz_Valley_Ziz_River_Morocco_-_panoramio.jpg', description: 'Valle y río Ziz', author: 'Hiroki Ogawa', source: 'https://commons.wikimedia.org/wiki/File:Ziz_Valley_Ziz_River_Morocco_-_panoramio.jpg', license: 'CC BY 3.0', licenseUrl: by('3.0') },
  '28-diciembre': { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Panorama_of_Street_Scene_-_Medina_%28Old_City%29_-_Fez_-_Morocco.jpg/1280px-Panorama_of_Street_Scene_-_Medina_%28Old_City%29_-_Fez_-_Morocco.jpg', description: 'Una calle de la medina de Fez', author: 'Adam Jones, Ph.D.', source: 'https://commons.wikimedia.org/wiki/File:Panorama_of_Street_Scene_-_Medina_(Old_City)_-_Fez_-_Morocco.jpg', license: 'CC BY-SA 3.0', licenseUrl: bySa('3.0') },
  '29-diciembre': { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/2018_01_%28Blue%29_-_Chaouen.jpg/1280px-2018_01_%28Blue%29_-_Chaouen.jpg', description: 'Arquitectura azul de Chefchaouen', author: 'Fbrandao.1963', source: 'https://commons.wikimedia.org/wiki/File:2018_01_(Blue)_-_Chaouen.jpg', license: 'CC BY-SA 4.0', licenseUrl: bySa('4.0') },
  '30-diciembre': { url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Tetouan%2C_near_the_Medina_and_Qasba.jpg/1280px-Tetouan%2C_near_the_Medina_and_Qasba.jpg', description: 'Tetuán, cerca de la medina y la kasbah', author: 'Ideophagous', source: 'https://commons.wikimedia.org/wiki/File:Tetouan,_near_the_Medina_and_Qasba.jpg', license: 'CC BY-SA 4.0', licenseUrl: bySa('4.0') }
};
