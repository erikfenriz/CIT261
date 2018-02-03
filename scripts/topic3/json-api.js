
(function () {
    fetch('https://content.guardianapis.com/search?api-key=9882b19e-81bb-4245-a67c-31fec90baee4')

        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var data = data.response.results;
            var ul = document.createElement("ul");
            for (var i = 0; i < data.length; i++) {
                var textNode = document.createTextNode(data[i].webTitle);
                var li = document.createElement("li");
                li.appendChild(textNode);
                ul.appendChild(li);
            }
            console.log(ul);
            addNewsIntoDOM(ul)

        })
        .catch(function (err) {
            console.log(err);
        });

})();

function addNewsIntoDOM(news) {
    var list = document.getElementById("news");
    list.appendChild(news);
}