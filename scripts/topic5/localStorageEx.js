function set() {
    let save = document.getElementById("saveData").value;
    localStorage.setItem('text', save);
}
function get() {
    let load = localStorage.getItem('text');
if(load){
    document.getElementById("saveData").value = load;
}
}
