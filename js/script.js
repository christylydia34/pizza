$(document).ready(function() {

    $("#he1").click(function(){
      $(".pizzol").toggle(500);
  
  });
  
  });

function Order(type,size, crust, topping, number){
    this.type=type;
    this.size= size;
    this.crust=crust;
    this.topping= topping;
    this.number= number;
  }

  Order.prototype.pizza=function(){
    return "Your Order: Pizza type is " + this.type+ ", size chosen is " + this.size + ", with " + this.crust + ", and" + this.topping +", the quantity ordered is " + this.number
  }

$(document).ready(function() {
    $("form#f1").submit(function(event) {
      event.preventDefault();
  
    $("#oda").click (function(){
        var inputtedType=$("select#type").val();
        //console.log("inputtedType");
        if($("select#type").val()==="Pepporoni"){
            var money1= 10
        }else if ($("select#type").val()==="Hawaiian"){
            var money1=15
        }else if ($("select#type").val()==="Stuffed"){
            var money1=20
    
        }else if ($("select#type").val()==="Barbecue"){
            var money1=25
        }else if ($("select#type").val()==="Chicken"){
            var money1=30
    }else {
        alert("Kindly refresh and re-order")
    }
    
      var inputtedSize=$("select#size").val();
      // console.log("inputtedSize");
      if ($("select#size").val()==="small"){
        var money2 = 5
      }else if ($("select#size").val()==="medium"){
        var money2= 7
      }else if ($("select#size").val()==="large"){
        var money2= 12
      } else{
        alert("Please refresh and re-order")
      }
  
  
      var inputtedCrust=$("select#crust").val();
      // console.log("inputtedCrust");
      if ($("select#crust").val() ==="Crispy"){
        var money3= 1
      } else if ($("select#crust").val() ==="Stuffed"){
        var money3= 3
      }else if ($("select#crust").val() ==="Gluten-free"){
        var money3= 5
      }else{
        alert("Please refresh and re-order")
      }
  
      var inputtedTopping=$("select#topping").val();
      console.log("inputtedTopping");
      if($("select#topping").val()==="Pepperoni"){
        var money4=1
      } else if ($("select#topping").val()==="Mushrooms"){
        var money4=1
      } else if ($("select#topping").val()==="Onions"){
        var money4=1
      }  else if ($("select#topping").val()==="Green peppers"){
        var money4=1
      } else if ($("select#topping").val()==="Bacon"){
        var money4=1
      }  else if ($("select#topping").val()==="Extra cheese"){
        var money4=1
      } else if ($("select#topping").val()==="Black olives"){
        var money4=1
      
      } else {
        alert("Please refresh and re-order")
      }
  
  
      
      var inputtedNumber=$("select#number").val();
      console.log(inputtedNumber);
      
      var newPizza= new Order (inputtedType,inputtedSize, inputtedCrust, inputtedTopping,inputtedNumber);
      var pizzaMoney= parseInt(money1) +parseInt(money2)+parseInt(money3)+parseInt(money4)
      var totalMoney = pizzaMoney * inputtedNumber
      var total = totalMoney + 2 
    
      $("div#status").append("<label>" + newPizza.pizza() + "</label>");
      console.log(newPizza);
  
      $("div#status").append("<label>" + "The charge will be " +totalMoney + " sh"+ "</label>");
      console.log(pizzaMoney);
  
      $("#delivery").click (function(){
        $("div#status").append("<label>" + "The total to be paid is " + total+ "sh"+ "</label>");
      console.log(total);
      });
  
      });
  
  
    
   
    });
  });
  
  
  $(document).ready(function() {
    $("#delivery").click (function(){    
  
      alert("your order will be delivered to your location. let us know your location!")
      prompt("Please enter your location (the street and city)");
      alert("The delivery cost is 250shs, in 10-20 minutes your order will be in your hands! Thank you for shopping with us, have a fruitful day!");
  
    });
  });
  