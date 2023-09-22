const team = [
  {
    name: "Wayne Barnett",
    role: "Founder & CEO",
    img: "wayne-barnett-founder-ceo.jpg",
  },
  {
    name: "Angela Caroll",
    role: "Chief Editor",
    img: "angela-caroll-chief-editor.jpg",
  },
  {
    name: "Walter Gordon",
    role: "Office Manager",
    img: "walter-gordon-office-manager.jpg",
  },
  {
    name: "Angela Lopez",
    role: "Social Media Manager",
    img: "angela-lopez-social-media-manager.jpg",
  },
  {
    name: "Scott Estrada",
    role: "Developer",
    img: "scott-estrada-developer.jpg",
  },
  {
    name: "Barbara Ramos" ,
    role: "Graphic Designer	",
    img: "barbara-ramos-graphic-designer.jpg",
  }
];

const cards = document.querySelector(".row");

for(let member of team){
  cards.innerHTML += `<div class="col-12 col-xl-4 my-3">
                        <div class="card my_card">
                          <img src="img/${member.img}"         
                          alt="${member.name}">
                          <div class="card-body text-center">
                            <h5 class="card-title">${member.name}</h5>
                            <p class="card-text">${member.role}</p>
                          </div>
                        </div>
                      </div>`;
  }

	
