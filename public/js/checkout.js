


function selectone(item) {
    document.getElementById("firstLevelname").innerHTML = item;



}

function selecttwo(item) {
    document.getElementById("secondLevelname").innerHTML = item;
}

var tableRow = $("td").filter(function() {
    return $(this).text() == document.getElementById("firstLevelname").innerHTML;
}).closest("tr");
$(tableRow).addClass("line");


var tableRow2 = $("td").filter(function() {
    return $(this).text() == document.getElementById("secondLevelname").innerHTML;
}).closest("tr");
$(tableRow2).addClass("line");
