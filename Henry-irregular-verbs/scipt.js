/*1. Az ige (függőlegesen) jobban középen jelenjen meg nagyobb betűméretben.
2. Nem színes. Lehetne mondjuk a háttérben egy brit zászló, vagy angliára jellemző kis képeken, emeletes busz, big ben, buckingham palota őr, angol telefon fülke stb, de ez mindegy, egyszínű rózsaszín is lehet azt mondták a 10c-s lányok.
3. jó lenne ha külön gombokkal lehetne behívni a tesztelendő adatbázist és nem betöltögetni, hanem legyen ott egy gomb h 88 ige, 101 ige, fonetikus átírású, stb. és amelyikre rákattintok azt az adatbázist indítja el a progi.
4. lehessen az egyes válaszokat minősítenem mondjuk két gombbal, egy right answer meg egy wrong answer gomb.
5. jo lenne ha számolná is nekem a jo és rossz adott válaszokat vagyis az én minősítéseimet ahogy kattintok, a végeredményt pedig kielemzi vagyis hogy 20 kérdezett igéből mondjuk 16 right 4 wrong és jelenítse meg h ez hány % irja ki nekem h ez 80%, az már csak hab lenne a tortán ha azt is kiirná h ez igy sajnos 4es. 🤣🤣🤣
6. jó lenne ha kiválaszthatnám a challange erősségét, és mondjuk 5 iget kerdező változatot is elindíthatnék de mondjuk lehetne 10 igés challenge és 20.
7. Jó lenne ha letelik a kiválasztott igemennyiségű játék és utána megállna, vagy nullázhatnám esetleg mondjuk bármikor pl a 4. válasz után vagy egyszerűen csak egy resettel ujra elindítani nulláról, stb.*/

const verbs88 = 
`be
become
begin
bend
bite
blow
break
bring
build
burn
buy
can
catch
choose
come
cost
cut
do
draw
drink
drive
eat
fall
feel
fight
find
fly
forget
get
give
go
grow
hang
have
hear
hide
hit
keep
know
lay
lead
learn
leave
lend
let
lose
make
mean
meet
overcome
pay
put
read
ride
ring
run
say
see
sell
send
set
shake
shine
shoot
show
shut
sing
sink
sit
sleep
smell
speak
spell
spend
spill
stand
steal
swim
take
teach
tell
think
throw
understand
wake
wear
win
write`.split("\n").map(szo => szo.trim())

let kiirt = 0;
let mennyiseg = 0;
let answers = [0,0];
let verbBox;
let repulo;

function main(){
}

function inditas(){
    let file =  document.getElementById("file").files[0];
    if (file){

    }
    else{
        //TOAST felnyitása
    }

    console.log(file);
    let test = document.getElementById("verbs").value
    let verbDiv = document.getElementsByClassName("verbBox")[0]

    mennyiseg = Number(document.getElementById("mennyiseg").value)
    verbDiv.classList.remove("hidden")
    //Siman kozepen a szöveg
    /*verbBox = verbDiv.children[0]*/

    //Repülő megjelenítése
    repulo = document.getElementsByClassName("cloud")[0];
    repulo.classList.add("repuloBe");
    repulo.classList.remove("hidden");

    //Repulőn rajta
    verbBox=document.getElementById("verbBox");

    answers = [0,0]

    verbBox.innerText = verbs88[Math.floor(Math.random()*verbs88.length)]


    let wrongBtn = document.getElementById("wrong")
    wrongBtn.addEventListener("click",wrong)
    let rightBtn = document.getElementById("right")
    rightBtn.addEventListener("click",right)

    /*for (let i = 0; i < mennyiseg; i++){

    }*/

}

function wrong(){
    answers[1]++;

    verbBox.innerText = verbs88[Math.floor(Math.random()*verbs88.length)]
    kiirt++;
    ellenorzes();
}

function right(){
    answers[0]++;

    verbBox.innerText = verbs88[Math.floor(Math.random()*verbs88.length)]

    kiirt++;
    ellenorzes();
}

function ellenorzes(){
    console.log(kiirt,mennyiseg);
    if (mennyiseg===kiirt){
        repulo.classList.remove("repuloBe");
        repulo.classList.add("repuloKi");

        repulo.addEventListener("animationend",eltunes);
        mennyiseg=0;
        kiirt=0;
        answers=[0,0];
    }
}

function eltunes(){
    console.log("eltűntem");
    repulo.classList.remove("repuloKi");
    repulo.classList.add("hidden");
    repulo.removeEventListener("animationend",eltunes);
}