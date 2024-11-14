function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      console.log(this.responseText )

      document.getElementById("demo").innerHTML = this.responseText;

    }
  }

  xhttp.open("GET", "http://sulixerver/~pepa/dolgozat/dolgozat.php?nev=Matthew");
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
