document.getElementById('form').addEventListener('submit', save);

function save(e) {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    let list = {
        name: name,
        email: email
    };


    if (localStorage.getItem('listItems') === null) {
        let listItems = [];
        listItems.push(list);
        localStorage.setItem('listItems', JSON.stringify(listItems));
    } else {
        let listItems = JSON.parse(localStorage.getItem('listItems'));
        listItems.push(list);
        localStorage.setItem('listItems', JSON.stringify(listItems));
    }

    getData();

    e.preventDefault();
}

function getData() {
    let listItems = JSON.parse(localStorage.getItem('listItems'));
    let results = document.getElementById('output');

    results.innerHTML = '';

    for (let i = 0; i < listItems.length; i++) {
        let name = listItems[i].name;
        let email = listItems[i].email;

        results.innerHTML += '<div class="smell">' +
            '<h3>' + name + '</h3>' +
            '<p><span class="glyphicon glyphicon-user"> </span> ' + email + '</p>' + '</div>';
    }
}
