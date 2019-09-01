// business logic
function Order(type,size,crust,topping,number){
    this.type=type;
    this.size=size;
    this.crust=crust;
    this.topping=topping;
    this.number=number;
}

Order.prototype.pizza=function(){
    return "You have ordered:Pizza type  is " + this.type+",size chosen is " + this.size + ",with"+this.crust + ",with" + this.topping+ ", the quantity ordered is " + this.number
}
//UI logic
$(document).ready (function(){
    $("#he1").click(function(){
        $(".pizzol").toggle(500);
    });
    $("form#f1").submit(function(event){
event.preventDefault();

$("#order").click(function){

    var inputtedType=$("select#type").val();
    console.log("inputtedType");
    if($("select#type").val()==="Pepporoni"){
        var money1 = 10
    }else if ($("select#type").val()==="Hawaiian"){
        var money1 =15
    }else if ($("select#type").val()==="Stuffed"){
        var money1 =20

    }else if ($("select#type").val()==="Barbecue"){
        var money1 =25
    }else if ($("select#type").val()==="Chicken"){
        var money1 =30
}else {
    alert("Kindly refresh and re-order")


    var inputtedSize=$("select#size").val();
console.log("inputtedSize")
    if ($("select#size").val()==="small"){
      var money2 = 5
    }else if ($("select#size").val()==="medium"){
      var money2 = 7
    }else if ($("select#size").val()==="large"){
      var money2 = 12
    } else{
      alert("Please refresh and re-order")
    }


