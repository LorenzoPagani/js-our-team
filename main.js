const ourTeam = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    picture: 'img/wayne-barnett-founder-ceo.jpg'
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    picture: 'img/angela-caroll-chief-editor.jpg'
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    picture: 'img/walter-gordon-office-manager.jpg'
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    picture: 'img/angela-lopez-social-media-manager.jpg'
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    picture: 'img/scott-estrada-developer.jpg'
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    picture: 'img/barbara-ramos-graphic-designer.jpg'
  }
];
for (let i = 0; i < ourTeam.length; i++) {
  const dato = ourTeam[i];
  const col4 = document.createElement('div');
  col4.classList.add('col-4', "px-4");
  col4.innerHTML = 
    `<div class="card my-5">
      <img src="${dato.picture}"
        class="card-img-top" alt="profile pic">
      <div class="card-body">
        <h5 class="card-title">${dato.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted ">${dato.role}</h6>
      </div>
    </div>`;
  document.querySelector('#card-wrapper').appendChild(col4);
}


