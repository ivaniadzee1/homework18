let ricxvi1 = document.querySelectorAll('.n1')
let ricxvi2 = document.querySelectorAll('.n2')
let ricxvi3 = document.querySelectorAll('.n3')
let btn = document.querySelector(".kaki")
let price1 = 19.9
let price2 = 24.9
let price3 = 39.9

btn.addEventListener("click", () => {

    btn.classList.toggle("act")


    if(price1 < 40){
       
        price1 *=10
    }
    else{
       
        price1/=10
    }
   
   price1.innerHTML = ricxvi1;
     
    ricxvi1.forEach(ricxvi1 => {
        ricxvi1.innerHTML = price1;
    });


    if(price2 < 40){
        price2 *=10
    }
    else{
        price2/=10
    }
  
   price2.innerHTML = ricxvi2;
     
    ricxvi2.forEach(ricxvi2 => {
        ricxvi2.innerHTML = price2;



        if(price3 < 40){
            
            price3 *=10
        }
        else{
           
            price3/=10
        }
   
       price3.innerHTML = ricxvi3;
         
        ricxvi3.forEach(ricxvi3 => {
            ricxvi3.innerHTML = price3;
        });
    });
})





