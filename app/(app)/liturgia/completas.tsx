import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { Text, View } from '../../../components/Themed';
import Colors from '../../../constants/Colors';
import { Stack } from 'expo-router';

export default function CompletasScreen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Completas',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.white,
        }}
      />
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.mainTitle}>Oración de la noche (Completas)</Text>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Invocación inicial</Text>
            <Text style={styles.versiculo}>V. Dios mío, ven en mi auxilio</Text>
            <Text style={styles.respuesta}>R. Señor, date prisa en socorrerme.</Text>
            <Text style={styles.text}>Gloria al Padre, y al Hijo, y al Espíritu Santo.</Text>
            <Text style={styles.text}>Como era en el principio, ahora y siempre,</Text>
            <Text style={styles.text}>por los siglos de los siglos. Amén.</Text>
            <Text style={styles.text}>Aleluya.</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Examen de conciencia</Text>
            <Text style={styles.text}>Hermanos, examinemos nuestra conciencia,</Text>
            <Text style={styles.text}>y arrepintámonos de nuestros pecados.</Text>
            <Text style={styles.text}>Yo confieso ante Dios todopoderoso</Text>
            <Text style={styles.text}>y ante vosotros, hermanos,</Text>
            <Text style={styles.text}>que he pecado mucho</Text>
            <Text style={styles.text}>de pensamiento, palabra, obra y omisión:</Text>
            <Text style={styles.text}>por mi culpa, por mi culpa, por mi gran culpa.</Text>
            <Text style={styles.text}>Por eso ruego a santa María, siempre Virgen,</Text>
            <Text style={styles.text}>a los ángeles, a los santos y a vosotros, hermanos,</Text>
            <Text style={styles.text}>que intercedáis por mí ante Dios, nuestro Señor.</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Himno</Text>
            <Text style={styles.text}>Antes que termine el día,</Text>
            <Text style={styles.text}>Creador del universo, te suplicamos</Text>
            <Text style={styles.text}>que por tu clemencia</Text>
            <Text style={styles.text}>seas nuestro protector y guardián.</Text>

            <Text style={styles.text}>Que se alejen los sueños</Text>
            <Text style={styles.text}>y las fantasías de la noche;</Text>
            <Text style={styles.text}>reprime a nuestro enemigo</Text>
            <Text style={styles.text}>para que no mancille nuestros cuerpos.</Text>

            <Text style={styles.text}>Concédenos, Padre piadosísimo,</Text>
            <Text style={styles.text}>y a tu Hijo único,</Text>
            <Text style={styles.text}>junto con el Espíritu Paráclito,</Text>
            <Text style={styles.text}>reinar por todos los siglos. Amén.</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Salmodia</Text>
            <Text style={styles.antifona}>Ant. 1: Sálvanos, Señor, despiertos, protégenos mientras dormimos, para que velemos con Cristo y descansemos en paz. Aleluya.</Text>

            <Text style={styles.salmoTitle}>Salmo 4</Text>
            <Text style={styles.salmoSubtitle}>Oración vespertina</Text>

            <Text style={styles.text}>Cuando te invoco, respóndeme, Dios, defensor mío;</Text>
            <Text style={styles.text}>tú que en el aprieto me diste anchura,</Text>
            <Text style={styles.text}>ten piedad de mí y escucha mi oración.</Text>

            <Text style={styles.text}>Y vosotros, ¿hasta cuándo ultrajaréis mi honor,</Text>
            <Text style={styles.text}>amaréis la falsedad y buscaréis el engaño?</Text>

            <Text style={styles.text}>Sabedlo: el Señor hizo milagros en mi favor,</Text>
            <Text style={styles.text}>y el Señor me escuchará cuando lo invoque.</Text>

            <Text style={styles.text}>Temblad y no pequéis,</Text>
            <Text style={styles.text}>reflexionad en el silencio de vuestro lecho.</Text>

            <Text style={styles.text}>Ofreced sacrificios legítimos</Text>
            <Text style={styles.text}>y confiad en el Señor.</Text>

            <Text style={styles.text}>Muchos son los que dicen: "¿Quién nos hará ver la dicha,</Text>
            <Text style={styles.text}>si la luz de tu rostro ha huido de nosotros?"</Text>

            <Text style={styles.text}>Pero tú, Señor, has puesto en mi corazón más alegría</Text>
            <Text style={styles.text}>que si abundara en trigo y en vino.</Text>

            <Text style={styles.text}>En paz me acuesto y en seguida me duermo,</Text>
            <Text style={styles.text}>porque tú solo, Señor, me haces vivir tranquilo.</Text>

            <Text style={styles.antifona}>Ant. 1: Sálvanos, Señor, despiertos, protégenos mientras dormimos, para que velemos con Cristo y descansemos en paz. Aleluya.</Text>

            <Text style={styles.antifona}>Ant. 2: Bajo la sombra de tus alas, protégeme, Señor. Aleluya.</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.salmoTitle}>Salmo 90</Text>
            <Text style={styles.salmoSubtitle}>El que habita al amparo del Altísimo</Text>

            <Text style={styles.text}>Tú que habitas al amparo del Altísimo,</Text>
            <Text style={styles.text}>que vives a la sombra del Omnipotente,</Text>
            <Text style={styles.text}>di al Señor: "Refugio mío, alcázar mío,</Text>
            <Text style={styles.text}>Dios mío, confío en ti."</Text>

            <Text style={styles.text}>Él te librará de la red del cazador,</Text>
            <Text style={styles.text}>de la peste funesta.</Text>
            <Text style={styles.text}>Te cubrirá con sus plumas,</Text>
            <Text style={styles.text}>bajo sus alas te refugiarás:</Text>
            <Text style={styles.text}>su brazo es escudo y armadura.</Text>

            <Text style={styles.text}>No temerás el espanto nocturno,</Text>
            <Text style={styles.text}>ni la flecha que vuela de día,</Text>
            <Text style={styles.text}>ni la peste que se desliza en las tinieblas,</Text>
            <Text style={styles.text}>ni la epidemia que devasta a mediodía.</Text>

            <Text style={styles.text}>Caerán a tu izquierda mil,</Text>
            <Text style={styles.text}>diez mil a tu derecha;</Text>
            <Text style={styles.text}>a ti no te alcanzará.</Text>

            <Text style={styles.text}>Tan sólo abre tus ojos</Text>
            <Text style={styles.text}>y verás la paga de los malvados,</Text>
            <Text style={styles.text}>porque hiciste del Señor tu refugio,</Text>
            <Text style={styles.text}>tomaste al Altísimo por defensa.</Text>

            <Text style={styles.text}>No se te acercará la desgracia,</Text>
            <Text style={styles.text}>ni la plaga llegará hasta tu tienda,</Text>
            <Text style={styles.text}>porque a sus ángeles ha dado órdenes</Text>
            <Text style={styles.text}>para que te guarden en tus caminos;</Text>
            <Text style={styles.text}>te llevarán en sus palmas,</Text>
            <Text style={styles.text}>para que tu pie no tropiece en la piedra;</Text>
            <Text style={styles.text}>caminarás sobre áspides y víboras,</Text>
            <Text style={styles.text}>pisotearás leones y dragones.</Text>

            <Text style={styles.text}>"Se puso junto a mí: lo libraré;</Text>
            <Text style={styles.text}>lo protegeré porque conoce mi nombre,</Text>
            <Text style={styles.text}>me invocará y lo escucharé.</Text>
            <Text style={styles.text}>Con él estaré en la tribulación,</Text>
            <Text style={styles.text}>lo defenderé, lo glorificaré;</Text>
            <Text style={styles.text}>lo saciaré de largos días,</Text>
            <Text style={styles.text}>y le haré ver mi salvación."</Text>

            <Text style={styles.antifona}>Ant. 2: Bajo la sombra de tus alas, protégeme, Señor. Aleluya.</Text>

            <Text style={styles.antifona}>Ant. 3: El Señor nos guarde de todo mal y nos lleve a la vida eterna. Aleluya.</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.salmoTitle}>Cántico de Simeon - Lc 2, 29-32</Text>
            <Text style={styles.antifona}>Ant.: Sálvanos, Señor, despiertos, protégenos mientras dormimos,
            para que velemos con Cristo y descansemos en paz.</Text>
            <Text style={styles.salmoSubtitle}>Nunc dimittis</Text>

            <Text style={styles.text}>Ahora, Señor, según tu promesa,</Text>
            <Text style={styles.text}>puedes dejar a tu siervo ir en paz.</Text>

            <Text style={styles.text}>Porque mis ojos han visto a tu Salvador,</Text>
            <Text style={styles.text}>a quien has presentado ante todos los pueblos</Text>

            <Text style={styles.text}>luz para alumbrar a las naciones</Text>
            <Text style={styles.text}>y gloria de tu pueblo Israel.</Text>

            <Text style={styles.antifona}>Ant.: Sálvanos, Señor, despiertos, protégenos mientras dormimos,
            para que velemos con Cristo y descansemos en paz.</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Oración</Text>
            <Text style={styles.text}>Visita, Señor, esta morada,</Text>
            <Text style={styles.text}>y aleja de ella todas las asechanzas del enemigo;</Text>
            <Text style={styles.text}>que tus santos ángeles habiten en ella</Text>
            <Text style={styles.text}>y nos guarden en paz,</Text>
            <Text style={styles.text}>y que tu bendición permanezca siempre con nosotros.</Text>
            <Text style={styles.text}>Por Jesucristo, nuestro Señor.</Text>
            <Text style={styles.text}>Amén.</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Bendición</Text>
            <Text style={styles.versiculo}>V. El Señor todopoderoso nos conceda una noche tranquila y una santa muerte.</Text>
            <Text style={styles.respuesta}>R. Amén.</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Antífona final de la Santísima Virgen</Text>
            <Text style={styles.antifona}>Dios te salve, Reina y Madre de misericordia,</Text>
            <Text style={styles.antifona}>vida, dulzura y esperanza nuestra,</Text>
            <Text style={styles.antifona}>Dios te salve.</Text>
            <Text style={styles.antifona}>A ti llamamos los desterrados hijos de Eva;</Text>
            <Text style={styles.antifona}>a ti suspiramos, gimiendo y llorando,</Text>
            <Text style={styles.antifona}>en este valle de lágrimas.</Text>
            <Text style={styles.antifona}>Ea, pues, Señora, abogada nuestra,</Text>
            <Text style={styles.antifona}>vuelve a nosotros esos tus ojos misericordiosos;</Text>
            <Text style={styles.antifona}>y después de este destierro muéstranos a Jesús,</Text>
            <Text style={styles.antifona}>fruto bendito de tu vientre.</Text>
            <Text style={styles.antifona}>¡Oh clemente, oh piadosa,</Text>
            <Text style={styles.antifona}>oh dulce Virgen María!</Text>
          </View>

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
    padding: 16,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.error,
    textAlign: 'center',
    marginBottom: 16,
  },
  section: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.error,
    marginBottom: 12,
    textAlign: 'center',
  },
  salmoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 4,
  },
  salmoSubtitle: {
    fontSize: 16,
    fontStyle: 'italic',
    color: Colors.error,
    marginBottom: 12,
  },
  text: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 8,
    textAlign: 'justify',
    lineHeight: 24,
  },
  versiculo: {
    fontSize: 16,
    color: Colors.text,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  respuesta: {
    fontSize: 16,
    color: Colors.text,
    marginBottom: 8,
    marginLeft: 16,
  },
  antifona: {
    fontSize: 16,
    color: Colors.primary,
    fontStyle: 'italic',
    marginVertical: 12,
    textAlign: 'justify',
  },
  italicText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: Colors.text,
    marginVertical: 8,
  },
}); 