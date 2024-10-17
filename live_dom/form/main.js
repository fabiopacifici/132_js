

// setup

const formEl = document.querySelector('form')
const memberNameInputEl = document.getElementById('memberName')
//console.log(formEl);
const cardsEl = document.querySelector('.card-body')



formEl.addEventListener('submit', function (e) {
  //e.preventDefault()
  const memberName = e.target.memberName.value;
  const memberEmail = e.target.memberEmail.value;
  const memberImage = e.target.memberImage.value;
  const memberPhone = e.target.memberPhone.value;
  const memberBio = e.target.memberBio.value;


  console.log(memberBio, memberImage, memberPhone);

  const memberEl = `
   <div class="member">
      <img src="${memberImage}" alt="image of ${memberName}">
      <p>${memberName}</p>
      <p>${memberEmail}</p>
      <p>${memberBio}</p>
      <hr>
    </div>
    `

  cardsEl.insertAdjacentHTML('beforeend', memberEl)



})