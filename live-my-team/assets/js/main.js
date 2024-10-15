console.log('hi');

// 1.preparation
const team = [
  {
    image: 'https://picsum.photos/400/200',
    name: 'Wayne Barnett',
    role: 'Founder & CEO'
  },
  {
    image: 'https://picsum.photos/400/200',
    name: 'Angela Carroll',
    role: 'Chief Editor'
  },
  {
    image: 'https://picsum.photos/400/200',
    name: 'Walter Gordon',
    role: 'Office manager'
  },
  {
    image: 'https://picsum.photos/400/200',
    name: 'Angela Lopez',
    role: 'Scocial Medioa Manager'
  },
  {
    image: 'https://picsum.photos/400/200',
    name: 'Scott Estrada',
    role: 'Developer'
  },
  {
    image: 'https://picsum.photos/400/200',
    name: 'Barbara Ramos',
    role: 'Graphic Designer'
  }
]
// select the DOM elements
// select the team element
const teamEl = document.getElementById('team');

// select the form element
const formEl = document.querySelector('form')
console.log(formEl);


// define the required functions

function generateTeamMemberCard(member) {

  const { image, name, role } = member

  return `
    <div class="col">
    <div class="card text-center">
      <img src="${image}" alt="" class="card-img-top">
      <div class="card-body">
        <h3>${name}</h3>
        <div>${role}</div>
      </div>
    </div>
  </div>
  `;
}



// updates the dom only once you have the entire markup available
/* let finalMarkup = ''

// Elaboration
for (let i = 0; i < team.length; i++) {
  const member = team[i]
  console.log(member);

  const markup = generateTeamMemberCard(member)
  console.log(markup);

  finalMarkup += markup


}

console.log(finalMarkup);
// update the dom at the end
teamEl.innerHTML = finalMarkup


 */



// updates the dom every time we iterate on an element
/* for (let i = 0; i < team.length; i++) {
  const member = team[i]
  console.log(member);

  const markup = generateTeamMemberCard(member)
  console.log(markup);


  teamEl.innerHTML += markup

}
 */



for (let i = 0; i < team.length; i++) {
  const member = team[i]
  console.log(member);

  const markup = generateTeamMemberCard(member)
  console.log(markup);

  teamEl.insertAdjacentHTML('beforeend', markup)

}



formEl.addEventListener('submit', (e) => {
  e.preventDefault();


  // get the value of the input name
  let name = document.getElementById('name').value
  //console.log(name);

  // get the value of the input role
  let role = document.getElementById('role').value
  //console.log(role);

  // get the value of the input image
  let image = document.getElementById('image').value
  //console.log(image);

  // recreate an object for the new member
  const newMember = {
    name,
    role,
    image
  }

  team.push(newMember);

  console.log(newMember);
  const markup = generateTeamMemberCard(newMember)
  console.log(markup);


  teamEl.insertAdjacentHTML('beforeend', markup)


});











