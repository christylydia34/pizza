$(document).ready(function() {

    $("#he1").click(function(){
      $(".pizzol").toggle(500);
  
  });
  
  });

function typePizza(type,size, crust, topping, number){
    this.type=type;
    this.size= size;
    this.crust=crust;
    this.topping= topping;
    this.number= number;
  }

  typePizza.prototype.pizza=function(){
    return "Your Order: Pizza type is " + this.type+ ", size chosen is " + this.size +  ", with a " + this.crust  +", and " + this.topping +", the quantity ordered is " + this.number
  }

  
$(document).ready(function() {
    $("form#f1").submit(function(event) {
      event.preventDefault();
  
    $("#odr").click (function(){
        var inputtedType=$("select#type").val();
        console.log("inputtedType");
        if($("select#type").val()==="Pepporoni"){
            var amt1= 1000
        }else if ($("select#type").val()==="Hawaiian"){
            var amt1=1500
        }else if ($("select#type").val()==="Stuffed"){
            var amt1=2000
    
        }else if ($("select#type").val()==="Barbecue"){
            var amt1=2500
        }else if ($("select#type").val()==="Chicken"){
            var amt1=3000
    }else {
        alert("Kindly refresh and re-order")
    }
    
      var inputtedSize=$("select#size").val();
      console.log("inputtedSize");
      if ($("select#size").val()==="small"){
        var amt2 = 500
      }else if ($("select#size").val()==="medium"){
        var amt2= 700
      }else if ($("select#size").val()==="large"){
        var amt2= 1200
      } else{
        alert("Please refresh and re-order")
      }
  
  
      var inputtedCrust=$("select#crust").val();
      console.log("inputtedCrust");
      if ($("select#crust").val() ==="Crispy"){
        var amt3= 100
      } else if ($("select#crust").val() ==="Stuffed"){
        var amt3= 300
      }else if ($("select#crust").val() ==="Gluten-free"){
        var amt3= 500
      }else{
        alert("Please refresh and re-order")
      }
  
      var inputtedTopping=$("select#toppings").val();
      console.log("inputtedTopping");
      if($("select#toppings").val()==="Pepperoni"){
        var amt4=100
      } else if ($("select#toppings").val()==="Mushrooms"){
        var amt4=100
      } else if ($("select#toppings").val()==="Onions"){
        var amt4=100
      }  else if ($("select#toppings").val()==="Green peppers"){
        var amt4=100
      } else if ($("select#toppings").val()==="Bacon"){
        var amt4=100
      }  else if ($("select#toppings").val()==="Extra cheese"){
        var amt4=100
      } else if ($("select#toppings").val()==="Black olives"){
        var amt4=100
      
      } else {
        alert("Please refresh and re-order")
      }
  
  
      
      var inputtedNumber=$("select#number").val();
      console.log(inputtedNumber);
      
      var newPizza= new typePizza (inputtedType,inputtedSize, inputtedCrust, inputtedTopping,inputtedNumber);
      var pizzaMoney= parseInt(amt1) +parseInt(amt2)+parseInt(amt3)+parseInt(amt4)
      var totalMoney = pizzaMoney * inputtedNumber
      var total = totalMoney + 250
    
      ($("div#status").append("<p1>" + newPizza.pizza() + "</p1><br>");
      console.log(newPizza);
  
      $("div#status").append("<p1>" + "The charge will be " +totalMoney + " sh"+ "</p1><br>");
      console.log(pizzaMoney);
  
      $("#delivery").click (function(){
        $("div#status").append("<p1>" + "The total to be paid is " + total+ " sh"+ "</p1>");
      console.log(total);
    
      });
  
      });
  
  
    
   
    });
  });
  
  
  $(document).ready(function() {
    $("#delivery").click (function(){    
  
      alert("Thank you for choosing christys pizza.Your order will be delivered to you shortly. Kindly let us know your location!")
      prompt("Please enter your location (the street and city)");
      alert("The delivery cost is 250shs .Your order will be delivered within in 10-20 minutes . Thank you for shopping with us, have a fruitful day!");
  
    });
  });
  