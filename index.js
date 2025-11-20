
let themeButton=document.getElementById('theme-button')


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
const addParticipant = (event,person) => {
  
    const participantList=document.querySelector('.rsvp-participants');
    const txt = document.createElement('p');
    txt.innerText = `🎟️ ${person.name} from ${person.city} has RSVP'd`;
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


const validateForm = (event) => {
  event.preventDefault();
  let containsErrors = false;

  var rsvpInputs = document.getElementById("rsvp-form").elements;
  let person={
  name:rsvpInputs[0].value,
  email:rsvpInputs[1].value,
  city:rsvpInputs[2].value
  }
  
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
    //addParticipant(event);
    addParticipant(event,person);
    toggleModal(person)

    for(let i=0;i<rsvpInputs.length-1;i++){
    rsvpInputs[i].value=' ';   
  }
  }
}
}

form=addEventListener('submit',validateForm);



const toggleModal = (person) => {
    
    const modal=document.getElementById('success-modal');
    const modalContent=document.getElementById('modal-text');
      
    modal.style.display="flex";
    modalContent.textContent=`Thank's for RSVPing, ${person.name} We can't wait to see you at the event!`;
    let intervalId=setInterval(animateImage, 500);
    setTimeout(() => {
    modal.style.display='none';
    clearInterval(intervalId);
    }, 5000); 
      
}


const modalButton=document.getElementById("Thanksbutton");
const notDisplay=()=>{
    const modalflex=document.querySelector(".modal");
    modalflex.style.display='none';
};
modalButton.addEventListener('click',notDisplay);


let rotateFactor=0;
const modalImage=document.querySelector('#thanksid');

const animateImage=()=>{

    if(rotateFactor===-10){
      rotateFactor=0;
    }else{
      rotateFactor=-10;
    }
    console.log(rotateFactor)
    modalImage.style.transform=`rotate(${rotateFactor}deg)`;
}

