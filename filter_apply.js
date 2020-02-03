$(document).ready(function() {
    $("#filter-btn").on('click', function(e) {
        e.preventDefault();
        var filter = [];
        filter.push($("#column-select option:selected").text())
        filter.push($("#comparision-select option:selected").text()) 
        filter.push($("#threshold").val())
        console.log(filter);
        var text = `<span style="padding:4px 10px; font-size:1rem;" class="mr-1 my-1 kt-badge kt-badge--primary kt-badge--inline kt-badge--pill">${filter[0]} ${filter[1]} ${filter[2]} <i onMouseOver="this.style.cursor='pointer'" class="remove-filter ml-2 la la-close la-lg"></i></span>`
        $("#applied-filters").append(text);
        $(".remove-filter").on('click', function(e) {
            console.log("this works");
            e.preventDefault();
            console.log(this.parentNode);
            this.parentNode.style.display = "none";
        });
    });
    // $(".remove-filter").bind('click', function(e) {
    //     console.log("this works");
    //     e.preventDefault();
    //     console.log(this);
    // });
    // document.addEventListener( "click", someListener );

    // function someListener(event){
    //     event.stopPropagation();
    //     var element = event.target;
    //     if(element.tagName == 'I' && element.classList.contains("remove-filter")){
    //         console.log(this);
    //     }
    // }
});