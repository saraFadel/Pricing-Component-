const checkbox = document.getElementById("checkbox");
const price1 = document.getElementById("price1");
const price2 = document.getElementById("price2");
const price3 = document.getElementById("price3");


checkbox.addEventListener('change', function changePrice(){
  if(this.checked){
    price1.innerHTML = "199.99";
    price2.innerHTML = "249.99";
    price3.innerHTML = "399.99";
  }else{
    price1.innerHTML = "19.99";
    price2.innerHTML = "24.99";
    price3.innerHTML = "39.99";
  }

});
