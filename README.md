# Dominic Pohl · Bewerbung & Portfolio

Version 1 einer persönlichen Bewerbungswebsite für Remote-Aufgaben in Kundenservice, Support, Backoffice, digitaler Assistenz und KI-bezogener Arbeit. Die deutsche One-Page-Seite stellt praktische Berufserfahrung, Arbeitsweise, Interessen und das eigene App-Projekt PairFlow vor.

Die Website besteht aus HTML5, CSS3 und Vanilla JavaScript. Sie benötigt weder Build-Schritt noch Paketinstallation, Datenbank oder Backend. Alle Ressourcen liegen lokal; es gibt keine externen Fonts, Tracking-Skripte, Cookies, Web-Storage-Einträge oder Formulardienste.

## Projektstruktur

```text
dominic-portfolio/
├── index.html                 # Inhalte, Struktur und SEO-Metadaten
├── css/
│   └── styles.css             # Designvariablen, Layout, responsive Regeln
├── js/
│   └── main.js                # Mobilmenü, aktive Navigation und Jahreszahl
├── assets/
│   ├── icons/
│   │   └── favicon.svg        # Lokales DP-Favicon
│   ├── images/
│   │   └── dominic-pohl-profile.jpg
│   └── documents/
│       └── dominic-pohl-lebenslauf.pdf
├── .gitattributes            # Bereits vorhandene Zeilenenden-Konfiguration
├── .gitignore                # Lokale Hilfsdateien und Zugangsdaten ausschließen
├── .nojekyll                 # Statische Dateien auf GitHub Pages direkt ausliefern
└── README.md
```

Der ignorierte Ordner `.local/` enthält nur lokale Vorschau- und Prüfhilfen samt Screenshots und isolierten Browser-Testprofilen. Er ist kein Bestandteil der Website und soll nicht veröffentlicht werden.

## Lokal ansehen

1. Den Ordner `C:\Users\domin\Documents\GitHub\dominic-portfolio` öffnen.
2. `index.html` mit einem Browser öffnen, etwa per Doppelklick.
3. Nach Änderungen die Seite neu laden; bei veralteten Styles gegebenenfalls `Strg + F5` verwenden.

Auch ein direkter `file://`-Aufruf funktioniert. Es ist kein lokaler Server erforderlich.

Optional, **nur wenn Python bereits installiert ist**, im Projektordner einen lokalen Server starten:

```powershell
python -m http.server 8000 --bind 127.0.0.1
```

Anschließend `http://127.0.0.1:8000` öffnen. Mit `Strg + C` wird dieser Server beendet. Dieser Aufruf dient ausschließlich der lokalen Vorschau.

## Inhalte und Gestaltung ändern

- **Texte:** in `index.html` bearbeiten. Abschnitts-IDs wie `ueber-mich` und `projekte` werden von der Navigation verwendet. Werden sie geändert, die zugehörigen Links mit anpassen.
- **Farben:** zentral in `:root` in `css/styles.css` ändern. Helle und dunkle Flächen verwenden getrennte Farbvariablen. Textkontraste anschließend erneut prüfen.
- **Abstände, Schriften und Layout:** ebenfalls in `css/styles.css`. Die Seite nutzt Systemschriften, flexible Spalten und Anpassungen bei 1100, 900 und 620 Pixeln.
- **Verhalten:** in `js/main.js`. Das Skript verwendet keine Bibliotheken und speichert keine Besucherdaten.
- **Metadaten:** Seitentitel, Beschreibung und Open-Graph-Angaben stehen im `<head>` von `index.html`. Eine kanonische URL und `og:url` erst ergänzen, wenn die tatsächliche öffentliche Adresse feststeht. Ein Social-Vorschaubild ist noch nicht hinterlegt.

### Kontakt

Der Kontakt ist in `index.html` als `mailto:dominic.pohl@gmx.de` hinterlegt. Bei einer späteren Änderung sowohl den Link als auch die darunter sichtbare Adresse anpassen. Der Link übergibt die Adresse an das E-Mail-Programm des Besuchers; die Website selbst versendet nichts.

Ohne JavaScript bleiben Inhalte, Navigation, E-Mail-Link und beide Lebenslauf-Links zugänglich. Das Mobilmenü bleibt dann aufgeklappt; nur die dynamische Jahreszahl und die aktive Navigationsmarkierung entfallen.

### Profilfoto

Das freigegebene Foto liegt unter `assets/images/dominic-pohl-profile.jpg` (800 × 1000 Pixel). Die passenden HTML-Bildmaße reservieren den Platz vor dem Laden. Der Alt-Text lautet „Dominic Pohl“. Das Bild wird proportional dargestellt und für den Hero bevorzugt geladen. Bei einem späteren Austausch Bildmaße, Alt-Text und Darstellung auf Desktop und Smartphone erneut prüfen.

### Lebenslauf und Berufserfahrung

Die Berufserfahrung enthält sechs bestätigte Stationen in der Reihenfolge Lidl, freiberufliche digitale Kundenbetreuung, DOMSA Smoked BBQ, Harry-Brot, Weihe und ZASP. Die freigegebene öffentliche Lebenslauf-PDF liegt unter `assets/documents/dominic-pohl-lebenslauf.pdf` und ist im Hero sowie im Kontaktbereich als Download verlinkt. Beide Links verwenden den Dateinamen `Dominic_Pohl_Lebenslauf.pdf`.

PairFlow wird als eigenes, mit KI-Coding-Tools weiterentwickeltes Projekt beschrieben. Flutter und Firebase sind als **verwendete Projekttechnologien** gekennzeichnet, nicht als behauptete Programmierqualifikationen. Änderungen an dieser Website benötigen keinen Zugriff auf das PairFlow-Repository.

## Noch zu ergänzen

- [ ] `TODO_SOCIAL_LINKS`: optionale LinkedIn-/GitHub-Verlinkung, ausschließlich mit bestätigten Profil-URLs.
- [ ] `TODO_PROJECT_LINK`: optionaler, freigegebener PairFlow-Link.
- [ ] `TODO_PUBLIC_URL`: finale Seitenadresse für Canonical und Open Graph nach Veröffentlichung.

Die verbleibenden TODO-Markierungen stehen in HTML-Kommentaren und in dieser Dokumentation. Sie werden auf der Website nicht als Platzhaltertext angezeigt. Vollständige Wohnadresse, Geburtsdatum und Telefonnummer sind weder auf der Website noch in der öffentlichen Lebenslauf-PDF enthalten.

## GitHub Pages später aktivieren

Die Seite ist für die Veröffentlichung aus dem Repository-Hauptverzeichnis vorbereitet. Relative Ressourcenpfade funktionieren auch unter einem Repository-Unterpfad. Es wurde keine eigene GitHub-Actions-Pipeline angelegt und noch nichts veröffentlicht, committet oder gepusht.

Erst wenn Inhalte geprüft sind und die Veröffentlichung gewünscht ist:

1. Die Website-Dateien bewusst lokal committen und in das zugehörige GitHub-Repository pushen. `.local/` bleibt ausgeschlossen.
2. Im GitHub-Repository **Settings → Pages** öffnen.
3. Unter **Build and deployment → Source** die Option **Deploy from a branch** auswählen.
4. Den gewünschten Branch (hier aktuell `main`) und **/(root)** auswählen, anschließend **Save**.
5. Die von GitHub angezeigte Seitenadresse nach erfolgreicher Veröffentlichung prüfen. Danach `TODO_PUBLIC_URL` ergänzen.

Für GitHub Free ist GitHub Pages für öffentliche Repositories verfügbar. Die genaue Einrichtung beschreibt die [offizielle GitHub-Pages-Anleitung](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## Qualitätsprüfung vor Veröffentlichung

Lokal geprüft am 4. Oktober 2026 mit vorhandenem Chrome, Edge und Firefox; keine Frameworks, Bibliotheken oder Browser installiert:

- Darstellung bei **375, 390, 768, 1024, 1280, 1440 und 1920 Pixeln**: keine horizontalen Überläufe; proportionale Bilddarstellung und konsistente Abschnittsnummern.
- Zusätzlich echter **200-%-Browserzoom** in einem isolierten Chrome-Testprofil bei 1440 Pixeln Fensterbreite geprüft: kein horizontaler Überlauf.
- Mobile Navigation per Klick und Tastatur; Skip-Link, sichtbarer Fokus, Schließen nach Linkwahl, Escape, Außenklick und Wechsel zur Desktopbreite.
- Direkte Fragment-Aufrufe, aktive Navigation, Jahreszahl und Nutzung ohne JavaScript geprüft.
- `prefers-reduced-motion`: weiches Scrollen und Übergänge deaktiviert.
- HTML-Verschachtelung, Überschriftenhierarchie, IDs, Anker, ARIA-Verweise, relative Pfade und Dateinamen geprüft.
- JavaScript-Syntax und CSS-Deklarationen kontrolliert; keine Browserfehler bei den geprüften Abläufen.
- Verwendete Text-Farbpaare rechnerisch geprüft: mindestens 5,0:1.
- Beide Lebenslauf-Downloads auf Desktop und Mobil in Chrome und Edge getestet; heruntergeladene Dateien stimmen bytegenau mit der öffentlichen PDF überein.
- E-Mail-Link und Tastaturaktivierung geprüft; keine E-Mail versendet und kein externes E-Mail-Programm gestartet.
- Beide PDF-Seiten gerendert und geprüft; PDF und Profilfoto beim Audit unverändert gelassen.
- Keine Drittanbieter-Anfragen, Cookies, Service Worker oder Local-/Session-Storage-Einträge festgestellt. Beim initialen Chrome-Test lag der gemessene Layout Shift (CLS) bei 0.
- Ressourcen zusätzlich unter einem lokalen Repository-Unterpfad getestet; keine Abhängigkeit von einem Backend oder einer lokalen Entwicklungsadresse.

Die lokalen Audit-Ergebnisse liegen ausschließlich im ignorierten Ordner `.local/audit/`. Safari, echte Mobilgeräte und Screenreader wurden nicht separat getestet; dies ist keine vollständige Barrierefreiheitszertifizierung. Nach Änderungen die betroffenen Darstellungen und Funktionen erneut prüfen. Die echte öffentliche URL wird erst nach Veröffentlichung ergänzt.
