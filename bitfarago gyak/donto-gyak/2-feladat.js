
function Sorsolas(){
    let talaltok=0;
    let max = Number(document.getElementById("max").value)
    let mennyiseg=Number(document.getElementById("mennyiseg").value)
    let sorsoltP=document.getElementById("sorsolt")
    let sajatP=document.getElementById("sajat")
    let talalatP=document.getElementById("talalat")
    let sajatString = document.getElementById("szamok").value.split(" ")
    sajatNumber=sajatString.map(szam => {
        return Number(szam)
    })
    let sorsolt=[]
    for (let i = 0; i< mennyiseg; i++){
        let random=Math.floor(Math.random()*max+1);
        while(random in sorsolt){
            random=Math.random()*max+1;
        }
        sorsolt[i]=random;
        sorsoltP.innerHTML+=random+" "
        sajatP.innerHTML+=sajatString[i]+" "
        console.log(sajatNumber, random)
        if(random in sajatNumber){
            talaltok++
        }
    }
    
    talalatP.innerHTML+=talaltok+" "


}