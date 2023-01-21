function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("demo").innerHTML =
                this.responseText;
        }
    };
    xhttp.open("GET", "blog.txt", true);
    xhttp.send();
}

const form = document.querySelector("form")


form.addEventListener('formdata', (e) => {
    console.log('formdata fired');
    e.preventDefault()
    // Get the form data from the event object
    const data = e.formData;
    for (const value of data.values()) {
        console.log(value);
    }
   console.log(data);
    // submit the data via XHR
    const request = new XMLHttpRequest();
    request.open("POST", "/formhandler",true);
    // request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    request.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
          document.getElementById("demo").innerHTML = this.responseText;
        }
      };
    request.send(data);
});




const button = document.querySelector(".btn-1");
const button2 = document.querySelector(".btn-2");
const button3 = document.querySelector(".btn-3");
button.addEventListener("click", loadDoc);
button3.addEventListener("click", fetcher);
button2.addEventListener("click", () => {
    form.style.display = "flex"
});


async function fetcher() {
    let res = await fetch('https://dummyjson.com/products');
    let data = await res.json()
    console.log(data);
}