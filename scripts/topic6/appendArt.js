let height, width, finalGrid, table, form, clickedTd, colorSelect;
height = document.getElementById('height');
width = document.getElementById('width');
table = document.getElementById('pixel_canvas');
form = document.getElementById('sizePicker');

function makeGrid() {
    table.innerHTML = '';
    let j = 1;
    while (j <= height) {
        let tr = document.createElement('tr');
        tr.className += ' trClass';
        for (let i = 1; i <= width; i++) {
            let td = document.createElement('td');
            td.className += ' tdClass';
            td.style.backgroundColor = '#fff';
            tr.appendChild(td);
        }
        finalGrid = table.appendChild(tr);
        j++;
    }
}

function colorTheBackground(e) {
    e.preventDefault();
    clickedTd = e.target;
    colorSelect = document.getElementById('colorPicker').value;
    clickedTd.style.backgroundColor = colorSelect;
};form.addEventListener('submit', function (e) {
    e.preventDefault();
    height = document.getElementById('height').value;
    width = document.getElementById('width').value;
    makeGrid();
});
table.onmouseenter = function (e) {
    table.onmousedown = function (e) {
        if (e.button == 0) {
            colorTheBackground(e);
            table.onmouseover = function (e) {
                colorTheBackground(e)
            };
        }
    };
    table.onmouseup = function (e) {
        table.onmouseover = function (e) {
        };
    }
    table.ondblclick = function (e) {
        clickedTd.style.backgroundColor = '#fff';
    };
};
table.onmouseleave = function (e) {
    table.onmouseover = function (e) {
    };
    table.onmousedown = function (e) {
    };
};