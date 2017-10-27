// The only number function
jQuery('.numbersOnly').keyup(function () {
    this.value = this.value.replace(/[^0-9\.]/g, '');
});

// Add/delete rows from table
$(document).ready(function () {
    var k = 0;

    $("#add_row").click(function (e) {
        k++;
        added_row = "<td>" + "objet" + (k + 1) + "</td><td><input name='value" + k + "' type='text' placeholder='valeur' class='form-control input-md'  /> </td><td><input  name='weight" + k + "' type='text' placeholder='poid'  class='form-control input-md'></td>";

        $('#tab_logic tbody:last-child').append('<tr id="addr' + (k) + '">' + added_row + '</tr>');

    });


    $("#delete_row").click(function (e) {
        if (k > 0) {
            $("#addr" + (k)).remove();
            k--;
        }
        ;
    });

});


//Wmax
var W;
//Nbr objects
var N;
// Data rows
var v = [];
var w = [];


var submit = $('#btn-submit'); // Get the close button
submit.click(function (e) {

//Get Wmax;
    var W = parseInt($("input[name='vmax']").val());


    var table = $('#tab_logic > tbody').children();

//Get nb objects
    var N = table.length;

    var v = [], w = [];

// Get table dataSSSS
    table.each(function (i, el) {
        value = $(this).children().eq(1).children().eq(0).val(),
            weight = $(this).children().eq(2).children().eq(0).val();
        v.push(parseInt(value));
        w.push(parseInt(weight));


    });

    console.log('v=' + v);
    console.log('w=' + w);
    console.log(W);
    console.log(N);

    var selectedOject = optimaleSolution(W, N, w, v);

    console.log('selectedOject=' + selectedOject);

    for (var i = 0; i < N; i++) {
        if (selectedOject.indexOf(i) == (-1)) {
            $('#addr' + i + " td:first").css("background-color", "#d9534f").css("color", "white");
        } else {
            $('#addr' + i + " td:first").css("background-color", "#5cb85c").css("color", "white");
        }
    }

    //cookies to send them to the detail page
    $.cookie('v', JSON.stringify(v), {expires: 2});
    $.cookie('w', JSON.stringify(w), {expires: 2});
    $.cookie('N', N, {expires: 2});
    $.cookie('W', W, {expires: 2});


});

