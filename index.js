
let themeButton=document.getElementById('theme-button')

// Step 2: Write the callback function
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
}

themeButton.addEventListener('click',toggleDarkMode)


const navLinks = document.querySelectorAll('.navbar ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
 
    navLinks.forEach(link => {
        link.style.backgroundColor = '#da9ee7ff';
   
    });
    link.style.backgroundColor = '#710080';
    link.style.color='white';
  });
});

let form=document.getElementById("rsvp-form")
let count=3;
const addParticipant = (event) => {
    // Step 2: Write your code to manipulate the DOM here
    const name=document.getElementById("name").value
    const city=document.getElementById("city").value

    const participantList=document.querySelector('.rsvp-participants');
    const txt = document.createElement('p');
    txt.innerText = `🎟️ ${name} from ${city} has RSVP'd`;
    participantList.appendChild(txt);

    //const showCount=document.querySelector('#rsvp');

    oldCount=document.getElementById('rsvp-count');
    oldCount.remove()
    count = count + 1;
    const newCount = document.createElement('p');
    newCount.id = 'rsvp-count';
    newCount.textContent = "⭐ " + count + " people have RSVP'd to this event!";

    participantList.appendChild(newCount);

    event.preventDefault();
}


const validateForm = () => {
  event.preventDefault();
  let containsErrors = false;

  var rsvpInputs = document.getElementById("rsvp-form").elements;
  // TODO: Loop through all inputs
  for(let i=0;i<rsvpInputs.length-1;i++){
    const input=rsvpInputs[i];
    const value=input.value.trim();
    console.log(input)
    if(value.length<2){
      containsErrors = true;
      input.classList.add("error");

    }else{
      input.classList.remove("error");
  }

  const email=document.getElementById('email');
  email.value.trim();
  if(!email.value.includes('.com') || !email.value.includes('@')){
    containsErrors = true;
    email.classList.add("error");
  }
  else{
    email.classList.remove("error");
  }

  if(containsErrors === false){
    addParticipant(event);
    for(let i=0;i<rsvpInputs.length-1;i++){
    rsvpInputs[i].value=' ';   
  }
  
}
}
}

form=addEventListener('submit',validateForm);
