$(document).ready(function () {

    var addItems = $('.add-items')[0];
    console.log(addItems)
    var itemList = $('.plates');
    var items = JSON.parse(localStorage.getItem('items')) || [];

    function addItem(e) {
        e.preventDefault();
        var text = $('input[name=item]').val();
        var item = {
            text: text,
            done: false
        };
        items.push(item);
        populateList(items, itemList);

        this.reset();
        localStorage.setItem('items', JSON.stringify(items));
        console.log(items);
        $('.background-section').css('transform', 'scale(1.1');
    }

    function populateList(plates, plateList) {
        //add input value to items list
        plateList.html(plates.map(function (plate, i) {
            var isChecked =  plate.done ? 'checked="checked" ' : '';
            return '<li>' +
                '<input type="checkbox" class="checkbox" data-index="' + i + '" id="' + 'item' + i + '" ' +
                    isChecked + '>'+
                //dokonczyc!!!
                '<label for="' + 'item' + i + '">' + plate.text + '</label>' +
                '</li>';
        }).join(''));
    }
    
    function toggleDone(e) {
        //click only one element (contain label and input)
        if(!e.target.matches('input'))return;
        var el = e.target;
        var index = el.dataset.index;
        items[index].done = !items[index].done;
        localStorage.setItem('items', JSON.stringify(items));
        populateList(items, itemList);
        console.log(items)
    }
//TU POPRZESTANE!

    addItems.addEventListener('submit', addItem);

    //what's the anomaly!?!?
    var itemList0 = $('.plates')[0];
    itemList0.addEventListener('click', toggleDone);
    populateList(items, itemList);
});