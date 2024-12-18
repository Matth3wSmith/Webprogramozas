2. feladat
    SELECT kozterulet FROM ingatlan GROUP BY kozterulet ORDER BY kozterulet;

3. feladat
    SELECT hazszam, ar FROM ingatlan INNER JOIN hirdetes ON hirdetes.ingatlanid=ingatlan.id WHERE kozterulet = "Agyagos utca";

4. feladat
    SELECT COUNT(ar) * 0.015 AS bevetel FROM hirdetes WHERE allapot = "eladva" and datum LIKE "2021%";

5. feladat
    SELECT MAX(ar) / MIN(ar) AS arany FROM hirdetes;

6. feladat