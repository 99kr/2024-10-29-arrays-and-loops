# 2024-10-29-arrays-and-loops

Exercises on arrays and loops

## Exercises

När ni svarar på uppgifterna, gör det med `consol.log` och skriv in svaren i er js-fil med hjälp av kommentarer.

1. Utgå ifrån array nedanför. Skriv ut namnet på index-position 3. Vilket namn skrivs ut och varför?

```js
const names = ['Zlatan', 'Beckham', 'Zidane', 'Maradona', 'Pele', 'Ronaldo']
```

2. I samma array, lägg till namnet "Drogba" i slutet av arrayen med hjälp av `push()`. Vad är returvärdet av den metoden?

3. Lägg nu till namnet "Figo" i börja av arrayen. Vilken metod använder du för att gära det och vad är returnvärdet av den metoden?

4. Ta nu bort det sista namnen från array med `pop()`. Logga ut returvärdet av den metoden.

5. Vid det här laget så bör du ha motsvarande array nedan. Hur kan du flytta namnet "Ronaldo" från sluten av arrayen till början av arrayen? Visa i kod samt förklara varför du gör som du gör.

```js
const names = ['Figo', 'Zlatan', 'Beckham', 'Zidane', 'Maradona', 'Pele', 'Ronaldo']
```

6. Vid det här laget hoppas jag att du märkt att de metoderna som du har använt påverkar ursprungs-arrayn, alltså den modifierar den befintliga arrayen. Detta kallas för att en metod är "destruktiv". Så även fast vi definierar arrayen med en `const`-variabel så tillåts vi ändå att modifiera arrayn. Vad kan detta bero på?

<details>
<summary>Hint..</summary>
Kika på begreppen "passed by reference" och "passed by value"
</details>
<br>

7. Utgå från arrayen nedan. Använd metoden `includes()` för att kontrollera om "Messi" finns i arrayen. Vad blir resultatet, och vad innebär det?

    ```js
    const players = ['Zlatan', 'Beckham', 'Zidane', 'Ronaldo', 'Romario', 'Maradona']
    ```

8. Kontrollera om "Zlatan" finns i "players"-arrayen med `includes()`. Om han finns, logga ut en bekräftande text, t.ex. "Zlatan är med i listan!" Annars loggar du ut "Zlatan är inte med i listan."

9. Skriv ut indexet för "Maradona" i arrayen "players" med hjälp av `indexOf()`. Vad är resultatet och varför?

10. Använd `indexOf()` för att försöka hitta indexet för "Messi" i "players". Vad returnerar `indexOf()` när elementet inte finns i arrayen, och hur kan den informationen vara användbar?

11. Kombinera alla namn i "players" till en sträng där varje namn är separerat med ett kommatecken och ett mellanslag (, ). Använd `join()` för att göra detta och logga resultatet.

12. Använd `join()` för att skapa en sträng av alla namn i "players", separerade med ett " - ". Vilket resultat får du?

13. Använd `splice()` för att ta bort "Beckham" och "Zidane" från "players". Logga resultatet och beskriv hur `splice()` fungerar i detta fall.

14. Lägg till spelaren "Ronaldinho" på indexposition 2 i "players" med `splice()`. Vilken förändring sker i arrayen och vad returnerar `splice()`?

15. Kombinera `indexOf()` och `splice()` för att ta bort "Ronaldo" från arrayen, oavsett var i listan han befinner sig.

---

**Bra jobbat genom att komma så här långt! Låt oss börja öva på lite övningar där vi har metoder som retunerar nya arrayer.**

---

16. Använd `slice()` för att skapa en ny array från "players" som innehåller de tre första spelarna. Logga ut den nya arrayen och förklara varför `slice()` inte påverkar den ursprungliga arrayen.

17. Skapa en ny array med `slice()` som innehåller alla spelare från index 2 och framåt i "players". Vad innehåller den nya arrayen, och vad blir kvar i "players"?

18. Använd metoden `with()` för att ersätta spelaren på indexposition 1 i "players" med "Mbappé". Vad returnerar `with()`-metoden och påverkas den ursprungliga arrayen?

---

**Låt oss ny blanda i loops tillsammans med arrayer**

---

19. Utgå från arrayen nedan. Skriv en `for`-loop som skriver ut varje tal i arrayen.

```js
const numbers = [5, 8, 12, 20, 3]
```

20. Använd en `for`-loop för att summera alla tal i arrayen `numbers` ovan. Logga ut summan efter att loopen har körts klart.

21. Skriv en `for`-loop som letar efter det största talet i `numbers`. Logga det största värdet.

22. Skapa en ny array som heter `doubledNumbers`. Använd en `for`-loop för att fylla `doubledNumbers` med varje tal i `numbers` multiplicerat med 2.

23. Använd en `for`-loop för att räkna ut medelvärdet av talen i `numbers`. Logga ut medelvärdet.

24. Skriv en `for`-loop som hittar och loggar ut det minsta talet i `numbers`.

25. Skapa en ny array som heter `positiveNumbers` och fyll den med endast de positiva talen från arrayen nedan. Använd en `for`-loop och en `if`-sats.

26. Utgå från arrayen `mixedNumbers` nedan. Skriv en `for`-loop utan att använda index, där du loggar varje positivt tal.

    ```js
    const mixedNumbers = [3, -5, 12, -1, 8, -6]
    ```

27. Använd en `while`-loop för att logga alla tal i arrayen `numbers` från och med index 0. Avbryt loopen om talet är större än 10.

28. Utgå från arrayen `mixedNumbers` ovan. Använd en `while`-loop för att räkna hur många negativa tal det finns i arrayen. Logga antalet.

29. Skapa en array `words` med några ord i den, (exempel nedan). Använd en `for`-loop för att logga varje ord tillsammans med dess längd (antal bokstäver).

    ```js
    const words = ['banana', 'apple', 'kiwi', 'strawberry', 'peach']
    ```

30. Använd `words`-arrayen ovan och en `for`-loop för att bygga en ny sträng som består av de första bokstäverna i varje ord. Logga ut den nya strängen.

31. Skriv en `while`-loop som itererar genom arrayen `numbers` och loggar varje tal tills summan av de loggade talen överstiger 25.

32. Använd en `for`-loop utan index för att summera alla värden i arrayen `mixedNumbers`. Logga ut summan.

33. Skapa en array `temperatures` (exempel nedan) med några temperaturer i Celsius. Använd en `for`-loop för att hitta den högsta temperaturen. Därefter, logga både högsta temperaturen och dess index i arrayen.

    ```js
    const temperatures = [15, 22, 19, 30, 28, 18, 25]
    ```

34. Använd en `for`-loop för att räkna antalet ord i `words`-arrayen som innehåller fler än fem bokstäver.

35. Skriv en `while`-loop som räknar upp talen från `numbers`-arrayen ovan tills ett udda tal hittas. Avbryt loopen vid första udda talet och logga resultatet.
