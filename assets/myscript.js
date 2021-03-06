    const localitzacions = [
                        {text: 'Benvingut adventurer! Has arribat a Hyrule! Un regne gobernat per un rei en el que hi mana la pau... Fins que un dia... Un antic èsser maligne es va aconseguir alliberar de la seva pressó i va sembrar el caos per allà on passava... Ara recau en tu adventurer la responsabilitat de derrotar al èsser maligne i que torni la pau a Hyrule...Estàs llest per empendre aquesta aventura? (Prem el botó NORD per començar)', nord: 1, sud: null, est: null, oest: null, ubiActual:"INTRODUCCIÓ"},
                        {text: `T'has adentrat al BOSC de LATOAN, bosc que connecta la regió de Farone amb Latoan, el teu poble natal. Al NORD hi ha el BOSC de FARONE. On vols anar?`, nord: 2, sud: 0, est: null, oest: null, ubiActual: "BOSC de LATOAN"},
                        {text: 'Desprès de caminar una mica has aconseguit arribar al BOSC de FARONE. Al NORD hi ha el PRAT de FARONE, al SUD hi ha el BOSC de LATOAN, al OEST hi ha KAKARIKO i al EST hi ha el DESERT de GERUDO. On vols anar?', nord: 3, sud: 1, oest: 4, est: 5, ubiActual: "BOSC de FARONE"},
                        {text: `Desprès d'una llarga caminata i enfrentar-te a uns quants monstres que no et volien fer res de bó, has arribat al PRAT de FARONE. Al NORD hi ha la CIUTADELA, al SUD hi ha el BOSC de Farone. On vols anar?`, nord: 8, sud: 2, est: null, oest: null, ubiActual: "PRAT de FARONE"},
                        {text: 'Desprès de molt caminar has arribat al POBLE de KAKARIKO, al NORD hi ha la MONTANYA de la MORT i al EST hi ha el BOSC de FARONE. On vols anar?', nord: 6, sud: null, est: 2, oest: null, ubiActual: "KAKARIKO"},
                        {text: `No t'has adonat però estàs en mig del DESERT de GERUDO, al NORD hi ha el TEMPLE del TEMPS i al OEST hi ha el BOSC de FARONE. On vols anar?`, nord: 7, sud: null, est: null, oest: 2, ubiActual: "DESERT de GERUDO"},
                        {text: `Monstres... extranys passatges... no saps com però has arribat a la MONTANYA DE LA MORT, un volcà en erupció! Quina por! Millor tornar per on has vingut. Al SUD hi ha KAKARIKO. On vols anar?`, nord: null, sud: 4, est: null, oest: null, ubiActual:"MONTANYA DE LA MORT"},
                        {text: 'Un llarg camí sota el sol del desert, moltes pases desprès has aconseguit arribar al llegendari TEMPLE del TEMPS! Pero sembla que nomès són ruines plenes de pols... (de moment) millor tornar per on has vingut. Al SUD hi ha el DESERT de GERUDO. On vols anar?', nord: null, sud: 5, est: null, oest: null, ubiActual:"TEMPLE DEL TEMPS"},
                        {text: `Majestuosa... el centre d'Hyrule... on tothom hi vol viure, has arribat a la CIUTADELA. Al NORD hi ha el CASTELL de HYRULE i al SUD hi ha el PRAT de FARONE. On vols anar?`, nord: 9, sud: 3, est: null, oest: null, ubiActual:'CIUTADELA'},
                        {text: `Desprès de recorrer un llarg passatge desde la ciutat, has arribat al CASTELL de HYRULE, on es troba malvat GANONDORF, el Rei Tenebre. Estas llest per enfrentar-te a ell? Prem NORD per continuar o prem SUD per tornar a la CIUTADELA. Que vols fer?`, nord: 10, sud: 8, est: null, oest: null, ubiActual:'CASTELL de HYRULE'},
                        {text: 'Sembla que has arribat al final del primer capítol... Per continuar la historia et tindrás que esperar al següent DLC...', nord: 0, sud: 0, est: 0, oest: 0, ubiActual:"FINAL"},
                    ]
    let cardinal = 0;
    let text = document.querySelector('.text');
    let ubi = document.querySelector('.ubicacio');
    assignarText();

    function assignarText(){
        text.textContent = localitzacions[cardinal].text;
        ubi.textContent = localitzacions[cardinal].ubiActual;
    }
    function ferNord() {
        if (localitzacions[cardinal].nord!==null){
            cardinal = localitzacions[cardinal].nord;
            assignarText();
            ComprobarFinal();
        }
    }
    function ferSud() {
        if (localitzacions[cardinal].sud!==null){
            cardinal = localitzacions[cardinal].sud;
            assignarText();
        }
    }
    function ferEst() {
        if (localitzacions[cardinal].est!==null){
            cardinal = localitzacions[cardinal].est;
            assignarText();
        }
    }
    function ferOest() {
        if (localitzacions[cardinal].oest!==null){
            cardinal = localitzacions[cardinal].oest;
            assignarText();
        }
    }
    function ComprobarFinal (){
        if (cardinal===10){
            document.getElementById('btnFinal').style.display = 'inline';
            document.getElementById('btnNord').style.display = 'none';
            document.getElementById('btnSud').style.display = 'none';
            document.getElementById('btnEst').style.display = 'none';
            document.getElementById('btnOest').style.display = 'none';    
        }
    }
    function final(){
        text.textContent = localitzacions[0].text;
        ubi.textContent = localitzacions[0].ubiActual;
        document.getElementById('btnNord').style.display = 'inline';
        document.getElementById('btnSud').style.display = 'inline';
        document.getElementById('btnEst').style.display = 'inline';
        document.getElementById('btnOest').style.display = 'inline';
        document.getElementById('btnFinal').style.display = 'none';
    }