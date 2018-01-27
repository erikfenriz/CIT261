function arrays(){
    var list = [8991,1,2,3,4,5,6,7,8,9];
    var sum = addEnds(list);
    document.getElementById('outputArray').innerHTML = sum;
}
function addEnds(list){
    return list[0]+list[list.length-1];
}