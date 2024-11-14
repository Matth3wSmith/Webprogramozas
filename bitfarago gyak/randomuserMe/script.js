function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(JSON.parse(this.responseText))
      document.getElementById("demo").innerHTML = this.responseText;


      let valasz = JSON.parse(this.responseText);

      function Kartya(divID,nev,szuletes,kepUrl,email,telefonszam){
        this.DIV=document.getElementById(divID)
        this.szuletes=document.createElement("div")
        this.nev=document.createElement("div")
        this.kep=document.createElement("img")

        this.szuletes.innerHTML="Születési dátum: "+szuletes.split("T")[0]
        this.nev.innerHTML=[nev.title,nev.first,nev.last].join(" ")
        this.kep.src=kepUrl

        this.letrehozas=function(){
          this.DIV.appendChild(this.nev)
          this.DIV.appendChild(this.szuletes)
          this.DIV.appendChild(this.kep)

        }
      }
      let kartya1=new Kartya("adatok",valasz.results[0].name,valasz.results[0].dob.date,valasz.results[0].picture.large)
      kartya1.letrehozas()
      //Labirintus kitalálós játék gyakorlása
      //url sulixerver/~pepa/dolgozat/dolgozat.php
      /*
      console.log(valasz.results[0].picture.medium)
      let kep =  valasz.results[0].picture.large
      let nev = valasz.results[0].name

      let adatokDiv=document.getElementById("adatok")
      adatokDiv.innerHTML="";
      adatokDiv.innerHTML+="<img src="+kep+">"

      let nevH2 = document.createElement("h2")
      nevH2.innerHTML=[nev.title+".",nev.first,nev.last].join(" ")
      adatokDiv.appendChild(nevH2)

      let telefon=valasz.results[0].phone
      let telefonDiv=document.createElement("div")
      telefonDiv.innerHTML="Telefonszám: "+telefon
      adatokDiv.appendChild(telefonDiv)

      let email=valasz.results[0].email
      let emailDiv=document.createElement("div")
      emailDiv.innerHTML="E-mail cím: "+email
      adatokDiv.appendChild(emailDiv)

      let szuletes=valasz.results[0].dob
      let szuletesDiv=document.createElement("div")
      szuletesDiv.innerHTML="Születési idő: "+szuletes.date.split("T")[0]
      adatokDiv.appendChild(szuletesDiv)
    */
    }
  };
  xhttp.open("GET", "https://randomuser.me/api/?nat=gb");
  xhttp.send();
}

function loadDocPOST() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(JSON.parse(this.responseText))
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("POST", "https://randomuser.me/api/");
  xhttp.setRequestHeader("Content-type", "application/json");
  xhttp.send();
}
