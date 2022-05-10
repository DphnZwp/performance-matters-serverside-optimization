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

### Minifying
Beschrijf welke bestanden je _minified_ hebt en waarom je dat gedaan hebt. Als je er bewust voor kiest bepaalde bestanden niet te minify-en dan beschrijf je ook waarom je dat niet gedaan hebt.

### Code splitting
Ik heb geen client-side javascript. Dus dit is niet van toepassing.

### Caching
Beschrijf welke caching opties je gekozen hebt en waarom je dat op deze manier doet.
Ik zet 

### Compressie
*Compressie in Node.js en Express vermindert de downloadbare hoeveelheid data die aan gebruikers zijn geserveerd. Door het gebruik van deze compressie is de JSON-reactie en andere statische bestanden reacties kleiner.*

Ik heb npm compression package gebruikt, omdat het makkelijk is om te gebruiken.

## Bronnen
Beschrijf de door jou gebruikte bronnen om bovenstaande stappen uit te voeren.

## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
