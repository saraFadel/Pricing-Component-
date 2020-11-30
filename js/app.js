const checkbox = document.getElementById("checkbox");
const price1 = document.getElementById("price1");
const price2 = document.getElementById("price2");
const price3 = document.getElementById("price3");
const annually = document.getElementById('unChecked');
const monthly = document.getElementById('checked');

monthly.addEventListener('click', function monthlyPrice(){
  checkbox.checked = true;
  changePrice();
});

annually.addEventListener('click', function annuallyPrice(){
  checkbox.checked = false;
  changePrice();
});

checkbox.addEventListener('change', changePrice);

function changePrice(){
  if(checkbox.checked){
    price1.innerHTML = "19.99";
    price2.innerHTML = "24.99";
    price3.innerHTML = "39.99";
  }else{
    price1.innerHTML = "199.99";
    price2.innerHTML = "249.99";
    price3.innerHTML = "399.99";
  }
}
