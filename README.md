# Nightbird
Version lavet af Mathias Drægert Mose Andersen

### Notes
Min version af NightBird er lavet med [Next.js](https://nextjs.org/) og bruger [Contentful](https://www.contentful.com) til at levere og gemme data til hjemmesiden og til selve login og registerings data bliver håndteret igennem database [MySQL](https://www.mysql.com/), detaljer ses længere nede i denne readme fil

Instruktioner i denne readme fil burde få dig til at kunne se hele siden

#### SQL Server

Du kan lave en MySQL server med enten [MySQL](https://www.mysql.com/downloads/) eller [XAMPP](https://www.apachefriends.org/download.html) (Anbefalet til lokal test server ellers anbefales MySQL)

Execute nightbird.sql i din mysql database

SQL login details i koden:
```
host: 127.0 0.1
port: 3306
database: nightbird
user: nightbird
password: CoRiFIqoK7RIn1nAQonopAfiGo5OR7
```

#### Web Server

Du skal bruge følgende NPM kommandoer i en CMD konsol i den mappe denne fil ligger i (Kræver at du har [Node.js](https://nodejs.org/en)):

```bash
npm i
npm start
```

Åben [http://localhost:3000](http://localhost:3000) med din browser for at se mit resultat.

#### Login og Register Notes

Dette blev jeg ikke færdig med men var begyndt og grunden til at jeg ikke blev færdig var simpelthen tidspress