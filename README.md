![example workflow](https://github.com/kristiania-pg6301-2022/pg6301-innlevering-SimenTrovik/actions/workflows/test.yml/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/kristiania-pg6301-2022/pg6301-innlevering-SimenTrovik/badge.svg?branch=main)](https://coveralls.io/github/kristiania-pg6301-2022/pg6301-innlevering-SimenTrovik?branch=main)

Link til heroku: https://web-innlevering.herokuapp.com/quizPage

## Krav fra oppgavetekst:

* [x] Parcel
* [x] React
* [x] React Router
* [x] Jest
* [x] Github Actions
* [x] Coveralls
* [x] Express
* [x] Heroku
___
Oppsummert:
* [x] Få en Parcel til å bygge en React applikasjon
* [x] Få React Router til å navigere rundt i applikasjonen
* [x] Få React til å hente og lagre informasjon til et API
* [x] Få Github Actions til å kjøre Jest-testene og publisere coverage til Coveralls
* [x] Få Heroku til å publisere websidene
___
Express-serveren skal ha følgende API:
* [x] GET /api/question - returnerer et tilfeldig spørsmål med { id, category, question, answers }
* [x] POST /api/question - tar inn { id, answer } og returnerer "true" eller "false"
