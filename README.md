# Xbox Logo – Bezier Curves (HTML5 Canvas & SVG)

## Opis projekta
Projekt prikazuje izris **Xbox logotipa** z uporabo **Bezierjevih krivulj** v jeziku **HTML5**.  
Logotip je izdelan na dva različna načina:
- z uporabo **HTML5 Canvas API-ja** in funkcije `bezierCurveTo()`
- z uporabo **SVG grafike** (`<svg>` in `<path>`)

Koordinate Bezierjevih krivulj so bile pridobljene s pomočjo programa **GIMP** z uporabo orodja **Potipoti (Paths Tool)**.

---

## Uporabljene tehnologije
- **HTML5**
  - `<canvas>`
  - `<svg>`
- **JavaScript**
  - `bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)`


---

## Canvas – `bezierCurveTo()`
Canvas različica uporablja JavaScript za izris logotipa z Bezierjevimi krivuljami.  
Vsaka krivulja je definirana z dvema kontrolnima točkama in končno točko, kar omogoča natančen in gladek izris oblike logotipa.

---

## SVG
SVG različica uporablja značko `<svg>` in element `<path>`, kjer so Bezierjeve krivulje definirane z ukazom `C`.  
Prednost SVG pristopa je boljša skalabilnost in neodvisnost od JavaScript kode.

---

## Rezultat
- Xbox logotip, izrisan z:
  - HTML5 Canvas (programski izris)
  - SVG (vektorski izris)
- Vizualno natančna reprodukcija originalnega znaka

---
## Navodila za uporabo 
- PNG logo je v glavi strani
- SVG logo je v nogi strani
- Canvas logo je na sredinski sliki -> barvo se mu zamenja z gumbom "CHANGE"
<img width="1906" height="916" alt="logotipi" src="https://github.com/user-attachments/assets/38570672-9c59-4780-a01d-242826a4d9ef" />

---

## Avtor
  <b>Žiga Černe Bralič</b><br>
  Dijak pri predmetu <b>NSA</b>
