$(document).ready(function() {
    $("form#form").submit(function(event) {
      event.preventDefault();
  
    $("#oda").click (function(){
        var inputtedType=$("select#type").val();
        //console.log("inputtedType");
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
    }
    
      var inputtedSize=$("select#size").val();
      // console.log("inputtedSize");
      if ($("select#size").val()==="small"){
        var money1 = 5
      }else if ($("select#size").val()==="medium"){
        var money1 = 7
      }else if ($("select#size").val()==="large"){
        var money1 = 12
      } else{
        alert("Please refresh and re-order")
      }
  
  
      var inputtedCrust=$("select#crust").val();
      // console.log("inputtedCrust");
      if ($("select#crust").val() ==="Crispy"){
        var money2= 1
      } else if ($("select#crust").val() ==="Stuffed"){
        var money2= 3
      }else if ($("select#crust").val() ==="Gluten-free"){
        var money2= 5
      }else{
        alert("Please refresh and re-order")
      }
  
      var inputtedTopping=$("select#topping").val();
      console.log("inputtedTopping");
      if($("select#topping").val()==="Pepperoni"){
        var money3=1
      } else if ($("select#topping").val()==="Mushrooms"){
        var money3=1
      } else if ($("select#topping").val()==="Onions"){
        var money3=1
      }  else if ($("select#topping").val()==="Sausage"){
        var money3=1
      } else if ($("select#topping").val()==="Bacon"){
        var money3=1
      }  else if ($("select#topping").val()==="Extra cheese"){
        var money3=1
      } else if ($("select#topping").val()==="Black olives"){
        var money3=1
      } else if ($("select#topping").val()==="Green peppers"){
        var money3=1
      } else {
        alert("Please refresh and re-order")
      }
  
  
      
      var inputtedNumber=$("select#number").val();
      console.log(inputtedNumber);
      // if($("select#number").val()===1){
      //   var money3=1
      // }
      var newPizza= new Order (inputtedType,inputtedSize, inputtedCrust, inputtedTopping,inputtedNumber);
      var pizzaMoney= parseInt(money1) +parseInt(money2)+parseInt(money3)
      var totalMoney = pizzaMoney * inputtedNumber
      var total = totalMoney + 2 
    
      $("div#status").append("<label>" + newPizza.pizza() + "</label>");
      console.log(newPizza);
  
      $("div#status").append("<label>" + "The charge will be " +totalMoney + " $"+ "</label>");
      console.log(pizzaMoney);
  
      $("#delivery").click (function(){
        $("div#status").append("<label>" + "The total to be paid is " + total+ " $"+ "</label>");
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
  