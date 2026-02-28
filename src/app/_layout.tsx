/*
  * Los archivos _layout.js se ejecutan antes que cualquier
  * otro archivo de ruta, por lo tanto aqui se designa codigo
  * de inicializacion como:
  * const db = crearConexionBaseDeDatos();
  * en caso de ser necesario
  *
  * Se utilizan principalmente para definir la estructura de
  * ruteo del folder actual (raiz del proyecto). Expo router
  * utiliza el layout de Stack por defecto pero es bueno
  * declararlo de forma explicita por si se requiere
  * customizar despues
*/

import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    />
  );
}