const kepek=["mcisti.jpg","cartman.png","szav.jpg","rezsi.jpg","fidesz.jpg","jobbik.jpg","gurcsany.jpg","tim.jpg","biran.jpg","michaelscott.png","kermitclorox.jpg","mcisti3.jpg","mcisti2.jpg"]
const kepDarab = kepek.length;
let pakli = [];

let felforditott = [];


function init(){

    let asztal = document.getElementById("asztal");
    let id = 0;

    for (let i = 0; i < 4; i++){
        //let sor = document.createElement("div");
        let tempPakliSor=[];
        //sor.classList.add("sor");

        for (let k = 0; k < 5; k++){
            let kartya = document.createElement("div");

            kartya.classList.add("kartya");
            kartya.classList.add("kartyale");
            kartya.id=id;

            kartya.dataset.kepsrc=`url(img/${kepek[Math.floor(id/2)]})`;
            kartya.style.backgroundColor="green";

            kartya.addEventListener("click", forditas);
            kartya.dataset.forditva=false;
            //sor.appendChild(karyta);
            pakli.push(kartya);
            id++;
        }   
        //asztal.appendChild(sor);
    }

    pakli=shuffleArray(pakli);
    id = 0;
    for (let i = 0; i < 4; i++){
        let sor = document.createElement("div");
        sor.classList.add("sor");

        for (let k = 0; k < 5; k++){
            
            sor.appendChild(pakli[id])
            id++;
        }
        asztal.appendChild(sor);

    }


}

function shuffleArray(array) {
    for (let i = array.length - 1; i >= 1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function egyenloE(){
    console.log(felforditott)
    if (felforditott[0].dataset.kepsrc==felforditott[1].dataset.kepsrc){
        felforditott[0].removeEventListener("click",forditas);
        felforditott[1].removeEventListener("click",forditas);
        felforditott=[];

        console.log("EGYENLŐ")
        checkGameOver();
    }
    else{
        setTimeout(visszaFordit,2000)
        console.log("NEM EGYENLŐ")
    }
}

function visszaFordit(){
    for (let i = 0; i < felforditott.length; i++){
        felforditott[i].style.backgroundImage="none";
        felforditott[i].forditva=false;
    }
    felforditott=[];
}


function forditas(e){
    console.log("forditas")
    if (felforditott.length<2 && !e.target.forditva){
        e.target.style.backgroundImage=e.target.dataset.kepsrc;
        felforditott.push(e.target)
        e.target.forditva=true
    }

    if (felforditott.length>=2){
        egyenloE()
    }
}

function checkGameOver(){
    let gameover = true;
    for (let i = 0; i < pakli.length && gameover; i++)
    {
        gameover&=pakli[i].style.backgroundImage!=="none";
    }
    if (gameover){
        console.log('GAME OVER')
        let vege = document.createElement("p");
        vege.innerHTML="Vége a játéknkak";
        document.body.appendChild(vege);
    }
}
