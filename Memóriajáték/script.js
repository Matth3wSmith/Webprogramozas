const kepek=["mcisti.jpg","cartman.png","szav.jpg","rezsi.jpg","fidesz.jpg","jobbik.jpg","gurcsany.jpg","tim.jpg","biran.jpg","michaelscott.png","kermitclorox.jpg","mcisti3.jpg","mcisti2.jpg"]
const kepDarab = kepek.length;
const pakli = [];
function init(){

    let asztal = document.getElementById("asztal");
    for (let i = 0; i < 4; i++){
        let sor = document.createElement("div")
        sor.classList.add("sor")
        for (let k = 0; k < 5; k++){
            let karyta = document.createElement("div")
            karyta.classList.add("kartya")
            karyta.classList.add("kartyale")
            karyta.addEventListener("click", forditas)
            karyta.dataset.forditva=false
            sor.appendChild(karyta)
        }   
        asztal.appendChild(sor)
    }

}

function forditas(e){
    if (e.target.forditva){

        e.target.classList.add("kartyale")
        e.target.classList.remove("kartyafel")
    }
    else
    {
        
        e.target.classList.remove("kartyale")
        e.target.classList.add("kartyafel")
    }
}
