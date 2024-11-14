var szamokOsztoinakSzama={}
for (let i = 2; i<=100; i++){
    let oszto=1;
    szamokOsztoinakSzama[i]=0;
    while (oszto<=i){
        if (i%oszto==0){
            szamokOsztoinakSzama[i]++
        }
        oszto++;
    }
}
console.log(szamokOsztoinakSzama)
function oszthatosag(id){
    let szam = Number(document.getElementById("bekeres").value)
    if(szam<2 || szam>100){
        alert("A megadott szám nem felel meg a megadott intervallumnak")
    }
    else{

        let szamOsztoi=0;
        let oszto=1;
        while (oszto<=szam){
            if (szam%oszto==0){
                szamOsztoi++;
            }
            oszto++;
        }
        let p=document.getElementById("p")
        console.log(szamOsztoi)
        for(key in szamokOsztoinakSzama){
            if(szamokOsztoinakSzama[key]<szamOsztoi){
                p.innerHTML+=String(key)+" "
            }
        }
    }
}