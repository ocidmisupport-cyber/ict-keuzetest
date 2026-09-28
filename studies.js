const STUDIES=[
 {id:'medewerker',name:'Medewerker ICT',level:2,summary:'Je zorgt dat collega’s kunnen werken met hun computer, laptop of telefoon. Je maakt apparaten gebruiksklaar, installeert en onderhoudt software, neemt ICT-meldingen aan en monteert eenvoudige netwerkonderdelen. Je werkt vaak op een servicedesk of op de ICT-afdeling van een organisatie.',url:'https://www.ter-aa.nl/opleiding/medewerker-ict'},
 {id:'support',name:'ICT support technician',level:3,summary:'Je helpt gebruikers die problemen hebben met hun apparaten, programma’s of accounts. Je installeert en onderhoudt hardware en software, voert updates en back-ups uit en zorgt dat apparaten veilig kunnen werken op het netwerk. Je legt jouw oplossing duidelijk uit aan collega’s.',url:'https://www.ter-aa.nl/opleiding/ict-support-technician'},
 {id:'cloud',name:'Cloud specialist',level:4,summary:'Je helpt organisaties met het gebruiken van online systemen en opslag, zoals Microsoft Azure, AWS en Google Cloud. Je richt cloudomgevingen in, beheert ze en beveiligt gegevens. Ook denk je mee over hoe bedrijven veilig en slim kunnen overstappen naar de cloud.',url:'https://www.ter-aa.nl/opleiding/cloud-specialist'},
 {id:'cyber',name:'Cyber security specialist',level:4,summary:'Je beschermt systemen, netwerken en gevoelige gegevens tegen digitale aanvallen. Je onderzoekt risico’s, helpt incidenten afhandelen, geeft advies over veilig werken en zorgt dat een organisatie weerbaarder wordt tegen cyberaanvallen.',url:'https://www.ter-aa.nl/opleiding/cyber-security-specialist'},
 {id:'system',name:'ICT system engineer',level:4,summary:'Je zorgt dat computersystemen, informatiesystemen en netwerken goed blijven werken. Je richt systemen in, onderhoudt en beveiligt ze en adviseert gebruikers. Je werkt met echte hardware en leert onder andere over netwerken, cloud, cybersecurity en automatisering.',url:'https://www.ter-aa.nl/opleiding/ict-system-engineer'},
 {id:'network',name:'Network specialist',level:4,summary:'Je bent de specialist die zorgt dat bedrijven verbonden blijven. Je ontwerpt, beheert en beveiligt complexe netwerken en lost storingen op voordat het werk stilvalt. Je zorgt er ook voor dat bedrijfsgegevens beschikbaar én veilig blijven.',url:'https://www.ter-aa.nl/opleiding/network-specialist'},
 {id:'fullstack',name:'Full stack developer',level:4,summary:'Je ontwikkelt websites en apps van begin tot eind. Je werkt aan wat gebruikers zien, maar ook aan de techniek erachter: databases, servers en koppelingen. Je combineert programmeren, vormgeving en gebruiksvriendelijkheid om een volledig digitaal product te maken.',url:'https://www.ter-aa.nl/opleiding/full-stack-developer'},
 {id:'fullstack-en',name:'Full stack developer (tweetalig)',level:4,summary:'Je leert hetzelfde brede vak als bij Full stack developer: websites en apps ontwikkelen aan de voor- én achterkant. De opleiding heeft een tweetalige invulling, met veel Engels in lessen, lesmateriaal en toetsen, plus aandacht voor internationale oriëntatie.',url:'https://www.ter-aa.nl/opleiding/full-stack-developer-tweetalig'},
 {id:'game',name:'Game developer',level:4,summary:'Je bouwt virtuele werelden en games. Naast programmeren werk je met een game engine, 2D- en 3D-animaties, geluid en belichting. Je leert breed over softwareontwikkeling en kiest game development als specialisatie.',url:'https://www.ter-aa.nl/opleiding/game-developer'},
 {id:'game-en',name:'Game developer (tweetalig)',level:4,summary:'Je leert games ontwikkelen met programmeren, een game engine, animaties en virtuele werelden. De inhoud is gericht op softwareontwikkeling met een internationale, tweetalige invulling en extra aandacht voor Engels en internationale ervaringen.',url:'https://www.ter-aa.nl/opleiding/game-developer-tweetalig'},
 {id:'software',name:'Software engineer',level:4,summary:'Je bedenkt, ontwerpt, ontwikkelt en test computerprogramma’s. Je werkt in een ontwikkelteam aan applicaties voor bijvoorbeeld pc’s, telefoons of apparaten. Daarbij leer je ook goed luisteren naar de opdrachtgever, verbeteringen voorstellen en jouw werk presenteren.',url:'https://www.ter-aa.nl/opleiding/software-engineer'},
 {id:'software-en',name:'Software engineer (tweetalig)',level:4,summary:'Je leert programma’s ontwerpen, bouwen, testen en onderhouden in een ontwikkelteam. De inhoud is gelijk aan Software engineer, maar ruim de helft van de lessen, het lesmateriaal en de toetsen zijn in het Engels. Ook internationale samenwerking krijgt extra aandacht.',url:'https://www.ter-aa.nl/opleiding/software-engineer-tweetalig'}
];

/* Bewegend lichtstreepje op de rand van de opleidingen- en testpagina. */
const kaarten = document.querySelectorAll('.card');
const rondeDuur = 3200;

kaarten.forEach((kaart) => {
  const loper = document.createElement('span');
  loper.className = 'neon-runner';
  kaart.append(loper);
});

function beweegLopers(tijd) {
  const ronde = (tijd % rondeDuur) / rondeDuur;

  kaarten.forEach((kaart) => {
    const loper = kaart.querySelector('.neon-runner');
    const zijde = ronde * 4;
    const positie = (zijde % 1) * 84;

    if (zijde < 1) {
      loper.style.cssText = `top:1px;left:${positie}%;right:auto;bottom:auto;width:16%;height:2px`;
    } else if (zijde < 2) {
      loper.style.cssText = `top:${positie}%;right:1px;left:auto;bottom:auto;width:2px;height:16%`;
    } else if (zijde < 3) {
      loper.style.cssText = `bottom:1px;right:${positie}%;top:auto;left:auto;width:16%;height:2px`;
    } else {
      loper.style.cssText = `bottom:${positie}%;left:1px;top:auto;right:auto;width:2px;height:16%`;
    }
  });

  requestAnimationFrame(beweegLopers);
}

requestAnimationFrame(beweegLopers);
