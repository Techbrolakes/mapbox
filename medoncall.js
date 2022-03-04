const hamburger = document.querySelector('.hamburger')
const nav_container = document.querySelector('.nav_container')

hamburger.addEventListener('click', ()=> {
  hamburger.classList.toggle('active');
  nav_container.classList.toggle('active');
})

document.querySelectorAll('.links').forEach(n => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  nav_container.classList.remove('active');
}))

const words = ['Purchase Prescribed Drugs.', 'Consult Healthcare Professionals.', 'All In One App.',  ]; 
let i = 0;
let timer;
 
function myFunction() {
  var x = document.getElementById("links");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

 function typingEffect() { 
   let word = words[i].split(""); 
   var loopTyping = function() {
      if (word.length > 0) {
         document.getElementById('word').innerHTML += word.shift(); 
        } else { 
          deletingEffect();
           return false;
           }; 
    timer = setTimeout(loopTyping, 200);
   };
    loopTyping(); 
  }; 
  function deletingEffect() { 
    let word = words[i].split("");
    var loopDeleting = function() {
       if (word.length > 0) {
          word.pop(); 
          document.getElementById('word').innerHTML = word.join("");
         } else {
           if (words.length > (i + 1)) { 
             i++;
             } else { 
               i = 0;
               };
             typingEffect(); 
             return false; };
              timer = setTimeout(loopDeleting, 50);
             }; 
             loopDeleting(); 
            };
            
            typingEffect();