# Auto Market

Vilnius Coding School baigiamasis darbas

Programa yra skirta, automobilių skelbimams ir užklausoms valdyti.

## Ką galima daryti

1. Pridėti, peržiūrėti, redaguoti, ištrinti automobilį.
2. Peržiūrėti automobilio informaciją ir nuotraukų galeriją.
3. Sukurti užklausą dėl pasirinkto automobilio.
4. Peržiūrėti, redaguoti ir ištrinti užklausas.
5. Patikrinti, privalomus laukus ir skaičių ribas formose.

## Naudoti įrankiai:

React, Vite, React Router, Node.js, Express, MongoDB ir Mongoose.


## Projekto  Struktūra:

1: client - React vartotojo sąsaja (frontend)
2: server - Express serveris ir MongoDB (backend)

## Paleidimas:

Reikia įdiegti Node.js (22.12) arba naujesnę versiją su npm. Taip pat reikalinga ir MongoDB prisijungimo eilutė.

### Serverio paleidimas 

Terminale atidaryti pagrindiniame projekto aplankale:

```powershell
cd server
npm install
```

Server aplankale sukurti (.env) failą:

```env
PORT=5000
MONGODB_URI=MONGODB_PRISIJUNGIMO-EILUTĖ
```

Vietoje MONGODB_PRISIJUNGIMO-EILUTĖ įrašyti savo MongoDB prisijungimo eilutę.
.env failas į GitHub nekeliamas.

Paleisti serverį:

```powershell
npm run dev
```

### Kliento paleidimas

Atidaryti kitą terminalą pagrindiniame projekto aplankale

```powershell
cd client
npm install
npm run dev
```

naršyklėje atidaryti Vite terminale nurodytą adresą http://localhost:5173.

Backend veikia adresu http://localhost:5000.

Naudojantis programa abu terminalai turi likti paleisti.




