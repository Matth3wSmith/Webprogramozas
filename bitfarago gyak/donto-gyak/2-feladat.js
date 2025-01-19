
function Sorsolas(){
    let talaltok=0;
    let max = Number(document.getElementById("max").value)
    let mennyiseg=Number(document.getElementById("mennyiseg").value)
    let sorsoltP=document.getElementById("sorsolt")
    let sajatP=document.getElementById("sajat")
    let talalatP=document.getElementById("talalat")
    let sajatNumber = document.getElementById("szamok").value.split(" ")

    talalatP.innerHTML=0;
    sajatP.innerHTML="";
    sorsoltP.innerHTML="";

    sajatNumber=sajatNumber.map(szam => {
        return Number(szam)
    })
    sajatNumber=sajatNumber.sort()
    let sorsolt=[]
    for (let i = 0; i< mennyiseg; i++){
        let random=Math.floor(Math.random()*max+1);

        while (sorsolt.includes(random)){
            random=Math.floor(Math.random()*max+1);
        }

        sorsolt[i]=random;
        sorsoltP.innerHTML+=sorsolt[i]+", "
        sajatP.innerHTML+=sajatNumber[i]+", "
        if (sajatNumber.includes(sorsolt[i])){
            talaltok++
        }
    }
    
    talalatP.innerHTML=talaltok+" "


}