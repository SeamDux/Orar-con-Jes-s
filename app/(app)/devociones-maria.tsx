import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { Stack, useRouter } from 'expo-router';

interface Devocion {
  id: string;
  titulo: string;
  texto: string;
  ruta?: string;
}

const devociones: Devocion[] = [
  {
    id: 'santo-rosario',
    titulo: 'Santo Rosario',
    texto: '[TITULO]El Santo Rosario[/TITULO]\n\nEl Santo Rosario es una devoción muy antigua. "La piedad medieval de Occidente desarrolló la oración del Rosario, en sustitución de la Oración de las Horas". Es una meditación de la vida de Jesucristo y de la Virgen María. "La oración cristiana se aplica preferentemente a meditar "los misterios de Cristo", como (...) en el Rosario. La meditación hace intervenir el pensamiento, la imaginación, la emoción y el deseo. Esta movilización es necesaria para profundizar en las convicciones de fe, suscitar la conversión del corazón y fortalecer la voluntad de seguir a Cristo".\n\nLa meditación de estos misterios conduce a la contemplación, pues, como dice el Catecismo de la Iglesia Católica: "Esta forma de reflexión orante es de gran valor, pero la oración cristiana debe ir más lejos: hacia el conocimiento del amor del Señor Jesús, a la unión con Él". (CEC 2678, 2708).\n\nEl Rosario está dividido en cuatro partes y cada parte en cinco misterios. En cada misterio se recitan un Padrenuestro, una decena de Avemarías y un Gloria. Una costumbre piadosa es rezar diariamente en familia una cuarta parte del Santo Rosario (es decir, cinco misterios).\n\n"El Rosario es la oración que acompaña siempre mi vida; también es la oración de los sencillos y de los santos... es la oración de mi corazón" (Papa Francisco).\n\n[TITULO]Cómo se reza[/TITULO]\n\nPor la señal de la santa Cruz...\n\n[TITULO]Acto de contrición[/TITULO]\n\n¡Señor mío, Jesucristo! Dios y Hombre verdadero, Creador, Padre y Redentor mío; por ser Vos quien sois, Bondad infinita, y porque os amo sobre todas las cosas, me pesa de todo corazón de haberos ofendido; también me pesa porque podéis castigarme con las penas del infierno. Ayudado de vuestra divina gracia, propongo firmemente nunca más pecar, confesarme y cumplir la penitencia que me fuere impuesta. Amén.\n\nV. Señor, abre mis labios,\nR. Y mi boca proclamará tu alabanza.\n\nV. Señor, ven en mi ayuda!,\nR. Y apresúrate a socorrerme.\n\nV. Gloria al Padre y al Hijo y al Espíritu Santo.\nR. Como era en un principio, ahora y siempre, por los siglos de los siglos. Amén.\n\n[TITULO]Misterios del Santo Rosario[/TITULO]\n\n[TITULO]Misterios Gozosos (lunes y sábados)[/TITULO]\n\n1. La Encarnación del Hijo de Dios (Lucas 1, 26-38).\n2. La Visitación de Nuestra Señora a su prima Santa Isabel (Lucas 1, 39-53).\n3. El Nacimiento del Hijo de Dios en Belén (Lucas 2, 6-19).\n4. La Purificación de Nuestra Señora (Lucas 2, 22-40).\n5. El Niño perdido y hallado en el Templo (Lucas 2, 41-52).\n\n[TITULO]Misterios Luminosos (jueves)[/TITULO]\n\n1. El Bautismo del Señor (Mateo 3, 13-17).\n2. Las bodas de Caná (Juan 2, 1-11).\n3. El Anuncio del Reino de Dios invitando a la conversión (Marcos 1, 15; Lucas 7, 47-50; Juan 20, 22-23).\n4. La Transfiguración del Señor (Mateo 17, 1-8).\n5. La institución de la Eucaristía (Juan 19, 25-30).\n\n[TITULO]Misterios Dolorosos (martes y viernes)[/TITULO]\n\n1. La Oración del Huerto (Mateo 26, 36-41).\n2. La Flagelación del Señor (Juan 18, 36-38; 19,1).\n3. La Coronación de espinas (Marcos 15, 14-17; Mateo 27, 24-30).\n4. La Cruz a cuestas (Juan 19, 17; Lucas 9, 23).\n5. Jesús muere en la Cruz (Juan 19, 25-30).\n\n[TITULO]Misterios Gloriosos (miércoles y domingos)[/TITULO]\n\n1. La Resurrección del Señor (Marcos 16, 6-8).\n2. La Ascensión del Señor (Mateo 28, 18-20; Hechos 1, 9-11).\n3. La Venida del Espíritu Santo (Hechos 2:1-4).\n4. La Asunción de Nuestra Señora (Cantar 3, 6; 8, 10).\n5. La Coronación de María Santísima (Cantar 6, 10; Lucas 1:51-54).\n\nDespués de cada misterio, si se desea, se puede rezar una de las siguientes intercesiones:\n\nMaría, Madre de gracia, Madre de misericordia, defiéndenos de nuestros enemigos y ampáranos ahora y en la hora de nuestra muerte. Amén.\n\nOh Jesús, perdónanos nuestros pecados, sálvanos del fuego del infierno y guía todas las almas al Cielo, especialmente aquellos que necesitan más de tu misericordia!\n\nAl terminar los cinco misterios, se puede rezar:\n\nDios te salve, María, Hija de Dios Padre, llena eres...\nDios te salve, María, Madre de Dios Hijo, llenas eres...\nDios te salve, María, Esposa de Dios Espíritu Santo, llena eres...'
  },
  {
    id: 'letanias',
    titulo: 'Letanías a la Santísima Virgen',
    texto: '[TITULO]Letanías a la Santísima Virgen[/TITULO]\n\nV. Señor, ten misericordia de nosotros\nR. Señor, ten misericordia de nosotros\nV. Cristo, ten misericordia de nosotros\nR. Cristo, ten misericordia de nosotros\nV. Señor, ten misericordia de nosotros\nR. Señor, ten misericordia de nosotros\nV. Cristo, óyenos\nR. Cristo, óyenos\nV. Cristo, escúchanos\nR. Cristo, escúchanos\nV. Dios, Padre celestial\nR. Ten misericordia de nosotros\nV. Dios Hijo, Redentor del mundo\nR. Ten misericordia de nosotros\nV. Dios Espíritu Santo\nR. Ten misericordia de nosotros\nV. Trinidad Santa, un solo Dios\nR. Ten misericordia de nosotros\n\nSanta María ruega por nosotros\nSanta Madre de Dios\nSanta Virgen de las vírgenes\nMadre de Cristo\nMadre de la Iglesia\nMadre de Misericordia\nMadre de la divina gracia\nMadre de la Esperanza\nMadre purísima\nMadre castísima\nMadre virginal\nMadre sin mancha\nMadre inmaculada\nMadre amable\nMadre admirable\nMadre del Buen Consejo\nMadre del Creador\nMadre del Salvador\nVirgen prudentísima\nVirgen digna de veneración\nVirgen digna de alabanza\nVirgen poderosa\nVirgen clemente\nVirgen fiel\nEspejo de justicia\nTrono de sabiduría\nCausa de nuestra alegría\nVaso espiritual\nVaso digno de honor\nVaso insigne de devoción\nRosa mística\nTorre de David\nTorre de marfil\nCasa de oro\nArca de la alianza\nPuerta del cielo\nEstrella de la mañana\nSalud de los enfermos\nRefugio de los pecadores\nConsuelo de los migrantes\nConsuelo de los afligidos\nAuxilio de los cristianos\nReina de los Ángeles\nReina de los Patriarcas\nReina de los Profetas\nReina de los Apóstoles\nReina de los Mártires\nReina de los Confesores\nReina de las Vírgenes\nReina de todos los Santos\nReina concebida sin pecado original\nReina elevada al cielo\nReina del Santísimo Rosario\nReina de la Familia\nRosario Reina de la paz.\n\nV. Cordero de Dios, que quitas los pecados del mundo\nR. Perdónanos, Señor\nV. Cordero de Dios, que quitas los pecados del mundo\nR. Escúchanos, Señor\nV. Cordero de Dios, que quitas los pecados del mundo\nR. Ten misericordia de nosotros\nV. Ruega por nosotros, Santa Madre de Dios\nR. Para que seamos dignos de alcanzar las promesas de nuestro Señor Jesucristo.\n\n[TITULO]Oremos[/TITULO]\n\nTe suplicamos, Señor, que derrames tu gracia en nuestras almas para que los que, por el anuncio del Ángel, hemos conocido la Encarnación de tu Hijo Jesucristo, por su Pasión y Cruz, seamos llevados a la gloria de su Resurrección. Por el mismo Jesucristo nuestro Señor. Amén.\n\nLas siguientes oraciones pueden ser añadidas después de las letanías:\n\n- Por las necesidades de la Iglesia y del Estado: Padrenuestro. Avemaría. Gloria.\n- Por la persona e intenciones del Sr. (Arz) Obispo de esta diócesis: Padrenuestro. Avemaría. Gloria.\n- Por las benditas almas del Purgatorio: Padrenuestro. Avemaría. Que descansen en paz.'
  },
  {
    id: 'bajo-tu-proteccion',
    titulo: 'Bajo Tu Protección',
    texto: '[TITULO]Bajo tu protección[/TITULO]\n\nBajo tu amparo\nnos acogemos Santa Madre\nde Dios; no desprecies las\nsúplicas que te hacemos en\nnuestras necesidades; antes\nbien, líbranos de todos los\npeligros Virgen gloriosa y\nbendita.\n\n[TITULO]En latín[/TITULO]\n\nSub tuum praesidium\nconfugimus,\nSancta Dei Genitrix.\nNostras deprecationes ne\ndespicias\nin necessitatibus nostris,\nsed a periculis cunctis\nlibera nos semper,\nVirgo gloriosa et benedicta.'
  },
  {
    id: 'salve-regina',
    titulo: 'Salve Regina',
    texto: '[TITULO]Salve Regina[/TITULO]\n\nGeneralmente se divide la Salve en tres partes:\n- El alma saluda a la Madre de Dios, invocando su misericordia.\n- El alma reitera el saludo y, en nombre de todos los hombres, invoca a María Santísima, pide que nos mire con ojos de misericordia y nos lleve hasta su Hijo Jesús.\n- El alma proclama el título mayor y fundamental de su intercesión, el ser Madre de Dios.\n\n[TITULO]En latín[/TITULO]\n\nSalve, Regina, Mater miseri-córdiæ, vita, dulcédo et spes nostra, salve.\nAd te clamámus, éxsules fílii Hevæ. Ad te suspirámus geméntes et flentes in hac lacrimárum valle.\nEia ergo, advocáta nostra, illos tuos misericórdes óculos ad nos convérte.\nEt Iesum benedíctum fructum ventris tui, nobis, post hoc exsílium, osténde.\nO clemens, o pia, o dulcis Virgo María!\n\n[TITULO]En español[/TITULO]\n\nDios te salve, Reina y Madre\nde misericordia,\nvida, dulzura y esperanza\nnuestra, Dios te salve.\nA Ti llamamos los\ndesterrados hijos de Eva;\na Ti suspiramos, gimiendo y\nllorando,\nen este valle de lágrimas.\nEa, pues, Señora, abogada\nnuestra,\nvuelve a nosotros esos tus\nojos misericordiosos;\ny después de este destierro\nmuéstranos a Jesús,\nfruto bendito de tu vientre.\n¡Oh clementísima!,\n¡Oh piadosa!,\n¡Oh dulce siempre Virgen\nMaría!\n\nV. Ruega por nosotros, Santa Madre de Dios.\nR. Para que seamos dignos de alcanzar las promesas de Nuestro Señor Jesucristo. Amén.\n\n[TITULO]Oremos[/TITULO]\n\nOmnipotente sempiterno Dios,\nque con la cooperación del Espíritu Santo,\npreparasteis el cuerpo y el alma de la gloriosa\nVirgen y Madre María,\npara que fuese merecedora de ser digna morada\nde vuestro Hijo;\nconcedednos que, pues celebramos con alegría\nsu conmemoración,\npor su piadosa intercesión\nseamos liberados de los males presentes\ny de la muerte eterna.\nPor el mismo Cristo, Señor nuestro. Amén.\nV. Que el auxilio divino permanezca para siempre. Amén.'
  },
  {
    id: 'madre-dolorosa',
    titulo: 'Estaba la Madre Dolorosa',
    texto: '[TITULO]Estaba la Madre Dolorosa[/TITULO]\n\n[TITULO]Traducción de Lope de Vega[/TITULO]\n\nEstaba la Madre dolorosa\njunto a la Cruz llorando,\nmientras su Hijo pendía.\nSu alma llorosa,\ntriste y dolorida,\ntraspasada por una espada.\n¡Oh cuán triste y afligida\nestuvo aquella bendita\nMadre del Unigénito!\nEstaba triste y dolorosa,\ncomo madre piadosa,\nal ver las penas de su Divino Hijo.\n¿Qué hombre no lloraría,\nsi viese a la Madre de Cristo\nen tan atroz suplicio?\n¿Quién no se contristaría,\nal contemplar a la Madre de Cristo\ndolerse con su Hijo?\nPor los pecados de su pueblo,\nvio a Jesús en los tormentos,\ny sometido a los azotes.\nVio a su dulce Hijo\nmorir abandonado,\ncuando entregó su espíritu.\n¡Oh, Madre, fuente de amor!\nHaz que sienta tu dolor\npara que contigo llore.\nHaz que arda mi corazón\nen amor de Cristo mi Dios,\npara que así le agrade.\n¡Oh santa Madre! Haz esto:\ngraba las llagas del Crucificado\nen mi corazón hondamente.\nDe tu Hijo lleno de heridas,\nque se dignó padecer tanto por mí,\nreparte conmigo las penas.\nHaz que yo contigo piadosamente llore,\ny que me conduela del Crucificado,\nmientras yo viva.\nHaz que esté contigo\njunto a la Cruz;\npues deseo asociarme en el llanto.\n¡Oh Virgen la más ilustre de todas las vírgenes!\nno seas ya dura para mí;\nhaz que contigo llore.\nHaz que lleve la muerte de Cristo;\nhazme socio de su Pasión\ny que venere sus llagas.\nHaz que, herido con sus heridas,\nsea yo embriagado con la Cruz\ny con la Sangre de tu Hijo.\nPara que no me queme y arda en las llamas,\npor ti, oh Virgen, sea defendido\nen el día del juicio.\n¡Oh Cristo! Cuando hubiere de salir de aquí,\ndame, por tu Madre,\nque llegue a la palma de la victoria.\nCuando el cuerpo feneciere,\nhaz que al alma se le dé\nla gloria del Paraíso.\nAmén. Aleluya.'
  },
  {
    id: 'escapulario',
    titulo: 'Formula para la Bendicion e Imposicion del Escapulario de la Virgen del Carmen',
    texto: '[TITULO]El Escapulario de la Virgen del Carmen[/TITULO]\n\nLa Santísima Virgen se apareció en el S. XIV al Papa Juan XXII, prometiendo para aquellos que cumplieran los requisitos de esta devoción que "como Madre de Misericordia, con mis ruegos, oraciones, méritos y protección especial, les ayudaré para que, llegando cuanto antes al estado de sus penas, (...) sean trasladadas sus almas a la bienaventuranza".\n\nLa imposición se hace con el escapulario de lana. Después de la ceremonia puede sustituirse con una medalla escapulario. Los requisitos de esta devoción, tanto para la medalla como para el escapulario son:\n\n- Tenerlo impuesto y llevarlo habitualmente.\n- Guardar castidad conforme al estado de cada uno.\n- Rezar diariamente tres Avemarías o siete Padres Nuestros con Avemaría y Gloria, o el Oficio Parvo o el Oficio Divino.\n\nEsta devoción a la Santísima Virgen ha de ayudarnos a ser más piadosos; nunca debemos ampararnos en ella para una vida de indiferencia religiosa.\n\n[TITULO]Fórmula para la bendición e imposición[/TITULO]\n\nV. Nuestro auxilio en el nombre del Señor.\nR. Que hizo el cielo y la tierra.\nV. El Señor esté con ustedes.\nR. Y con tu espíritu.\nV. Oremos.\n\nSeñor Jesucristo, Salvador del género humano, santifica con tu diestra este hábito, que por amor a Ti y a tu Madre, la Virgen María del Monte Carmelo, va(n) a llevar con toda devoción tu siervo(a - os) para que con la intercesión de tu misma Madre, sea(n) defendido(a) del maligno enemigo y persevere(n) en tu gracia hasta el día de su muerte. Que vives y reinas por los siglos de los siglos. Amén.\n\nEl sacerdote rocía con agua bendita el escapulario y, mientras lo impone, dice:\n\nV. Recibe este hábito bendito y ruega a la Santísima Virgen que, por sus méritos, lo lleves sin mancha de pecado, te defienda de toda adversidad y te conduzca a la vida eterna. Amén.\n\nV. Yo, en virtud de la potestad concedida, te (los) recibo para que pueda(n) participar de todos los bienes espirituales que por la misericordia de nuestro Señor Jesucristo han sido concedidos a los religiosos del Monte Carmelo. En nombre del Padre, y del Hijo, y del Espíritu Santo. Amén.\n\nV. Que te (los) bendiga el Dios omnipotente, creador del cielo y tierra, que se ha dignado que forme(en) parte de la Cofradía de la Bienaventurada Virgen María del Monte Carmelo; a Ella suplicamos que, en la hora de tu (su) muerte, aplaste la cabeza del demonio y que consigas (an) la palma y la corona de la eterna bienaventuranza. Por Cristo nuestro Señor. Amén.'
  },
  {
    id: 'bendita-sea',
    titulo: 'Bendita Sea Tu Pureza',
    texto: '[TITULO]Bendita Sea Tu Pureza[/TITULO]\n\nBendita sea tu pureza y eternamente lo sea: La pureza es virtud eminentemente positiva que hace grata a Dios a la persona que la vive. Es la virtud de la belleza, de la blancura del alma. Eleva al hombre hacia las cosas divinas, lo dignifica y engrandece. Estos dos versos son una alabanza a María. Concebida sin mancha, siempre fue pura y limpia más que el sol (...) Nadie como Ella vivió —ni vivirá— con tanta delicadeza la pureza.\n\nPues todo un Dios se recrea en tan graciosa belleza: La Virgen María es la obra maestra de la Creación. Ella es toda blanca, sin mancha posible. Reina de la luz, que no tiene menguantes como la luna, ni ocaso como el sol, sino siempre en toda luz, sin mezcla de sombra de ninguna clase. Más que Ella sólo Dios.\n\nA Ti celestial Princesa, Virgen Sagrada, María: El alma se dirige a María, recordándole su realeza y su virginidad (...) No se llama a María "la humilde, ni la obediente", aunque fue todo eso y modelo acabadísimo de todas las virtudes; sin embargo se le dice "la Virgen" y parece que ya está dicho todo con llamarla así.\n\nYo te ofrezco en este día alma, vida y corazón: Es el ofrecimiento que el hombre hace de su ser a María, Madre nuestra por designio divino. Desde hoy, que es el primer día del resto de vida que a cada uno le queda, sin perder un instante más, ofrece el hombre aquello que más aprecia: el alma, con sus facultades, inteligencia y voluntad; su propia vida, regalo inmenso de Dios; y el corazón, para que la Virgen lo tome y le alcance la gracia de conservarlo limpio, y así gozar de la visión de Dios eternamente.\n\nMírame con compasión: Es una petición de misericordia que hace el alma, con la seguridad de ser atendida por María, porque Ella es Madre, y la mejor de las madres, que siempre está pendiente de sus hijos y se compadece de ellos.\n\nNo me dejes, Madre mía: Lleno de confianza en el poder y la bondad de Santa María y sabiendo que, como Madre buena, oye los ruegos de sus hijos, le suplica el alma con todo el fervor del corazón que no le deje de su mano, porque si Ella le deja se perderá para siempre.\n\n[TITULO]Oración[/TITULO]\n\nBendita sea tu pureza\ny eternamente lo sea,\npues todo un Dios se recrea\nen tan graciosa belleza.\nA Ti, celestial Princesa,\nVirgen Sagrada María,\nyo te ofrezco en este día\nalma, vida y corazón.\nMírame con compasión,\nno me dejes, Madre mía.'
  },
  {
    id: 'acordaos',
    titulo: 'Acordaos (Oración de San Bernardo)',
    texto: '[TITULO]Acordaos (Oración de San Bernardo)[/TITULO]\n\nEl Acordaos - oración atribuida a San Bernardo de Claraval- es la mejor oración para manifestar nuestra confianza en la Virgen María, pues Ella es Madre clementísima; una Madre que está siempre pendiente de sus hijos, y está más, si cabe, de sus hijos. Es la súplica de un hijo que se ve necesitado de los cuidados maternales de María para vencer las tentaciones del enemigo. Un hijo que ruega e implora humildemente, reconociéndose indigno y pecador, la protección siempre poderosa de la Madre de Dios, para que en ningún momento le deje solo. Un hijo que sabe que sin la ayuda de la Virgen no es capaz de salir victorioso en las batallas que tiene que luchar durante esta vida para alcanzar la gloria del Cielo.\n\nEn esta oración el alma recuerda a Santa María el modo de su inquebrantable confianza: jamás la Virgen ha dejado de socorrer a los que han acudido a Ella buscando su protección.\n\nY Ella presenta ante el trono de la Divina majestad de su Hijo Jesús todas las súplicas y ruegos que se le hacen.\n\n[TITULO]Oración[/TITULO]\n\nAcordaos, ¡oh piadosísima Virgen María!,\nque jamás se ha oído decir que ninguno de los que han\nacudido a vuestra protección, implorando vuestro auxilio,\nhaya sido desamparado.\n\nAnimado por esta confianza, a Vos también acudo, Madre, Virgen\nde las vírgenes, y gimiendo bajo el peso de mis pecados me\natrevo a comparecer ante Vos. Madre de Dios, no desechéis mis\nsúplicas, antes bien, escuchadlas y acogedlas benignamente.\nAmén.'
  },
  {
    id: 'guadalupe',
    titulo: 'Oración a la Virgen de Guadalupe',
    texto: '[TITULO]Oración a la Virgen de Guadalupe[/TITULO]\n\n¡Oh Virgen Inmaculada, Madre del verdadero Dios y Madre de la Iglesia! Tú, que desde este lugar manifiestas tu clemencia y tu compasión a todos los que solicitan tu amparo; escucha la oración que con filial confianza te dirigimos y preséntala ante tu Hijo Jesús, único Redentor nuestro.\n\nMadre de misericordia, Maestra del sacrificio escondido y silencioso, a ti, que sales al encuentro de nosotros, los pecadores, te consagramos en este día todo nuestro ser y todo nuestro amor. Te consagramos también nuestra vida, nuestros trabajos, nuestras alegrías, nuestras enfermedades y nuestros dolores.\n\nDa la paz, la justicia y la prosperidad a nuestros pueblos; ya que todo lo que tenemos y somos lo ponemos bajo tu cuidado, Señora y Madre nuestra.\n\nQueremos ser totalmente tuyos y recorrer contigo el camino de una plena fidelidad a Jesucristo en su Iglesia: no nos sueltes de tu mano amorosa.\n\nVirgen de Guadalupe, Madre de las Américas, te pedimos por todos los Obispos, para que conduzcan a los fieles por senderos de intensa vida cristiana, de amor y de humilde servicio a Dios y a las almas.\n\nContempla esta inmensa mies, e intercede para que el Señor infunda hambre de santidad en todo el Pueblo de Dios, y otorgue abundantes vocaciones de sacerdotes y religiosos, fuertes en la fe, y celosos dispensadores de los misterios de Dios.\n\nConcede a nuestros hogares la gracia de amar y de respetar la vida que comienza, con el mismo amor con el que concebiste en tu seno la vida del Hijo de Dios. Virgen Santa María, Madre del Amor Hermoso, protege a nuestras familias, para que estén siempre muy unidas, y bendice la educación de nuestros hijos.\n\nEsperanza nuestra, míranos con compasión, enséñanos a ir continuamente a Jesús y, si caemos, ayúdanos a levantarnos, a volver a él, mediante la confesión de nuestras culpas y pecados en el Sacramento de la Penitencia, que trae sosiego al alma.\n\nTe suplicamos, que nos concedas un amor muy grande a todos los santos Sacramentos, que son como las huellas que tu Hijo nos dejó en la tierra.\n\nAsí, Madre Santísima, con la paz de Dios en la conciencia, con nuestros corazones libres de mal y de odios, podremos llevar a todos la verdadera alegría y la verdadera paz, que vienen de tu Hijo, nuestro Señor Jesucristo, que con Dios Padre y con el Espíritu Santo, vive y reina por los siglos de los siglos. Amén.'
  },
  {
    id: 'mes-maria',
    titulo: 'Mes de María',
    texto: 'Del 8 de noviembre al 8 de diciembre de cada año\n\n[TITULO]Oración Inicial[/TITULO]\n\nOh María, durante el bello mes que te está consagrado, todo resuena con tu nombre y alabanza! Tu santuario resplandece con nuevo brillo y nuestras manos te han elevado a un trono de gracia y amor, desde donde presides nuestras fiestas y escuchas nuestras oraciones y votos. Para honrarte hemos esparcido frescas flores a tus pies y tu vuestro frente con guirnaldas y coronas. Más ¡Oh María! no te das por satisfecha con estos homenajes; hay flores cuya frescura y lozanía jamás pasan y coronas que no se marchitan. Estas son las que tu esperas de tus hijos; porque el más hermoso adorno de una madre es la piedad de sus hijos; y la más bella corona que pueden deponer a sus pies es la de sus virtudes. Sí, los hijos que tu nos pedís son la inocencia de nuestros corazones, nos esforzaremos, pues, durante el curso de este mes consagrado a tu gloria, oh Virgen Santa, en conservar nuestras almas puras y sin manchas y en separar de nuestros pensamientos, deseos y miradas aun la sombra misma del mal; la rosa cuyo brillo agrada a tus ojos es la caridad, el amor a Dios y a nuestros hermanos nos amaremos, pues, los unos a los otros, como hijos de una misma familia cuya madre eres, viviendo todos en la dulzura de una concordia fraternal. En este mes bendito procuraremos cultivar en nuestros corazones la humildad, modesta flor que te es tan querida, y con tu auxilio llegaremos a ser puros, humildes, caritativos, pacientes y resignados. ¡Oh María! Haz producir en el fondo de nuestros corazones todas estas amables virtudes.\n\nQue ellas broten, florezcan y den al fin frutos de gracia, para poder ser algún día dignos hijos de la más santa y la mejor de las madres. Amén.\n\n[TITULO]Oración final[/TITULO]\n\n¡Oh María!, Madre de Jesús, nuestro Salvador y nuestra buena Madre! Nosotros venimos a ofrecerte, con estos obsequios que colocamos a tus pies, nuestros corazones, deseosos de serte agradables, y a solicitar de tu bondad un nuevo ardor en tu santo servicio. Dígnate presentarnos a tu Divino Hijo, que en vista de sus méritos y a nombre de su Santa Madre, dirija nuestros pasos por el sendero de la virtud, que haga lucir con nuevo esplendor la luz de la fe sobre los infortunados pueblos que gimen por tanto tiempo en las tinieblas del error, que vuelvan hacia Él, y cambie tantos corazones rebeldes, cuya penitencia regocijará su corazón y el tuyo. Que convierta a los enemigos de su Iglesia y que en fin, encienda por todas partes el fuego de su ardiente caridad, que nos colme de alegría en medio de las tribulaciones de esta vida, y de esperanza para el porvenir. Amén.\n\n"Dios quiere que no tengamos nada que no pase por manos de María" —(San Bernardo)\n\n"Es el mes en que, en los templos y en las casas particulares, sube a María desde el corazón de los cristianos el más ferviente y afectuoso homenaje de su oración y veneración. Es también el mes en el que desde su trono descienden hasta nosotros los dones más generosos y abundantes de la Divina Misericordia". (San Pablo VI, Mense Maio)\n\n"El mes de mayo nos estimula a pensar y a hablar de modo particular de Ella. En efecto, este es su mes. Así pues, el período del año litúrgico [Resurrección], y el corriente mes llaman e invitan nuestros corazones a abrirse de manera singular a María". (San Juan Pablo II, Mayo 1979)'
  },
  {
    id: 'lecturas-marianas',
    titulo: 'Lecturas Marianas para el Mes de María',
    ruta: '/devociones-maria/lecturas-marianas',
    texto: ''
  },
  {
    id: 'novena-inmaculada',
    titulo: 'Novena a la Inmaculada Concepción',
    ruta: '/devociones-maria/novena-inmaculada',
    texto: ''
  },
  {
    id: 'oracion-chile',
    titulo: 'Oración por Chile a la Virgen del Carmen',
    texto: '[TITULO]Oración por Chile a la Virgen del Carmen, Reina y Patrona de Chile[/TITULO](Monseñor Ramón Ángel Jara)\n\n¡Oh Virgen Santísima del Carmen!. Llenos de la más tierna confianza como hijos que acuden al corazón de su madre, nosotros venimos a implorar una vez más los tesoros de misericordia que con tanta solicitud nos habéis siempre dispensado.\n\nReconocemos humildemente que uno de los mayores beneficios que Dios ha concedido a nuestra Patria, ha sido señalaros a Vos por nuestra especial Abogada, Protectora y Reina. Por eso a Vos clamamos en todos nuestros peligros y necesidades seguros de ser benignamente escuchados. Vos sois la Madre de la Divina Gracia, conservad puras nuestras almas; sois la Torre poderosa de David, defended el honor y la libertad de nuestra Nación; sois el refugio de los pecadores, tronchal las cadenas de los esclavos del error y del vicio; sois el consuelo de los afligidos, socorred a las viudas, a los huérfanos y desvalidos; sois el auxilio de los cristianos, conservad nuestra fe y socorred a nuestra Santa Iglesia, en especial a sus sacerdotes y religiosos.\n\nDesde el trono de vuestra gloria atended a nuestras súplicas, ¡oh Madre del Carmelo! Abrid vuestro manto y cubrid con él a esta República de Chile, de cuya bandera Vos sois la estrella luminosa. Os pedimos el acierto para los magistrados, legisladores y jueces; la paz y piedad para los matrimonios y familias; el santo temor de Dios para los maestros; la inocencia para los niños; y para la juventud, una cristiana educación.\n\nApartad de nuestras ciudades los terremotos incendios y epidemias; alejad de nuestros mares las tormentas, y dad la abundancia a nuestros campos y montañas.\n\nSed el escudo de nuestros guerreros, el faro de nuestros marinos y el amparo de los ausentes y viajeros. Sed el remedio de los enfermos, la fortaleza de las almas atribuladas, la protectora especial de los moribundos y la redentora de las almas del Purgatorio.\n\n¡Oídnos pues, Reina y Madre Clementísima! Y haced que viviéndo unidos en la vida por la profesión de una misma fe y la práctica de un mismo amor al Corazón Divino de Jesús, podamos ser trasladados de esta patria terrenal a la patria inmortal del cielo, en que os alabaremos por los siglos de los siglos. Amén.'
  },
  {
    id: 'consagracion-diocesis',
    titulo: 'Consagración de la Diócesis de San Bernardo a la Virgen del Carmen',
    texto: 'Santuario de la Virgen del Cerro Chena\ndomingo 8 de agosto de 2010\n\nTe bendecimos, ¡oh Dios nuestro!, Padre, Hijo y Espíritu Santo, porque elegiste a María, desde antes de la creación del mundo, para ser santa e inmaculada ante Ti por el amor.\n\nEn previsión de los méritos de Cristo, la redimiste y constituiste Madre del mismo Redentor. Por virtud del Espíritu Santo hiciste de Ella para siempre templo santo, una nueva criatura, primicia de la nueva humanidad.\n\n¡Bendito seas por siempre, Señor!\n\n¡Bendita Tú entre las mujeres, Virgen María, y bendito el fruto de tu seno, Jesús! En Ti, la llena de gracia, se refleja la bondad de Dios y el destino de la criatura humana, para alabanza de la gloria de su gracia con la que nos enriqueció en su Hijo muy amado, que es nuestro Hermano e Hijo tuyo, Jesucristo.\n\nTú, la humilde sierva del Señor, eres el modelo de los discípulos de Cristo que consagran su vida a realizar la voluntad del Padre para la verdad a los hombres.\n\n¡Santa María, Madre de Cristo, Madre de Dios y Madre nuestra! Bajo tu protección nos acogemos, a tu intercesión maternal confiamos. Como Tú te consagraste totalmente a Dios, nosotros, siguiendo tu ejemplo y en comunión contigo, nos consagramos a Cristo el Señor; nos consagramos también a Ti, nuestro modelo, porque queremos hacer en todo la voluntad del Padre, y ser como Tú, fieles a las inspiraciones del Espíritu.\n\n¡Virgen del Carmen, Reina y Patrona del pueblo chileno! A tu corazón de Madre confiamos esta porción de la Iglesia, nuestra Diócesis de San Bernardo y todos los habitantes de las diversas comunas que la componen: nuestros sacerdotes, religiosos, religiosas y misioneros, como también a cada uno de los fieles e instituciones religiosas, civiles, y fuerzas armadas; especialmente confiamos a los enfermos, pobres. Que bajo tu protección maternal, nuestra Diócesis sea una familia unida en la fe, la esperanza y el amor en Cristo Jesús Nuestro Señor. Tú que eres Madre de la Iglesia, guía nuestra Iglesia particular en el camino del Dios vivo, del amor que es más fuerte que la muerte, del perdón que disculpa las ofensas, de la esperanza que mira hacia el futuro para construir, con la fuerza del Evangelio, la civilización del amor en esta Diócesis de San Bernardo.\n\n¡Santa María de la Esperanza, Virgen del Carmen y Madre de Chile! Extiende tu escapulario, como manto de protección, sobre las ciudades y los pueblos, sobre la cordillera y el mar, sobre hombres y mujeres, jóvenes y niños, ancianos y enfermos, huérfanos y afligidos, sobre los hijos fieles y sobre las ovejas descarriadas, y particularmente sobre esa Diócesis, que suspirando y llorando clama a Ti, Madre del Dios por quien se vive, para que tus ojos misericordiosos no dejen de posarse sobre nosotros que hoy nos consagramos a Ti, reconociéndote una vez más como Madre, como Reina y como abogada ante el trono de Dios. Tú, que en cada hogar de nuestra Diócesis tienes un altar familiar, que en cada corazón chileno tienes un altar vivo, acoge la plegaria de esta porción del pueblo de Dios, que ahora, con su Obispo, de rodillas se consagra a Ti.\n\nEstrella de los mares y Faro de luz, consuelo seguro para el pueblo peregrino, que tus pasos de maestra Diócesis San Bernardo en su peregrinar terreno, para que recorra siempre senderos de paz y de concordia, caminos de Evangelio, de progreso, de justicia y libertad. Reconcilia a los hermanos en un abrazo fraterno; que desaparezcan los odios y los rencores, que se superen las divisiones y barreras, que se unan las rupturas, para que Chile sea una casa común en la que Cristo sea nuestra Paz, que su perdón renueve los corazones, que su Palabra sea esperanza y fermento en la sociedad.\n\n¡Madre de la Iglesia y de todos los hombres! Inspira y conserva la fidelidad a Cristo en nuestra Diócesis de San Bernardo y en toda nuestra Patria chilena. Mantén viva la unidad de la Iglesia bajo la cruz de tu Hijo. Haz que los hombres de todos los pueblos, reconozcan su mismo origen y su idéntico destino, se respeten y amen como hijos del mismo Padre, en Cristo Jesús, nuestro único Salvador, y el Espíritu que renueva la faz de la tierra, para gloria y alabanza de la Santísima Trinidad. Amén.'
  }
];

export default function DevocionesMariaScreen() {
  const [devocionSeleccionada, setDevocionSeleccionada] = useState<Devocion | null>(null);
  const router = useRouter();

  const renderTextoConTitulos = (texto: string) => {
    const partes = texto.split(/\[TITULO\](.*?)\[\/TITULO\]/g);
    return (
      <>
        {partes.map((parte, index) => {
          if (index % 2 === 1) {
            // Es un título
            return <Text key={index} style={styles.subtitulo}>{parte}</Text>;
          }
          // Es texto normal
          return <Text key={index} style={styles.devocionTexto}>{parte}</Text>;
        })}
      </>
    );
  };

  const handleDevocionPress = (devocion: Devocion) => {
    if (devocion.ruta) {
      router.push(devocion.ruta);
    } else {
      setDevocionSeleccionada(devocion);
    }
  };

  return (
    <>
      <Stack.Screen 
        options={{
          title: devocionSeleccionada ? devocionSeleccionada.titulo : 'Devociones a la Virgen María',
          headerStyle: {
            backgroundColor: Colors.primary
          },
          headerTintColor: Colors.white
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          {devocionSeleccionada ? (
            <View style={styles.devocionDetalle}>
              <Text style={styles.devocionTitulo}>{devocionSeleccionada.titulo}</Text>
              {renderTextoConTitulos(devocionSeleccionada.texto)}
              <TouchableOpacity 
                style={styles.botonVolver}
                onPress={() => setDevocionSeleccionada(null)}
              >
                <Text style={styles.botonVolverTexto}>Volver al listado</Text>
              </TouchableOpacity>
            </View>
          ) : (
            devociones.map((devocion) => (
              <TouchableOpacity 
                key={devocion.id}
                style={styles.devocionItem}
                onPress={() => handleDevocionPress(devocion)}
              >
                <Text style={styles.devocionItemTitulo}>{devocion.titulo}</Text>
              </TouchableOpacity>
            ))
          )}
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    padding: 20,
  },
  devocionItem: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  devocionItemTitulo: {
    fontSize: 22,
    color: Colors.primary,
    textAlign: 'center',
  },
  devocionDetalle: {
    backgroundColor: Colors.white,
    padding: 20,
    borderRadius: 10,
  },
  devocionTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 15,
    textAlign: 'center',
  },
  devocionTexto: {
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'justify',
    marginBottom: 20,
    paddingHorizontal: 5,
  },
  botonVolver: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  botonVolverTexto: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: Colors.primary,
    textAlign: 'center',
    marginVertical: 15,
  },
}); 