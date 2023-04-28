let eleList = document.querySelector('.grid')
// Creazione dell'array di oggetti per rappresentare i membri del team
const teamMembers = [
    {
      nome: "wayne barnet",
      ruolo: "Founder & CEO",
      foto: `<img src="img/wayne-barnett-founder-ceo.jpg" alt="">` 
    },
    {
      nome: "Angela Caroll",
      ruolo: "Chief Editor",
      foto: `<img src="img/angela-caroll-chief-editor.jpg" alt="">`
    },
    {
      nome: "Walter Gordon",
      ruolo: "Office Manager",
      foto: `<img src="img/walter-gordon-office-manager.jpg" alt="">`
    },
    {
      nome: "Angela Lopez",
      ruolo: "Social Media Manager",
      foto: `<img src="img/angela-lopez-social-media-manager.jpg" alt="">`
    },
    {
        nome: "Scott Estrada",
        ruolo: "developer",
        foto: `<img src=" img/scott-estrada-developer.jpg" alt="">`
    },
    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: `<img src="img/barbara-ramos-graphic-designer.jpg" alt="">`
    }
  ];
  
  //   stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
  console.log(teamMembers)

//   Stampare le stesse informazioni su DOM sottoforma di stringhe
for ( let key of teamMembers){
    console.log(key);
    eleList.innerHTML += `<div class="membri">  ${key.nome},  ${key.ruolo}, ${key.foto}</div>`
}


    