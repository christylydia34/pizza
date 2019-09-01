function Order(type,size,crust,topping,number){
    this.type=type;
    this.size=size;
    this.topping=topping;
    this.number=number;
}



$(document).ready (function(){
    $("#he1").click(function(){
        $(".pizzol").toggle(500);
    });
});
