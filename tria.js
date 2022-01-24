let readlineSync = require('readline-sync');
let acabar = false;
let resposta = false;
let pregunta = null;
let nom = null;
let index = -1;
let cardinal = null;
//Latoan = 0, BoscFarone = 1, PratFarone = 2, Kakariko = 3, DesertGerudo = 4, Ciutadela = 5, MontanyaMort = 6, TempleTemps = 7, CastellHyrule = 8;
const localitzacions = [{text: 'Ara mateix et trobes al BOSC de LATOAN, al NORD hi ha el BOSC de FARONE', nord: 1},
                        {text: 'Ara estas al BOSC de FARONE, al NORD hi ha el PRAT de FARONE, al SUD hi ha el BOSC de LATOAN, al OEST hi ha KAKARIKO i al EST hi ha el DESERT de GERUDO', nord: 2, sud: 0, oest: 3, est: 4},
                        {text: 'Ara estas al PRAT de FARONE, al NORD hi ha la CIUDADELA, al SUD hi ha el BOSC de Farone', nord: 7, sud: 1},
                        {text: 'Ara estas a la ciutat de KAKARIKO, al NORD hi ha la MONTANYA de la MORT i al EST hi ha el BOSC de FARONE', nord: 5, est: 1},
                        {text: 'Ara estas al DESERT de GERUDO, al NORD hi ha el TEMPLE del TEMPS i al OEST hi ha el BOSC de FARONE', nord: 6 , oest: 1},
                        {text: 'Ara estas a la MONTANYA DE LA MORT, al SUD hi ha KAKARIKO', sud: 3},
                        {text: 'Ara estas al TEMPLE del TEMPS, al SUD hi ha el DESERT de GERUDO', sud: 4},
                        {text: 'Ara estas a la CIUTADELA, al NORD hi ha el CASTELL de HYRULE i al SUD hi ha el PRAT de FARONE', nord: 8, sud: 2},
                        {text: 'Ara estas al CASTELL de HYRULE, al SUD hi ha la CIUTADELA', sud: 7}]

const intro = 'Benvingut adventurer! Has arribat a Hyrule, un regne gobernat per un rei en el que hi mana la pau...\nFins que un dia...\nUn antic esser maligne es va aconseguir alliberar de la seva presso i va sembrar el caos per alla on passava...';
const intro2 = 'Ara recau en tu adventurer la responsabilitat de derrotar al esser maligne i que torni la pau a Hyrule...\nEstas llest per empendre aquesta aventura? (Si o No)\n';
const noEntenc = `No se que has dit, estas llest per l'aventura Si o No??\n`;
const respostaSi = `Aquesta es la actitud... abans de continuar, com et dius adventurer? `;
const respostaNo = `Vaja... suposo que no seras l'indicat per salvar Hyrule. Ara sisplau, torna per on has vingut.`;
const TrueHero = `... Es un nom digne d'un heroi... No ens hem vist abans?`;
const fraseSegon = 'Abans de continuar...\n Es perillos anar sol... Agafa aixo!\n*Has rebut la espasa llegendaria de la familia reial de Hyrule!*';
const OnVolsAnar = 'A on vols anar? (prem 1 per sortir)\n';

while (!(acabar)){
    
    MostraIntro();
    pregunta = Triar();

    while (!(resposta)){
        if (RespostaNula(ConvMinus(pregunta))){
            pregunta = readlineSync.question(noEntenc);
        } else {
            if (ConvMinus(pregunta)==="si"){
                nom = readlineSync.question(respostaSi);
                if (ConvMinus(nom)==="link"){
                    HeroiDelPassat(nom);
                } else {
                    NomQualsevol(nom);   
                }              
                index = 0;
                resposta = true;
            } else {
                console.log(respostaNo);
                resposta = true;
                acabar = true;
            }        
        }
    }
    while (index >= 0) {
        let lloc = localitzacions[index];
        console.log(lloc.text);
        let preguntalloc = readlineSync.question(OnVolsAnar);
        cardinal = ComprobarDireccio(preguntalloc);
        if (cardinal===1){
            index = lloc.nord; 
        }
        if (cardinal===2){
            index = lloc.sud; 
        } 
        if (cardinal===3){
            index = lloc.oest; 
        } 
        if (cardinal===4){
            index = lloc.est; 
        }
        if (preguntalloc === 1){
            index = -1;
            acabar = true;
        }
    }
}
function ComprobarDireccio (nseo) {
    nseo = nseo.toLowerCase();
    if (nseo ==='nord') return nseo = 1; //NORD
    if (nseo ==='sud') return nseo = 2; //SUD
    if (nseo ==='oest') return nseo = 3; //EST
    if (nseo ==='est') return nseo = 4; //OEST 
    return false;
}
function MostraIntro (){
    return console.log(intro);
}
function ConvMinus (paraula){
    return paraula.toLowerCase();
}
function Triar (){
    return resp = readlineSync.question(intro2);
}
function RespostaNula (paraula){
    if (paraula!=="si" && paraula!=="no"){
        return true;
    } else return false;
}
function HeroiDelPassat (nom){
    console.log(nom,TrueHero);
}
function NomQualsevol (nom){
    console.log(nom,'... quin nom mes extrany. ');
}