# unit-convert-Intl
Libreria que contiene un conjunto de herramientas para la conversion de unidades, Mediante la  **[Api Intl](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Intl)**

Unit-Convert-Intl es una librería simple y eficiente que te permite realizar conversiones entre diversas unidades de medida. Con esta herramienta podrás convertir distancias entre unidades comunes como yardas, millas, kilómetros, centímetros e inches de manera sencilla y directa.

## Versión 1.0.0
La versión 1.0.0 de UnitConverter incluye funciones para realizar conversiones de distancia. Esta versión te permitirá convertir entre las siguientes unidades:

- Yardas
- Millas
- Kilómetros
- Centímetros
- Pulgadas (Inches)

### Instalación
 Para instalar la librería, usa npm:

```bash
npm install unit-convert-Intl
```
### Uso
A continuación se muestra cómo usar las funciones de conversión disponibles en la versión 1.0.0:

```typescript
import { Yard, Mile, Kilometer, Centimeter, Inch } from 'unit-converter-Intl';

// Convertir Yardas a metros
const metersFromYard = Yard.toMeter(5, {locale : 'es-ES', unitDisplay : 'long'});
console.log(`${5} yardas son ${metersFromYard}`);//  5 yardas son 4.572 metros

// Convertir Millas a kilómetros
const kilometersFromMile = Mile.toKilometer(3);
console.log(`${3} millas son ${kilometersFromMile} kilómetros`);

// Convertir Centímetros a pulgadas
const inchesFromCentimeter = Centimeter.toInch(100);
console.log(`${100} centímetros son ${inchesFromCentimeter} pulgadas`);
```
### Algunos Métodos disponibles son: 
- Yardas
	- toMeter(value: number): Convierte yardas a metros.
	- toKilometer(value: number): Convierte yardas a kilómetros.
	- toMile(value: number): Convierte yardas a millas.
	- toYard(value: number): Retorna el valor en yardas (sin conversión).
	- toFoot(value: number): Convierte yardas a pies.
	- toCentimeter(value: number): Convierte yardas a centímetros.
	- toInch(value: number): Convierte yardas a pulgadas.
- Millas
	- toMeter(value: number): Convierte millas a metros.
	- toKilometer(value: number): Convierte millas a kilómetros.
	- toMile(value: number): Retorna el valor en millas (sin conversión).
	- toYard(value: number): Convierte millas a yardas.
	- toFoot(value: number): Convierte millas a pies.
	- toCentimeter(value: number): Convierte millas a centímetros.
	- toInch(value: number): Convierte millas a pulgadas.


### Contribución
Si deseas contribuir al proyecto, por favor abre un "issue" o "pull request" con tus cambios o sugerencias. ¡Tu ayuda será bienvenida!

#### Licencia
Este proyecto está bajo la MIT License. Consulta el archivo LICENSE para más detalles.

