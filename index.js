const btn =document.querySelector(".btn");
const firstname=document.querySelector(".first-name");
const lastname=document.querySelector(".last-name");
const fathersname=document.querySelector(".father");
const age=document.querySelector(".age");
const email=document.querySelector(".email");
const branch=document.querySelector(".branch");
const college=document.querySelector(".college");
const phno=document.querySelector(".phno");
const address=document.querySelector(".address");
const form=document.querySelector(".form");

form.addEventListener("submit",function (e) {
    e.preventDefault();
  check();
  result();
  e.target.reset();
});
function result() {
    let newEl = document.createElement("div");
    document.body.appendChild(newEl);
  
    let newPara1 = document.createElement("p");
    let newPara2 = document.createElement("p");
    let newPara3 = document.createElement("p");
    let newPara4 = document.createElement("p");
    let newPara5 = document.createElement("p");
    let newPara6 = document.createElement("p");
    let newPara7 = document.createElement("p");
    let newPara8 = document.createElement("p");
    let newPara9 = document.createElement("p");
    let newPara10 = document.createElement("p");
    newPara1.className = "para";
    newPara2.className = "para";
    newPara3.className = "para";
    newPara4.className = "para";
    newPara5.className = "para";
    newPara6.className = "para";
    newPara7.className = "para";
    newPara8.className = "para";
    newPara9.className = "para";
    newPara10.className = "para";





  newEl.appendChild(newPara1);
  newEl.appendChild(newPara2);
  newEl.appendChild(newPara3);
  newEl.appendChild(newPara4);
  newEl.appendChild(newPara5);
  newEl.appendChild(newPara6);
  newEl.appendChild(newPara7);
  newEl.appendChild(newPara8);
  newEl.appendChild(newPara9);
  newEl.appendChild(newPara10);

  

  newPara1.innerHTML = firstname.value;
  newPara2.innerText = lastname.value;
  newPara3.innerHTML = fathersname.value;
  newPara4.innerHTML = email.value;
  newPara5.innerHTML = phno.value;
  newPara6.innerHTML = address.value;
  newPara7.innerHTML = college.value;
  newPara8.innerHTML = branch.value;
  newPara9.innerHTML = age.value;
  newPara10.innerHTML = "----------------------------------------------";
}
  
function check() {
    const address = document.queryCommandIndeterm(".address");
    if (firstname.value == 0) {
      window.alert("Enter your First Name");
      firstname.focus();
      return false;
    }
    if(lastname.value ==0){
        window.alert("enter your last name");
        return false;
    }   
    if(fathersname.value == 0){
        window.alert("enter your fathers name");
        return false;
    }
    if(age.value == 0){
        window.alert("enter your age");
        return false;

    }
    if(email.value == 0){
        window.alert("enter your email");
        return false;
    }
    if(branch.value == 0){
        window.alert("enter your branch");
        return false;
    }
    if(college.value == 0){
        window.alert("enter your college");
        return false;
    }
    if(phno.value == 0){
        window.alert("enter your phno");
        return false;
    }
    if(address.value == 0){
        window.alert("enter your address");
        return false;
    }
    return true;
    
}


