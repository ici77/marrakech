import type { MarrakechRestaurant, RestaurantCategory, RestaurantRole } from '../types/travel';

type Seed = [string, string, string, RestaurantCategory[], RestaurantRole, string[], string[], string, string];
const slug = (name:string) => `restaurant-${name.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'')}`;
const rows: Seed[] = [
['Café des Épices','Medina central','35–50 € / 5',['terraza','cafeteria'],'primera_opcion',['19-diciembre'],['rahba'],'Terraza junto a los zocos para una primera pausa en la medina.','Rahba Kedima'],
['Kafé Merstan','Medina central','Pendiente',['economico','cafeteria'],'alternativa',['19-diciembre'],['rahba'],'Alternativa anotada para comer cerca del recorrido inicial.','Medina y zocos'],
['Café Babouche','Medina sur','Pendiente',['economico','cafeteria'],'alternativa',['20-diciembre'],['koutoubia','bab-agnaou'],'Opción cercana para la jornada de palacios y Kasbah.','Kasbah'],
['Dabachi Chez Cherif','Jemaa el-Fna','Pendiente',['tradicional','economico'],'opcional',['19-diciembre'],['jemaa'],'Parada local incluida entre las opciones de la zona de Jemaa el-Fna.','Plaza y medina'],
['Chez Hicham','Medina central','Pendiente',['tradicional','economico'],'opcional',['19-diciembre'],['rahba'],'Alternativa documentada para la medina central.','Medina'],
['Coco Rooftop','Jemaa el-Fna','≈159 € / 5',['terraza','internacional'],'terraza',['19-diciembre'],['jemaa'],'Terraza planteada para tomar algo al atardecer tras los zocos.','Atardecer'],
['Amornakoch','Marrakech','Pendiente',['tradicional'],'opcional',[],[],'Establecimiento anotado en el documento sin zona ni precio concretos.','Por verificar'],
['Dar Essalam','Medina sur','142,90 € / 5',['tradicional','premium'],'reservado',['19-diciembre'],['jemaa'],'Cena prevista para la primera noche; las bebidas van aparte.','Cena marroquí'],
['La Fontaine des Épices','Medina norte','175 € / 5',['terraza','tradicional'],'reservado',['22-diciembre'],['dar-el-bacha','jardin-secret'],'Mesa prevista tras Dar El Bacha, antes de Le Jardin Secret.','Medina norte'],
['Bacha Coffee','Medina norte','desde 20 € / 5',['cafeteria','premium'],'cafeteria',['22-diciembre'],['dar-el-bacha'],'Pausa de café vinculada al paso por Dar El Bacha, solo si hay mesa.','Café'],
['L’Mida','Medina central','90–140 € / 5',['premium','terraza'],'opcional',['19-diciembre'],['rahba'],'Alternativa de precio medio-alto para comer en la medina.','Medina'],
['MÖ-MÖ Jemaa el-Fna','Jemaa el-Fna','125–150 € / 5',['internacional','terraza'],'opcional',['19-diciembre'],['jemaa'],'Opción en el entorno inmediato de la plaza.','Jemaa el-Fna'],
['Dar Dar','Jemaa el-Fna','125–200 € / 5',['terraza','internacional'],'terraza',['19-diciembre'],['jemaa'],'Terraza alternativa para la zona de plaza y atardecer.','Atardecer'],
['Kabana','Jemaa el-Fna','200 € / 5',['terraza','premium'],'terraza',['19-diciembre'],['jemaa'],'Opción panorámica de presupuesto alto junto a Jemaa el-Fna.','Vistas de plaza'],
['El Fenn Rooftop','Medina central','120–200 MAD/persona',['terraza','premium'],'terraza',['19-diciembre'],['jemaa'],'Terraza anotada con precio por persona, adecuada para tomar algo.','Atardecer'],
['Le Jardin','Medina norte','80–130 € / 5',['tradicional','terraza'],'alternativa',['21-diciembre','22-diciembre'],['ben-youssef','jardin-secret'],'Alternativa para la medina norte entre Ben Youssef y Le Jardin Secret.','Medina norte'],
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
export const marrakechRestaurants: MarrakechRestaurant[] = rows.map(([name,zone,price,categories,role,recommendedDays,nearbyMonuments,description,specialties]) => ({
  id:slug(name), name, city:'Marrakech', destinationId:'marrakech', zone, price, recommendation:description, categories, role, recommendedDays, nearbyMonuments, description, specialties, cuisine:categories.includes('tradicional')?'Cocina marroquí':'Según carta; comprobar in situ', atmosphere:categories.includes('espectaculo')?'Cena con espectáculo':categories.includes('terraza')?'Terraza / exterior':'Restaurante', terrace:categories.includes('terraza'), ...(categories.includes('terraza') ? {views:'Vistas por verificar según disponibilidad'} : {}), ...(price.includes('/ 5') ? {priceForFive:price,priceKind:name==='Dar Essalam'?'confirmado':'estimado'} : {priceKind:'consumicion'}), reason:description, ...(name==='Dar Essalam'?{reservationId:'dar-essalam',reservationStatus:'confirmed' as const}:{}), ...(name==='La Fontaine des Épices'?{reservationId:'fontaine',reservationStatus:'confirmed' as const}:{}), ...(name==='Chez Ali'?{reservationId:'chez-ali',reservationStatus:'pending_payment' as const}:{}), ...(name==='Nouba'?{reservationId:'nouba',reservationStatus:'pending_confirmation' as const}:{})
}));
export const restaurantCategories: Record<RestaurantCategory,string> = {tradicional:'Cocina tradicional marroquí',economico:'Restaurantes económicos',terraza:'Terrazas panorámicas',premium:'Restaurantes premium',espectaculo:'Cenas con espectáculo',cafeteria:'Cafeterías y pastelerías',rapida:'Comida rápida local',internacional:'Cocina internacional y de fusión'};
