

## Plan: Echte Bilder in Galerie und Über-uns-Sektion einbauen

### Bilderzuordnung

| Bild | Verwendung | Beschreibung |
|------|-----------|-------------|
| Bild 1 – Mann im karierten Anzug | Galerie | "Massgeschneiderter Zweireiher – zeitlose Eleganz" |
| Bild 2 – Stoffmuster auf Tisch | Galerie | "Erlesene Stoffe – handverlesen für Sie" |
| Bild 3 – Beratung im Atelier | Galerie | "Persönliche Beratung – Ihr Stil, unser Handwerk" |
| Bild 4 – Kunde wird vermessen | Galerie | "Präzises Vermessen – die Basis perfekter Passform" |
| Bild 5 – Schneider an Nähmaschine | Über uns | Mit Beschriftung "Jack The Tailor" |

### Änderungen

**1. Assets kopieren** – Alle 5 Bilder in `src/assets/` speichern (z.B. `gallery-suit-real.jpeg`, `gallery-fabrics.png`, `gallery-beratung.png`, `gallery-vermessung.png`, `about-jack.png`).

**2. GallerySection.tsx umbauen**
- Kategorie-Filter und Platzhalter-Hinweis entfernen (nur 4 Bilder, Filter macht wenig Sinn).
- Einfaches elegantes Grid (2x2 auf Desktop) mit den 4 echten Bildern.
- Jedes Bild bekommt einen kurzen, eleganten Beschreibungstext der beim Hover oder permanent darunter angezeigt wird.
- Animationen und Hover-Effekte beibehalten.

**3. AboutSection.tsx anpassen**
- Das aktuelle Platzhalterbild durch Bild 5 (Schneider an Nähmaschine) ersetzen.
- Unter dem Bild den Text "Jack The Tailor" als elegante Beschriftung hinzufügen (z.B. als Name/Titel im gleichen Design-Stil).

