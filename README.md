# unit-convert-Intl
Librería que contiene un conjunto de herramientas para la conversión de unidades, mediante la **[API Intl](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Intl)**.

Unit-Convert-Intl es una librería simple y eficiente que te permite realizar conversiones entre diversas unidades de medida. Con esta herramienta podrás convertir distancias, masas y ahora volúmenes entre unidades comunes de manera sencilla y directa.

---

## Novedades en la versión 1.2.0
**¡Nuevo!** Esta versión introduce soporte para la conversión de unidades de volumenes. Ahora puedes trabajar con unidades como:

- **Cubic Meter** («metro cúbico»)
- **Pint** («pinta»)
- **Cup** («taza»)
- **Tablespoon** («cucharada»)

Estas nuevas funciones permiten realizar conversiones precisas y personalizadas, adaptándose al formato y configuración regional del usuario.

Ejemplo de uso:

```typescript
import { CubicMeter, Pint, Cup, Tablespoon } from 'unit-convert-Intl';

// Convertir metros cúbicos a litros
const litersFromCubicMeter = CubicMeter.toLiter(2, { locale: 'es-ES', unitDisplay: 'long' });
console.log(`${2} metros cúbicos son ${litersFromCubicMeter}`);

// Convertir pintas a mililitros
const millilitersFromPint = Pint.toMilliliter(3);
console.log(`${3} pintas son ${millilitersFromPint} mililitros`);

// Convertir tazas a cucharadas
const tablespoonsFromCup = Cup.toTablespoon(1);
console.log(`1 taza son ${tablespoonsFromCup} cucharadas`);
```

---

## Versión 1.1.0
La versión 1.1.0 incluye funciones para realizar conversiones de masas además de las de distancia presentes en versiones anteriores:

- **Kilogram**
- **Gram**
- **Ton**
- **Milligram**
- **Microgram**
- **Pound**
- **Stone**
- **Ounce**

## Versión 1.0.4
La versión 1.0.4 incluye funciones para realizar conversiones de distancia:

- **Yard**
- **Mile**
- **Kilometer**
- **Centimeter**
- **Inch**

### Instalación
Para instalar la librería, usa npm:

```bash
npm install unit-convert-Intl
```

### Uso General
A continuación se muestra un ejemplo general del uso de las funciones de conversión:

```typescript
import { Yard, Kilometer, Gram } from 'unit-convert-Intl';

// Convertir Yardas a metros
const metersFromYard = Yard.toMeter(5, { locale: 'es-ES', unitDisplay: 'long' });
console.log(`${5} yardas son ${metersFromYard}`);

// Convertir Millas a kilómetros
const kilometersFromMile = Kilometer.toMile(3);
console.log(`${3} kilómetros son ${kilometersFromMile} millas`);

// Convertir gramos a kilogramos
const kilogramsFromGram = Gram.toKilogram(1000);
console.log(`${1000} gramos son ${kilogramsFromGram} kilogramos`);
```

### Contribución
Si deseas contribuir al proyecto, por favor abre un "issue" o "pull request" con tus cambios o sugerencias. ¡Tu ayuda será bienvenida!

### Licencia
Este proyecto está bajo la MIT License. Consulta el archivo LICENSE para más detalles.