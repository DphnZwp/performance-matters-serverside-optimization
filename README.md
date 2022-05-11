> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# 🚐 Server-side optimalisatie voor de CTC website van sprint 6
Drie server-side performance optimalisaties toepassen op de smart zone pagina van CTC.

## Serverside Performance Optimalisatie
Beschrijf de website die je hebt geoptimaliseerd, voeg screenshots van de performance audit voor en na het uitvoeren en beschrijf de verbeterde performance. Met andere woorden, welke winst heb je behaald door dit allemaal te doen! Voeg de url en een screenshot van de geoptimaliseerde website toe.

### Voor het uitvoeren
Voor deze deeltaak heb ik de smartzone pagina van CTC geoptimaliseerd. De website was toen gemaakt met Node.js en Express. Hiervoor heb ik een performance audit gemaakt met behulp van Lighthouse en de Network tab van Google Chrome.

![Google chrome Lighthouse performance van 77](https://user-images.githubusercontent.com/69635977/167390941-7ad3d2d5-e5fe-4ddd-ba3b-e3fc123264d5.png)

![Schermafbeelding 2022-05-09 125727](https://user-images.githubusercontent.com/69635977/167396539-ae597e97-3fd0-4baf-a014-7c11a2e8459c.png)

### Na het uitvoeren
De performance van de is nu 90. De finish en load tijd van de website is nog steeds hetzelfde, omdat de afbeeldingen langzaam laden. DOMContentLoaded loaded is wel sneller.
![Schermafbeelding 2022-05-10 225737](https://user-images.githubusercontent.com/69635977/167720759-b90aace8-4252-49b9-9651-9c78999bdae8.png)

![Schermafbeelding 2022-05-10 223229](https://user-images.githubusercontent.com/69635977/167717121-84f5c724-3929-486f-a1d3-33035336a65e.png)

### Minifying
*Om de CSS codegrootte te verminderen en de website sneller te laten laden.*

Ik heb mijn CSS geminified door gebruik te maken van postcss met cssnano en autoprefix.

### Code splitting
*JavaScript bestanden voor aparte HTML bestanden.*

Ik heb geen client-side javascript. Dus dit is niet van toepassing.

### Caching
*De juiste caching levert enorme performance voordelen op, bespaart bandbreedte en verlaagt de serverkosten.*

De smart zones pagina heeft alleen test data, dus het heeft geen korte caching tijd nodig. Daarom heb ik de catching tijd op 1 dag gezet.

### Compressie
*Compressie in Node.js en Express vermindert de downloadbare hoeveelheid data die aan gebruikers zijn geserveerd. Door het gebruik van deze compressie is de JSON-reactie en andere statische bestanden reacties kleiner.*

Ik heb npm compression package gebruikt. Het makkelijk is om te gebruiken, omdat het twee regels code heeft.

## Bronnen
Beschrijf de door jou gebruikte bronnen om bovenstaande stappen uit te voeren.
- [https://postcss.org/](https://postcss.org/)
- [https://github.com/cssnano/cssnano](https://github.com/cssnano/cssnano)
- [https://regbrain.com/article/cache-headers-express-js](https://regbrain.com/article/cache-headers-express-js)
- [https://jakearchibald.com/2016/caching-best-practices/](https://jakearchibald.com/2016/caching-best-practices/)
- [http://expressjs.com/en/resources/middleware/compression.html](http://expressjs.com/en/resources/middleware/compression.html)

## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
