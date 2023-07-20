# calcolo del prezzo del biglietto del treno

## Descrizione

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.

_L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca._

## Milestone 1

Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch'essa da scrivere in console.

## Milestone 2

Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l'utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.

## Processo

### Milestone 1

- inserire input html per il nome dell'utente
- inserire input html per la distanza percorsa
- inserire input html per scegliere o inserire l'età
- inserire un pulsante html
- collegare una costante al nome dell'utente
- collegare una costante al numero dei kilometri inseriti
- collegare una costante all'età del viaggiotore
- creare costante per il prezzo a kilometro
  - **se** l'utente è sotto i 18 anni
    - sconto del 20% sul totale
  - **se** l'utente è sopra i 65 anni
    - sconto del 40% sul totale
  - **altrimenti**
    - prezzo pieno
  - ricevere il risultato in console.log

### Milestone 2

- inserire gli input dentro un container
  - inserire titolo nel container
  - inserire gli input ed i pulsanti dentro una card
- inserire un output preview dentro un container
  - inserire mockup del biglietto del treno
  - stampare il costo finale nella sezione "costo del biglietto"
