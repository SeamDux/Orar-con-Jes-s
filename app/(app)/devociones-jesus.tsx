import React, { useState } from 'react';
import { StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, View } from '../../components/Themed';
import Colors from '../../constants/Colors';
import { Stack, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

type Devocion = {
  id: string;
  titulo: string;
  texto: string;
};

const devociones: Devocion[] = [
  {
    id: 'coronilla',
    titulo: 'Coronilla de la Divina Misericordia',
    texto: 'Santa Faustina Kowalska, a partir de una visión que tuvo el 13 de Septiembre de 1935 empezó a difundir esta oración que el mismo Jesús le enseñó. En el relato de dicha visión recogido en su diario, afirma que el mismo Jesús le dijo:\n\n«Cuando recen este Tercio junto a los agonizantes, Yo me pondré entre el Padre y el alma agonizante, no como justo Juez, sino como Salvador Misericordioso»\n\nPara recitar la Coronilla de la Divina Misericordia se usa un rosario normal y se sigue esta secuencia:\n\n1. La señal de la Cruz. En el nombre del Padre y del Hijo y del Espíritu Santo. Amén.\n2. Padre Nuestro\n3. Ave María\n4. Credo (Símbolo de los Apóstoles)\n5. En cada cuenta mayor del Rosario, cuando normalmente se dice el Padre Nuestro, diga:\n\nPadre Eterno,\nTe ofrezco\nel Cuerpo, la Sangre,\nel Alma y la Divinidad\nde Tu amadísimo Hijo,\nNuestro Señor Jesucristo,\ncomo propiciación\nde nuestros pecados\ny los del mundo entero.\n\n6. En cada cuenta menor del Rosario, cuando normalmente se dice el Ave María, diga:\n\nPor Su dolorosa Pasión,\nten misericordia de nosotros\ny del mundo entero.\n\n7. Invocación: Al final de la corona, la siguiente oración se reza tres veces seguidas:\n\nSanto Dios,\nSanto Fuerte,\nSanto Inmortal,\nten misericordia de nosotros\ny del mundo entero.\n\n8. Oración para concluir (opcional)\n\nOh Dios Eterno, en quien la misericordia es infinita y el tesoro de compasión inagotable, vuelve a nosotros Tu mirada bondadosa y aumenta Tu misericordia en nosotros, para que en momentos difíciles no nos desesperemos ni nos desalentemos, sino que, con gran confianza, nos sometamos a Tu santa voluntad, que es el Amor y la Misericordia misma. Amén.'
  },
  {
    id: 'soneto-cristo',
    titulo: 'Soneto a Jesús Crucificado',
    texto: 'Atribuido a Fray Miguel de Guevara, O. S. A.\n\nNo me mueve, mi Dios, para quererte\nel cielo que me tienes prometido,\nni me mueve el infierno tan temido\npara dejar por eso de ofenderte.\n\nTú me mueves, Señor; muéveme el verte\nclavado en una cruz y escarnecido;\nmuéveme ver tu cuerpo tan herido;\nmuévenme tus afrentas y tu muerte.\n\nMuéveme, en fin, tu amor, y en tal manera,\nque aunque no hubiera cielo, yo te amara,\ny aunque no hubiera infierno, te temiera.\n\nNo me tienes que dar porque te quiera,\npues aunque lo que espero no esperara,\nlo mismo que te quiero te quisiera.'
  },
  {
    id: 'oracion-agustin',
    titulo: 'Oración de San Agustín',
    texto: 'Señor Jesús, que me conozca a mí\ny que te conozca a Ti.\nQue no desee otra cosa sino a Ti.\nQue me odie a mí y te ame a Ti.\nY que todo lo haga siempre por Ti.\nQue me humille y que te exalte a Ti.\nQue no piense nada más que en Ti.\nQue me mortifique, para vivir en Ti.\nY que acepte todo como venido de Ti.\nQue renuncie a lo mío y te siga sólo a Ti.\nQue siempre escoja seguirte a Ti.\nQue huya de mí y me refugie en Ti.\nY que merezca ser protegido por Ti.\nQue me tema a mí y tema ofenderte a Ti.\nQue sea contado entre los elegidos por Ti.\nQue desconfíe de mí\ny ponga toda mi confianza en Ti.\nY que obedezca a otros por amor a Ti.\nQue a nada dé importancia sino tan sólo a Ti.\nQue quiera ser pobre por amor a Ti.\nMírame, para que sólo te ame a Ti.\nLlámame, para que sólo te busque a Ti.\nY concédeme la gracia\nde gozar para siempre de Ti. Amén.'
  },
  {
    id: 'primer-viernes',
    titulo: 'Devoción del primer viernes de mes al Sagrado Corazón de Jesús',
    texto: '"La oración de la Iglesia venera y honra al Corazón de Jesús, como invoca su Santísimo Nombre. Adora al Verbo encarnado y a su Corazón que, por amor a los hombres, se dejó traspasar por nuestros pecados" (CEC 2669).\n\nLa devoción al Sagrado Corazón de Jesús es muy antigua en la Iglesia; sin embargo, fue Santa Margarita María de Alacoque quien la popularizó. Jesús se le apareció durante la octava de la fiesta de Corpus Christi y le dijo: "Mira este corazón que tanto ha amado a los hombres, que no ha omitido nada hasta agotarse y consumirse para demostrarles su amor. Y en reconocimiento no recibe de los cristianos otra cosa que sacrilegio, desprecio, indiferencia e ingratitud, aún en el mismo sacramento de mi amor. Pero lo que traspasa mi Corazón más desgarradoramente es que estos insultos los recibo de personas consagradas especialmente a mi servicio" (Santa Margarita María de Alacoque, Autobiografía).\n\nNuestro Señor hizo grandes promesas a aquellos que le demuestran su amor y hacen expiación por los pecados propios y ajenos: "Yo prometo en la excesiva misericordia de mi Corazón, que mi amor todopoderoso concederá a todos los que comulguen los nueve primeros viernes consecutivos la gracia de la perseverancia final: no morirán en mi desgracia ni sin recibir los Sacramentos, haciéndose mi Corazón su asilo seguro en aquella última hora" (Ibídem).\n\nLa gran promesa del Sagrado Corazón de Jesús es muy consoladora: la gracia de la perseverancia final y el gozo de encontrar en su Sacratísimo Corazón un refugio seguro de misericordia en nuestra última hora.\n\nPara ganar esta gracia debemos:\n\n• Recibir sin interrupción la Sagrada Comunión durante nueve primeros viernes consecutivos.\n\n• Tener la intención de honrar al Sagrado Corazón de Jesús y de alcanzar la perseverancia final.\n\n• Ofrecer cada Sagrada Comunión como un acto de expiación por las ofensas cometidas contra el Santísimo Sacramento.\n\n[TITULO]Oración[/TITULO]\nOh Dios,\nque en el corazón de tu Hijo,\nherido por nuestros pecados,\nhas depositado infinitos tesoros de caridad;\nte pedimos que,\nal rendirle el homenaje de nuestro amor,\nle ofrezcamos una cumplida reparación.\nPor Jesucristo nuestro Señor.\nR. Amén.\n\n[TITULO]Lectura Bíblica S. Juan 19:31-37[/TITULO]\n"Los judíos, como era el día de la Parasceve, para que no quedasen los cuerpos en la cruz el día del sábado, por ser día grande aquel sábado, rogaron a Pilato que les rompiesen las piernas y los quitasen. Vinieron, pues, los soldados y rompieron las piernas al primero y al otro que estaba crucificado con Él; pero llegando a Jesús, como le vieron ya muerto, no le rompieron las piernas, sino que uno de los soldados le atravesó con su lanza el costado, y al instante salió sangre y agua. El que lo vio da testimonio, y su testimonio es verdadero; él sabe que dice verdad para que vosotros creáis, porque esto sucedió para que se cumpliese la Escritura: "No romperéis ni uno de sus huesos". Y otra Escritura dice también: "Mirarán al que traspasaron".\n\n[TITULO]Consideraciones para meditar[/TITULO]\n(Extractos de la homilía de San Josemaría Escrivá, El Corazón de Cristo, Paz de los cristianos, en Es Cristo que pasa).\n\n1. El amor se nos revela en la Encarnación, en ese andar redentor de Jesucristo por nuestra tierra, hasta el sacrificio supremo de la Cruz. Y, en la Cruz, se manifiesta con un nuevo signo: uno de los soldados abrió a Jesús el costado con una lanza, y al instante salió sangre y agua. Agua y sangre de Jesús que nos hablan de una entrega realizada hasta el último extremo, hasta el consummatum est, el todo está consumado, por amor.\n\nLa plenitud de Dios se nos revela y se nos da en Cristo, en el amor de Cristo, en el Corazón de Cristo. Porque es el Corazón de Aquel en quien habita toda la plenitud de la divinidad corporalmente. Por eso, si se pierde de vista este gran designio de Dios —la corriente de amor instaurada en el mundo por la Encarnación, por la Redención y por la Pentecostés—, no se comprenderán las delicadezas del Corazón del Señor.\n\n2. Tengamos presente toda la riqueza que se encierra en estas palabras. Cuando hablamos del corazón humano no nos referimos sólo a los sentimientos, aludimos a toda la persona que quiere, que ama y que trata a los demás. Y, en el modo de expresarse los hombres, que han inventado la palabra corazón para que podamos entender así las cosas divinas, el corazón es considerado como el resumen y la fuente, la expresión y el fondo último de los pensamientos, de las palabras, de las acciones. Un hombre vale lo que vale su corazón, podemos decir con lenguaje nuestro.\n\nPor eso, al tratar ahora del Corazón de Jesús, ponemos de manifiesto la certidumbre del amor de Dios y la verdad de su entrega a nosotros. Al recomendar la devoción a ese Sagrado Corazón, estamos recomendando que debemos dirigirnos íntegramente —con todo lo que somos: nuestra alma, nuestros sentimientos, nuestros pensamientos, nuestras palabras y nuestras acciones, nuestros trabajos y nuestras alegrías— a Jesús.\n\nEn esto se concreta la verdadera devoción al Corazón de Jesús: en conocer a Dios y conocernos a nosotros mismos, y en mirar a Jesús y acudir a Él, que nos anima, nos enseña, nos guía. No cabe en esta devoción más superficialidad que la del hombre que no sabido únicamente humano, no acierta a percibir la realidad de Dios encarnado.\n\n3. Jesús en la Cruz, con el corazón traspasado de Amor por los hombres, es una respuesta elocuente —sobran las palabras— a la pregunta por el valor de las cosas y de las personas. Valen tanto los hombres, su vida y su felicidad, que el mismo Hijo de Dios se entrega para redimirlos, para limpiarlos, para elevarlos. ¿Quién no amará a su Corazón tan herido? ¿Quién no seguirá preguntando: cuándo lo devolveremos amor por amor, abrazaremos a nuestro herido, al que los impíos atravesaron manos y pies, el costado y Corazón. Pidamos que se digne herir nuestro corazón con el vínculo de su amor y herido con una lanza. Porque es aún impenitente. Pero fíjate en que Dios no nos declara: en lugar del corazón, os daré una voluntad de puro espíritu. No nos da un corazón, y un corazón de carne, como el de Cristo. Yo no cuento con un corazón para amar a Dios, y con otro para amar a las personas de la tierra. Con el mismo corazón con el que he querido a mis padres y quiero a mis amigos, con ese mismo corazón amo a Cristo, y al Padre, y al Espíritu Santo y a Santa María. No me cansaré de repetirlo: tenemos que ser muy humanos; porque, de otro modo, tampoco podremos ser divinos.\n\nSi no aprendemos de Jesús, no amaremos nunca. Si pensamos, como algunos, que conservar un corazón limpio, digno de Dios, significa no mezclarlo con afectos humanos, entonces el resultado lógico será que seremos incapaces de tener una verdadera caridad de Jesucristo, que es cariño, caridad humana. Con eso no doy pie a falsas teorías, que son tristes excusas para desviar los corazones —apartándolos de Dios—, y llevarlos a malas ocasiones y a la perdición.\n\n4. Pero he de proponeros además otra consideración: que hemos de luchar sin desmayo por el bien, precisamente porque sabemos que es difícil que los hombres nos decidamos seriamente a ejercitar la justicia, y es mucho lo que falta para que la convivencia terrena esté inspirada por el amor, y no por el odio o la indiferencia. No se nos oculta tampoco que, aunque consigamos llegar a una razonable distribución de los bienes y a una armoniosa organización de la sociedad, no desaparecerá el dolor de la enfermedad, el de la incomprensión o el de la soledad, el de la muerte de las personas que amamos, el de la propia limitación.\n\nAnte esas pesadumbres, el cristiano sólo tiene una respuesta auténtica, una respuesta que es definitiva: Cristo en la Cruz, Dios que sufre y que muere, Dios que nos entrega su Corazón, que una lanza abrió por amor a todos. Nuestro Señor abomina de las injusticias, y condena a los que las comete. Pero, como respeta la libertad de cada individuo, permite que las haya. Dios Nuestro Señor no causa el dolor de las criaturas, pero lo toleró porque —después del pecado original— forma parte de la condición humana. Sin embargo, su Corazón lleno de Amor por los hombres se hizo cargo sobre sí, con la Cruz, todas esas penas: nuestro sufrimiento, nuestra tristeza, nuestra angustia, nuestra hambre y sed de justicia.\n\nEl dolor entra en los planes de Dios. Esa es la realidad, aunque nos cueste entenderla. También, como Hombre, le costó a Jesucristo soportarla: Padre, si quieres, aleja de mí este cáliz; pero no se haga mi voluntad, sino la tuya. En esta tensión de súplica y de aceptación de la voluntad del Padre, Jesús va a la muerte serenamente, perdonando a los que le crucifican.\n\nPrecisamente, esa admisión sobrenatural del dolor supone, al mismo tiempo, la mayor conquista. Jesús, muriendo en la Cruz, ha vencido la muerte: Dios saca, de la muerte, vida. La actitud de un hijo de Dios no es la de quien se resigna a su trágica desventura, es la satisfacción de quien pregunta ya la victoria. En nombre de ese amor victorioso de Cristo, los cristianos debemos lanzarnos por todos los caminos de la tierra, para ser sembradores de paz y de alegría con nuestra palabra y con nuestras obras. Hemos de luchar —lucha de paz— contra el mal, contra la injusticia, contra el pecado, para proclamar así que la actual condición humana no es la definitiva; que el amor de Dios, manifestado en el Corazón de Cristo, alcanzará el glorioso triunfo espiritual de los hombres.\n\n[TITULO]Acto de confianza en el Sagrado Corazón[/TITULO]\n\nOh, Corazón de Jesús, Dios y Hombre verdadero, delicia de los Santos, refugio de los pecadores y esperanza de los que en Ti confían; Tú nos dices amablemente: Vengan a Mí; y nos repites las palabras que dijiste al paralítico: Confía, hijo mío, tus pecados te son perdonados, y a la mujer enferma: Confía, hija, tu fe te ha salvado, y a los Apóstoles: Confíen, Yo Soy, no teman.\n\nAnimado con estas palabras acudo a Ti con el corazón lleno de confianza, para decirte sinceramente y desde lo más íntimo de mi alma: Corazón de Jesús en Ti confío.\n\nSí, Corazón de mi amable Jesús, confío y confiaré siempre en tu bondad; y por el Corazón de tu Madre, te pido que no desfallezca nunca esta confianza en Ti, a pesar de todas las contrariedades y de todas las pruebas que Tú quisieras enviarme, para que habiendo sido mi consuelo en vida, seas mi refugio en la hora de la muerte y mi gloria en la eternidad. Amén.'
  },
  {
    id: 'consagracion-sagrado',
    titulo: 'Consagración al Sagrado Corazón de Jesús',
    texto: '[TITULO]Consagración al Sagrado Corazón de Jesús[/TITULO]\nSta. Margarita María de Alacoque\n\n"Me entrego, y al Sagrado Corazón de Nuestro Señor Jesucristo consagro sin reservas, mi persona, mi vida, mis obras, mis dolores y sufrimientos. Me comprometo a no usar parte alguna de mi ser sino es para honrar, amar y glorificar al Sagrado Corazón. Este es mi propósito inmutable: ser enteramente suyo y hacer todas las cosas por su amor. Al mismo tiempo renuncio de todo corazón a todo aquello que le desagrade.\n\nSagrado Corazón de Jesús, quiero tenerte como único objeto de mi amor. Sé pues, mi protector en esta vida y garantía de la vida eterna. Sé para mí el refugio en mi última hora. Sé propiciación y desagravio por todos los pecados de mi vida. Corazón lleno de bondad, sé para mí el refugio en la hora de mi muerte y mi intercesor ante Dios Padre. Desvía de mí el castigo de su justa ira. Corazón de amor, en Ti pongo toda mi confianza. De mi maldad todo lo temo. Pero de tu Amor todo lo espero. Extirpa de mí, Señor, todo lo que te disguste o me pueda apartar de Ti. Que tu amor imprima tan profundamente en mi corazón que jamás te olvide yo y que jamás me separe de Ti.\n\nSeñor y Salvador mío, te ruego, por el amor que me tienes, que mi nombre esté profundamente grabado en tu sagrado Corazón; que mi felicidad y mi gloria sean vivir y morir en tu servicio. Amén."\n\n[TITULO]Oración[/TITULO]\nOmnipotente y sempiterno Dios,\nmira el Corazón de tu amadísimo Hijo\ny las alabanzas y satisfacciones\nque en nombre de los pecadores te tributa,\ny concede aplacado el perdón\na los que imploran tu misericordia\nen el nombre del mismo Hijo Jesucristo.\nPor Jesucristo nuestro Señor. Amén.'
  },
  {
    id: 'consagracion-diocesis',
    titulo: 'Consagración de la Diócesis de San Bernardo\nAl Sagrado Corazón de Jesús',
    texto: '"Corazón de Jesús Sacramentado, Corazón del Dios Hombre, Redentor del Mundo, Rey de Reyes y Señor de los que dominan:\n\nTú eres el camino seguro que conduce a la posesión de la vida eterna; Tú eres la luz inextinguible que alumbra los entendimientos para que conozcan la verdad.\n\nConfesamos que has venido a la tierra a establecer el reino de Dios en la paz de las almas, redimidas por tu Sangre Preciosa.\n\nHoy la Diócesis de San Bernardo, se postra reverente ante Ti, a quien reconocemos, presente verdadera y realmente en esta hostia consagrada.\n\nVenga, pues, a nosotros tu Santísimo Reino, que es Reino de justicia, de amor y de paz.\n\nReina en los corazones de los hombres, en el seno de los hogares, en la inteligencia de los sabios, en las escuelas, en las leyes e instituciones patrias.\n\nReina, Señor, no solo sobre los que nunca se han separado de Ti, sino también sobre los hijos pródigos que te han abandonado.\n\nReina sobre aquellos que están extraviados por el error o separados por la discordia, y haz que vuelvan al puerto de la verdad y a la unidad de la fe, para que pronto no haya más que un solo rebaño y un solo pastor.\n\n¡Venga a nosotros tu Reino!\n\n¡Sagrado Corazón Eucarístico de Jesús! Extiende tu protección, sobre las ciudades y los pueblos, sobre la cordillera y el mar, sobre hombres y mujeres, sobre los hijos fieles y sobre las ovejas descarriadas, y particularmente sobre esta Diócesis, que gimiendo y llorando clama a Ti, Dios de la Luz, Luz de Luz, Dios Verdadero de Dios Verdadero, para que tu Cetro, Justo y misericordioso no deje de posarse sobre nosotros que hoy nos consagramos a Ti, reconociéndote una vez más como nuestro Rey y Señor, acoge la plegaria de esta porción del pueblo de Dios, que ahora, con su Obispo, se consagra a tu Adorabilísimo Corazón.\n\n¡Sagrado Corazón de Jesús! A tu Sacratísimo Corazón Consagro esta porción de la Iglesia, nuestra Diócesis de San Bernardo y a todos los habitantes de las diversas comunas que la componen: nuestros sacerdotes, religiosos, religiosas y misioneros, como también a cada uno de los fieles e instituciones religiosas, civiles, y de las fuerzas armadas y de seguridad pública; especialmente a los niños, ancianos, enfermos y pobres. Que bajo tu protección, nuestra Diócesis sea una familia unida en la fe, la esperanza y el amor a que eres Nuestro Dios y Señor, el Mesías Salvador.\n\nGuía los pasos de nuestra Diócesis de San Bernardo en su camino terreno, para que recorra siempre senderos de paz y de concordia, caminos de Evangelio, de progreso, de justicia y libertad. Reconcilia a los hermanos en un abrazo fraterno; que desaparezcan los odios y los rencores, que se superen las divisiones y las barreras, que se unan las rupturas y sanen las heridas. Que Tú perdones nuestros corazones.\n\nDesde los sagrarios de las Parroquias de nuestra Diócesis, preside nuestras empresas, bendícenos y concédenos la paz, para que la justicia y la caridad hagan más suave nuestra vida y más llevadero nuestro trabajo. Te pedimos, particularmente, que abras los corazones de muchos jóvenes para que comprendan y sigan tu llamado a la vida sacerdotal y a la vida religiosa, especialmente femenina.\n\nBendecid a toda nuestra diócesis, a todos los que estamos aquí reunidos en la unidad de la Caridad, suplicándote que nos mantengas en la seguridad de tu Amor y en el regalado gozo de tu Corazón llevándolo todo al mar".'
  },
  {
    id: 'letanias-sagrado',
    titulo: 'Letanías del Sagrado Corazón de Jesús',
    texto: 'Señor, ten piedad\nCristo, ten piedad\nSeñor, ten piedad\nCristo, óyenos\nCristo, escúchanos\n\nDios Padre celestial, ten piedad de nosotros\nDios Hijo Redentor del mundo,\nDios Espíritu Santo,\nSantísima Trinidad, que eres un solo Dios,\n\nCorazón de Jesús, Hijo del Padre Eterno, ten piedad de nosotros\nCorazón de Jesús, formado por el Espíritu Santo en el seno de la Virgen Madre,\nCorazón de Jesús, unido sustancialmente al Verbo de Dios,\nCorazón de Jesús, de infinita majestad,\nCorazón de Jesús, templo santo de Dios,\nCorazón de Jesús, tabernáculo del Altísimo,\nCorazón de Jesús, casa de Dios y puerta del cielo,\nCorazón de Jesús, horno ardiente de caridad,\nCorazón de Jesús, santuario de la justicia y del amor,\nCorazón de Jesús, lleno de bondad y de amor,\nCorazón de Jesús, abismo de todas las virtudes,\nCorazón de Jesús, dignísimo de toda alabanza,\nCorazón de Jesús, rey y centro de todos los corazones,\nCorazón de Jesús, en quien están todos los tesoros de la sabiduría y de la ciencia,\nCorazón de Jesús, en quien habita toda la plenitud de la divinidad,\nCorazón de Jesús, en quien el Padre se complace,\nCorazón de Jesús, de cuya plenitud todos hemos recibido,\nCorazón de Jesús, deseado de los eternos collados,\nCorazón de Jesús, paciente y de mucha misericordia,\nCorazón de Jesús, rico para todos los que te invocan,\nCorazón de Jesús, fuente de vida y de santidad,\nCorazón de Jesús, propiciación por nuestros pecados,\nCorazón de Jesús, colmado de oprobios,\nCorazón de Jesús, triturado por nuestros pecados,\nCorazón de Jesús, hecho obediente hasta la muerte,\nCorazón de Jesús, traspasado por una lanza,\nCorazón de Jesús, fuente de todo consuelo,\nCorazón de Jesús, vida y resurrección nuestra,\nCorazón de Jesús, paz y reconciliación nuestra,\nCorazón de Jesús, víctima por los pecadores,\nCorazón de Jesús, salvación de los que en ti esperan,\nCorazón de Jesús, esperanza de los que en ti mueren,\nCorazón de Jesús, delicia de todos los santos,\n\nCordero de Dios, que quitas los pecados del mundo, perdónanos Señor\nCordero de Dios, que quitas los pecados del mundo, escúchanos Señor\nCordero de Dios, que quitas los pecados del mundo, ten misericordia de nosotros\n\nV. Jesús manso y humilde de Corazón\nR. Haz nuestro corazón semejante al tuyo\n\nOREMOS\nOh Dios todopoderoso y eterno: mira el Corazón de tu amantísimo Hijo y las alabanzas y satisfacciones que en nombre de los pecadores te ofrece; y concede aplacado el perdón a éstos que piden tu misericordia en el nombre de tu mismo Hijo Jesucristo. Que vive y reina contigo por los siglos de los siglos. Amén.'
  },
  {
    id: 'letanias-nombre',
    titulo: 'Letanía del Santo Nombre de Jesús',
    texto: 'Señor, ten piedad de nosotros\n**Señor, ten piedad de nosotros.**\n\nCristo, ten piedad de nosotros\n**Cristo, ten piedad de nosotros.**\n\nSeñor, ten piedad de nosotros\n**Señor, ten piedad de nosotros.**\n\nCristo, óyenos\n**Cristo, óyenos.**\n\nCristo, escúchanos\n**Cristo, escúchanos.**\n\nDios, Padre celestial, **Ten misericordia de nosotros.**\nDios Hijo, Redentor del mundo,\nDios Espíritu Santo,\nSantísima Trinidad, un solo Dios,\nJesús, hijo de Dios vivo,\nJesús, esplendor del Padre,\nJesús, pureza de la luz eterna,\nJesús, rey de la gloria,\nJesús, sol de justicia,\nJesús, hijo de la Virgen María,\nJesús, amable,\nJesús, admirable,\nJesús, Dios fuerte,\nJesús, padre del siglo futuro,\nJesús, mensajero del plan divino,\nJesús, todopoderoso,\nJesús, pacientísimo,\nJesús, obedientísimo,\nJesús, manso y humilde de corazón,\nJesús, amante de la castidad,\nJesús, amador nuestro,\nJesús, Dios de paz,\nJesús, autor de la vida, **Ten misericordia de nosotros.**\nJesús, modelo de virtudes,\nJesús, celoso de la salvación de las almas,\nJesús, nuestro Dios,\nJesús, nuestro refugio,\nJesús, padre de los pobres,\nJesús, tesoro de los fieles,\nJesús, pastor bueno,\nJesús, verdadera luz,\nJesús, sabiduría eterna,\nJesús, bondad infinita,\nJesús, camino y vida nuestra,\nJesús, alegría de los ángeles,\nJesús, rey de los patriarcas,\nJesús, maestro de los apóstoles,\nJesús, doctor de los evangelistas,\nJesús, fortaleza de los mártires,\nJesús, luz de los confesores,\nJesús, pureza de las vírgenes,\nJesús, corona de todos los santos,\n\nSénos propicio;\n**Perdónanos, Jesús.**\n\nSénos propicio;\n**Escúchanos, Jesús.**\n\nDe todo mal, **Líbranos, Jesús.**\nDe todo pecado,\nDe tu ira,\nDe las asechanzas del demonio,\nDel espíritu impuro,\nDe la muerte eterna,\nDel menosprecio de tus inspiraciones,\nPor el misterio de tu santa encarnación,\nPor tu natividad,\nPor tu infancia,\nPor tu divinísima vida,\nPor tus trabajos,\nPor tu agonía y Pasión,\nPor tu cruz y desamparo,\nPor tus sufrimientos,\nPor tu muerte y sepultura,\nPor tu resurrección\nPor tu ascensión,\nPor tu institución de la santísima Eucaristía,\nPor tus gozos,\nPor tu gloria,\n\nCordero de Dios, que quitas los pecados del mundo,\n**Perdónanos, Jesús.**\n\nCordero de Dios, que quitas los pecados del mundo,\n**Escúchanos Jesús.**\n\nCordero de Dios, que quitas los pecados del mundo,\n**Ten misericordia de nosotros Jesús.**\n\nJesús, óyenos,\n**Jesús, óyenos.**\n\nJesús, escúchanos,\n**Jesús, escúchanos.**\n\n[TITULO]Oración[/TITULO]\nTe pedimos Señor que quienes veneremos el Santísimo Nombre de Jesús disfrutemos en esta vida de la dulzura de su gracia y de su gozo eterno en el Cielo.\n\nPor Jesucristo nuestro Señor. Amén.'
  }
];

export default function DevocionesJesusScreen() {
  const [devocionSeleccionada, setDevocionSeleccionada] = useState<Devocion | null>(null);

  const renderTextoConTitulos = (texto: string) => {
    const partes = texto.split(/\n(?=[IVX]+ Estación|Oración Preparatoria)|\n(?=V\. Te adoramos)/);
    return (
      <>
        {partes.map((parte, index) => {
          if (parte.match(/^[IVX]+ Estación/)) {
            const [titulo, ...resto] = parte.split('\n');
            return (
              <React.Fragment key={index}>
                <Text style={[styles.devocionTitulo, styles.estacionTitulo]}>{titulo}</Text>
                <Text style={styles.oracionTexto}>{resto.join('\n')}</Text>
              </React.Fragment>
            );
          } else if (parte.startsWith('Oración Preparatoria')) {
            const [titulo, ...resto] = parte.split('\n');
            return (
              <React.Fragment key={index}>
                <Text style={styles.subtitulo}>{titulo}</Text>
                <Text style={styles.oracionTexto}>{resto.join('\n')}</Text>
              </React.Fragment>
            );
          } else {
            return <Text key={index} style={styles.oracionTexto}>{parte}</Text>;
          }
        })}
      </>
    );
  };

  return (
    <>
      <Stack.Screen 
        options={{
          title: devocionSeleccionada ? devocionSeleccionada.titulo : 'Devociones a Nuestro Señor Jesucristo',
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
            <>
              {devociones.map((devocion) => (
                <TouchableOpacity 
                  key={devocion.id}
                  style={styles.devocionItem}
                  onPress={() => setDevocionSeleccionada(devocion)}
                >
                  <Text style={styles.devocionItemTitulo}>{devocion.titulo}</Text>
                </TouchableOpacity>
              ))}
              <TouchableOpacity 
                style={styles.devocionItem}
                onPress={() => router.push('/devociones/via-crucis')}
              >
                <Text style={styles.devocionItemTitulo}>Vía Crucis</Text>
              </TouchableOpacity>
            </>
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
  oracionTexto: {
    fontSize: 20,
    lineHeight: 30,
    textAlign: 'justify',
    marginBottom: 20,
    color: '#000000',
  },
  negrita: {
    fontWeight: 'bold',
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
    color: Colors.primary,
    marginVertical: 10,
    textAlign: 'center',
  },
  estacionTitulo: {
    fontSize: 24,
    marginTop: 20,
    marginBottom: 10,
  },
  cardContent: {
    alignItems: 'center',
  },
  cardDescription: {
    fontSize: 16,
    color: Colors.text,
    textAlign: 'center',
    marginTop: 8,
  },
}); 