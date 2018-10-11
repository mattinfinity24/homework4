var pageCounter = 1
var nameContainer = document.getElementById("Names");
var emailContainer = document.getElementById("Names");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    var MyRequest = new XMLHttpRequest(); // XMLHttpRequest establishes connection with specified URL to send & receive data
    MyRequest.open('GET', 'https://jsonplaceholder.typicode.com/users');
    MyRequest.onload  = function () { // What happens after data is loaded
      var ourData = JSON.parse(MyRequest.responseText); // JSON.parse allows the console to read the script as JSON data)
      getHTML(ourData);
    };
MyRequest.send();
pageCounter++;
if (pageCounter > 1) {
    btn.classList.add("hide-me"); // Hides button after being clicked on.
}
});

document.getElementById('btn2').addEventListener
('click', loadREST)


function getHTML(data) {
    var htmlString = "";
        for (i = 0; i < data.length; i++) {
        htmlString += "<p> <i> <font color ='blue'>" + data[i].email + "</p> </i> </font>";
        }
        emailContainer.insertAdjacentHTML('beforeend', htmlString);
        };

function sortResults(prop, asc) { // Not sure why this isn't sorting
        htmlString = htmlString.sort(function(a, b) {
            if (asc) {
                return (a[prop] > b[prop]) ? 1 : ((a[prop] < b[prop]) ? -1 : 0);
            } else {
                return (b[prop] > a[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0);
             }
         });
            sortResults('email', true); // Not sure why this isn't sorting
        }


function loadREST() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
        let html = '';

        data.forEach(function(data){
            html += `
                <p>
                <font color="blue"><i>${data.name}</i></font>
                </p>
                `;
        });
        document.getElementById('Names').innerHTML = html;
    })
    .catch(function(error) {
        console.log(error);
        pageCounter++;
if (pageCounter > 1) {
    btn.classList.add("hide-me"); // Hides button after being clicked on.
}
    })
}
