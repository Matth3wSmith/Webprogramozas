const kepek=["mcisti.jpg","cartman.png","szav.jpg","rezsi.jpg","fidesz.jpg","jobbik.jpg","gurcsany.jpg","tim.jpg","biran.jpg","michaelscott.png","kermitclorox.jpg","mcisti3.jpg","mcisti2.jpg"]
const kepDarab = kepek.length;
let pakli = [];




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



function forditas(e){
    if (e.target.forditva){
        /*e.target.classList.add("kartyale")
        e.target.classList.remove("kartyafel")*/
        e.target.style.backgroundImage="none";
        //e.target.style.backgroundColor="green";
        e.target.forditva=false
    }
    else
    {
        /*e.target.classList.remove("kartyale")
        e.target.classList.add("kartyafel")*/
        e.target.style.backgroundImage=e.target.dataset.kepsrc;
        e.target.forditva=true
    }
}
