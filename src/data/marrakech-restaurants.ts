import type { MarrakechRestaurant, RestaurantCategory, RestaurantRole } from '../types/travel';

type Seed = [string, string, string, RestaurantCategory[], RestaurantRole, string[], string[], string, string];
const slug = (name:string) => `restaurant-${name.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'')}`;
const rows: Seed[] = [
['Café des Épices','Medina central','35–50 € / 5',['terraza','cafeteria'],'primera_opcion',['19-diciembre'],['rahba'],'Terraza junto a los zocos para una primera pausa en la medina.','Rahba Kedima'],
['Kafé Merstan','Medina norte','Pendiente',['economico','cafeteria'],'primera_opcion',['19-diciembre','20-diciembre','21-diciembre'],['rahba','ben-youssef','museo-marrakech'],'A pocos pasos de Rahba; la web del local también lo sitúa junto a Ben Youssef y el Museo de Marrakech. El 21 es la primera opción antes de salir a Majorelle.','Medina y zocos'],
['Café Babouche','Medina sur','Pendiente',['economico','cafeteria'],'opcional',[],['koutoubia','bab-agnaou'],'Permanece en el catálogo general; no se propone como parada de la ruta actual.','Kasbah'],
['Dabachi Chez Cherif','Medina central','Pendiente',['tradicional','economico'],'primera_opcion',['20-diciembre'],[],'Alternativa prioritaria del 20: encaja mejor con un almuerzo rápido antes de estar listos para la recogida de Agafay.','Cocina local'],
['Chez Hicham','Medina central','Pendiente',['tradicional','economico'],'alternativa',['19-diciembre','20-diciembre'],['rahba'],'Alternativa rápida para el día de llegada y para el 20 si el tiempo antes de Agafay es limitado.','Medina'],
['Coco Rooftop','Jemaa el-Fna','≈159 € / 5',['terraza','internacional'],'terraza',['19-diciembre'],['jemaa'],'Terraza planteada para tomar algo al atardecer tras los zocos.','Atardecer'],
['Amornakoch','Marrakech','Pendiente',['tradicional'],'opcional',[],[],'Establecimiento anotado en el documento sin zona ni precio concretos.','Por verificar'],
['Dar Essalam','Medina sur','142,90 € / 5',['tradicional','premium'],'reservado',['19-diciembre'],['jemaa'],'Cena con espectáculo confirmada a las 20:00; menú con un plato principal y bebidas aparte. Acudir directamente al restaurante.','Cena marroquí y espectáculo'],
['La Fontaine des Épices','Medina norte','175 € / 5',['terraza','tradicional'],'reservado',['22-diciembre'],['dar-el-bacha','jardin-secret'],'Mesa prevista tras Dar El Bacha, antes de Le Jardin Secret.','Medina norte'],
['Bacha Coffee','Medina norte','desde 20 € / 5',['cafeteria','premium'],'cafeteria',['22-diciembre'],['dar-el-bacha'],'Pausa de café vinculada al paso por Dar El Bacha, solo si hay mesa.','Café'],
['L’Mida','Medina central','90–140 € / 5',['premium','terraza'],'opcional',['19-diciembre'],['rahba'],'Alternativa de precio medio-alto para comer en la medina.','Medina'],
['MÖ-MÖ Jemaa el-Fna','Jemaa el-Fna','125–150 € / 5',['internacional','terraza'],'opcional',['19-diciembre'],['jemaa'],'Opción en el entorno inmediato de la plaza.','Jemaa el-Fna'],
['Dar Dar','Jemaa el-Fna','125–200 € / 5',['terraza','internacional'],'terraza',['19-diciembre'],['jemaa'],'Terraza alternativa para la zona de plaza y atardecer.','Atardecer'],
['Kabana','Jemaa el-Fna','200 € / 5',['terraza','premium'],'terraza',['19-diciembre'],['jemaa'],'Opción panorámica de presupuesto alto junto a Jemaa el-Fna.','Vistas de plaza'],
['El Fenn Rooftop','Medina central','120–200 MAD/persona',['terraza','premium'],'terraza',['19-diciembre'],['jemaa'],'Terraza anotada con precio por persona, adecuada para tomar algo.','Atardecer'],
['Le Jardin','Medina norte','80–130 € / 5',['tradicional','terraza'],'alternativa',['21-diciembre'],['ben-youssef','jardin-secret'],'Alternativa para el almuerzo del 21 si está abierto, entre Ben Youssef y la salida hacia Majorelle.','Medina norte'],
['1112 Marrakech','Medina norte','≈50 € / 5',['economico','cafeteria'],'alternativa',['21-diciembre'],['ben-youssef'],'Opción de coste contenido para el recorrido de Ben Youssef.','Medina norte'],
['Naranj','Kasbah y Mellah','90–140 € / 5',['internacional','premium'],'alternativa',['22-diciembre'],['mellah','el-badi'],'Alternativa cercana a Mellah y palacios de la jornada del 22.','Mellah'],
['Zeitoun Café','Jemaa el-Fna','Pendiente',['cafeteria','terraza'],'terraza',['19-diciembre'],['jemaa'],'Cafetería anotada en el entorno de Jemaa el-Fna.','Plaza'],
['Taj’in Darna','Medina central','75 € / 5',['tradicional'],'opcional',['19-diciembre'],['rahba'],'Propuesta de cocina marroquí en la medina central.','Tajín'],
['El Bahja','Jemaa el-Fna','Pendiente',['tradicional','economico'],'opcional',['19-diciembre'],['jemaa'],'Opción local incluida para el área de la plaza.','Jemaa el-Fna'],
['La Pergola','Medina central','Pendiente',['terraza','internacional'],'terraza',['19-diciembre'],['jemaa'],'Terraza anotada para una pausa en la medina.','Atardecer'],
['Le Grand Café de la Poste','Guéliz','125–200 € / 5',['internacional','premium'],'opcional',['21-diciembre'],['majorelle'],'Alternativa en Guéliz tras la visita a Majorelle.','Guéliz'],
['La Trattoria','Guéliz','150–225 € / 5',['internacional','premium'],'opcional',['21-diciembre'],['majorelle'],'Opción internacional de presupuesto alto para Guéliz.','Guéliz'],
['Chez Ali','Palmeraie','225 € / 5',['espectaculo','tradicional'],'reservado',['21-diciembre'],[],'Cena-espectáculo prevista; la recogida continúa pendiente de confirmar.','Cena con espectáculo'],
['Nouba','Marrakech','231,55 € / 5',['espectaculo','premium'],'reservado',['22-diciembre'],[],'Cena y espectáculo previstos; bono y condiciones siguen por verificar.','Cena con espectáculo'],
['Palais Sebban','Medina sur','Pendiente',['terraza','premium'],'opcional',['22-diciembre'],['el-badi','mellah'],'Parada opcional si hay margen en la medina sur.','Medina sur']
];
const verified: Record<string, Partial<MarrakechRestaurant>> = {
  'restaurant-kafe-merstan': { cuisine:'Marroquí y mediterránea', address:'Medina, junto a Ben Youssef y Museo de Marrakech', website:'https://www.kafemerstan.com/en', priceSource:'https://www.kafemerstan.com/en', priceCheckedAt:'noviembre de 2026' },
  'restaurant-coco-rooftop': { cuisine:'Internacional y cócteles', address:'Rue Arset Lmaach, Medina', website:'https://www.coco-marrakech.com/', priceSource:'https://www.coco-marrakech.com/', priceCheckedAt:'noviembre de 2026' },
  'restaurant-la-fontaine-des-epices': { cuisine:'Marroquí contemporánea', address:'131 rue Mouassine, junto a Le Jardin Secret', website:'https://lafontainedesepices.com/', menu:'https://lafontainedesepices.com/', priceSource:'https://lafontainedesepices.com/', priceCheckedAt:'noviembre de 2026' },
  'restaurant-amornakoch': { cuisine:'Cocina marroquí', website:'https://amornakoch.com/', priceSource:'https://amornakoch.com/', priceCheckedAt:'noviembre de 2026' },
  'restaurant-dar-essalam': { cuisine:'Cocina marroquí tradicional', priceSource:'Reserva del viaje', priceCheckedAt:'noviembre de 2026' },
  'restaurant-chez-ali': { cuisine:'Cena marroquí con espectáculo', priceSource:'Reserva del viaje', priceCheckedAt:'noviembre de 2026' },
  'restaurant-nouba': { cuisine:'Cena y espectáculo', priceSource:'Reserva del viaje', priceCheckedAt:'noviembre de 2026' },
  'restaurant-bacha-coffee': { cuisine:'Café, té y repostería', address:'Dar El Bacha, Medina' },
  'restaurant-le-grand-cafe-de-la-poste': { cuisine:'Brasserie francesa e internacional', address:'Guéliz' },
  'restaurant-la-trattoria': { cuisine:'Cocina italiana', address:'Guéliz' },
  'restaurant-naranj': { cuisine:'Cocina levantina', address:'Mellah' },
  'restaurant-le-jardin': { cuisine:'Marroquí e internacional', address:'Medina norte' },
  'restaurant-cafe-des-epices': { cuisine:'Cafetería y cocina marroquí', address:'Rahba Kedima, Medina' },
  'restaurant-chez-hicham': { cuisine:'Cocina marroquí', address:'Medina central' },
  'restaurant-dabachi-chez-cherif': { cuisine:'Cocina marroquí local', address:'Medina central' },
  'restaurant-1112-marrakech': { cuisine:'Cafetería y cocina local', address:'Medina norte' },
  'restaurant-el-fenn-rooftop': { cuisine:'Cocina internacional y cócteles', address:'Medina central' },
  'restaurant-kabana': { cuisine:'Internacional y cócteles', address:'Entorno de Jemaa el-Fna' },
  'restaurant-dar-dar': { cuisine:'Internacional y cócteles', address:'Entorno de Jemaa el-Fna' },
  'restaurant-mo-mo-jemaa-el-fna': { cuisine:'Internacional', address:'Jemaa el-Fna' },
  'restaurant-zeitoun-cafe': { cuisine:'Cafetería y cocina marroquí', address:'Jemaa el-Fna' },
  'restaurant-taj-in-darna': { cuisine:'Cocina marroquí', address:'Medina central' },
  'restaurant-el-bahja': { cuisine:'Cocina marroquí', address:'Jemaa el-Fna' },
  'restaurant-la-pergola': { cuisine:'Terraza y cocina internacional', address:'Medina central' },
  'restaurant-palais-sebban': { cuisine:'Cocina marroquí y terraza', address:'Medina sur' },
  'restaurant-cafe-babouche': { cuisine:'Cafetería y cocina local', address:'Kasbah' },
  'restaurant-l-mida': { cuisine:'Marroquí contemporánea', address:'Medina central' }
};
export const marrakechRestaurants: MarrakechRestaurant[] = rows.map(([name,zone,price,categories,role,recommendedDays,nearbyMonuments,description,specialties]) => ({
  id:slug(name), name, city:'Marrakech', destinationId:'marrakech', zone, price, recommendation:description, categories, role, recommendedDays, nearbyMonuments, description, specialties, cuisine:categories.includes('tradicional')?'Cocina marroquí':'Según carta; comprobar in situ', atmosphere:categories.includes('espectaculo')?'Cena con espectáculo':categories.includes('terraza')?'Terraza / exterior':'Restaurante', terrace:categories.includes('terraza'), ...(categories.includes('terraza') ? {views:'Vistas por verificar según disponibilidad'} : {}), ...(price.includes('/ 5') ? {priceForFive:price,priceKind:name==='Dar Essalam'?'confirmado':'estimado'} : {priceKind:'consumicion'}), reason:description, maps:`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${name}, Marrakech`)}`, ...(name==='Dar Essalam'?{reservationId:'dar-essalam',reservationStatus:'confirmed' as const}:{}), ...(name==='La Fontaine des Épices'?{reservationId:'fontaine',reservationStatus:'confirmed' as const}:{}), ...(name==='Chez Ali'?{reservationId:'chez-ali',reservationStatus:'pending_payment' as const}:{}), ...(name==='Nouba'?{reservationId:'nouba',reservationStatus:'pending_confirmation' as const}:{}), ...verified[slug(name)]
}));
export const restaurantCategories: Record<RestaurantCategory,string> = {tradicional:'Cocina tradicional marroquí',economico:'Restaurantes económicos',terraza:'Terrazas panorámicas',premium:'Restaurantes premium',espectaculo:'Cenas con espectáculo',cafeteria:'Cafeterías y pastelerías',rapida:'Comida rápida local',internacional:'Cocina internacional y de fusión'};
