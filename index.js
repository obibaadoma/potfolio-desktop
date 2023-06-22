const menu = document.querySelector('.hamburger');
const pop = document.querySelector('.pop-menu');
// most part of the time you need to declare your variables at the top of the document
// By doing this practice you can avoid execution errors and reach all the variables

// I see that you tried to find an element with this class, but doesn't exist in HTML Doc, try to fix this problem
const popup = document.querySelector('.overlay');
const closePopup = document.querySelector('#closebtn');
const subDesc = document.querySelector('#popsubdesc');
const workImg = document.querySelector('#popMimg');
const deskImg = document.querySelector('#popDimg');
const popupTitle = document.querySelector('#poptitle');
const popupContent = document.querySelector('.pop-work');
const skillsDiv = document.querySelector('#poplangs');
const workDesc = document.querySelector('#popdesc');
const liveBtn = document.querySelector('#livebtn');
const sourceBtn = document.querySelector('#codebtn');
const Portfolio = document.querySelector('#Portfolio');

function poping() {
  if (pop.style.display === 'block') {
    menu.src = 'img/icon-hamburger.png';
    pop.style.display = 'none';
  } else {
    menu.src = 'img/close-button.png';
    pop.style.display = 'block';
  }
}

menu.addEventListener('click', pop);

const menus = document.querySelectorAll('.pop-menu a');
for (let i = 0; i < menus.length; i += 1) {
  menus[i].addEventListener('click', () => {
    poping();
  });
}

// popup generator

const project = [{
  name: 'Tonic',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  Image: 'img/desktop-project-1.png',
  technologies: [
    'HTML',
    'CSS',
    'JavaScript',
  ],
  liveVersionLink: '',
  SourceLink: '',
  company: 'CANOPY',
  year: '2015',
  stack: 'Back End Dev',
},
{
  name: 'Post Stories',
  description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
  Image: 'img/desktop-project-2.png',
  technologies: [
    'HTML',
    'Ruby on Rails',
    'CSS',
    'JavaScript',
  ],
  liveVersionLink: '',
  SourceLink: '',
  company: 'FACEBOOK',
  year: '2015',
  stack: 'Full Stack Dev',
},
{
  name: 'Facebook 360',
  description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
  Image: 'img/desktop-project-3.png',
  technologies: [
    'HTML',
    'Ruby on Rails',
    'CSS',
    'JavaScript',
  ],
  liveVersionLink: '',
  SourceLink: '',
  company: 'FACEBOOK',
  year: '2015',
  stack: 'Full Stack Dev',
},
{
  name: 'Uber Navigation',
  description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
  Image: 'img/desktop-project-4.png',
  technologies: [
    'HTML',
    'Ruby on Rails',
    'CSS',
    'JavaScript',
  ],
  liveVersionLink: '',
  SourceLink: '',
  company: 'Uber',
  year: '2018',
  stack: 'Lead Developer',
}];

const generatePopup = (index) => {
  skillsDiv.innerHTML = '';
  popupTitle.innerText = projects[index].name;
  workImg.src = projects[index].mobileImage;
  deskImg.src = projects[index].desktopImage;
  workDesc.innerText = projects[index].description;
  projects[index].technologies.forEach((skill) => {
    const li = document.createElement('li');
    li.innerText = skill;
    skillsDiv.appendChild(li);
  });
  subDesc.innerHTML = `
  <p class="descA">${projects[index].company}</p>
  <img src="./images/Counter.svg" alt="counter">
  <p class="grey">${projects[index].stack}</p>
  <img src="./images/Counter.svg" alt="counter">
  <p class="grey">${projects[index].year}</p>
  `;
  liveBtn.href = projects[index].liveVersionLink;
  sourceBtn.href = projects[index].SourceLink;
};

const windowPop = (index) => {
  popupContent.style.display = 'block';
  popup.style.display = 'block';
  generatePopup(index);
};

const generateproject = () => {
  project.forEach((work, index) => {
    const cards = document.createElement('div');
    cards.classList.add('cards');
    if (index % 2 === 0) {
      cards.className = 'cards';
    } else {
      cards.className = 'cards right-image';
    }
    // Portfolio.appendChild(cards);
    const imgProject = document.createElement('div');
    imgProject.classList.add('img-project');
    imgProject.innerHTML = `<img src="${work.Image}" alt="${work.name}">`;

    const content = document.createElement('div');
    content.classList.add('content');
    content.innerHTML = `<h2>${work.name}</h2>
<div class="info-tags">
  <h3>${work.company}</h3>
  <p>${work.stack}</p>
  <p>${work.year}</p>
</div>
<p class="cards-p">${work.description}</p>`;
    const tags = document.createElement('ul');
    tags.classList.add('tags');
    work.technologies.forEach((tech) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.innerHTML = tech;
      li.appendChild(a);
      tags.appendChild(li);
    });
    content.appendChild(tags);
    const button = document.createElement('button');
    button.classList.add('main-buttons');
    button.innerHTML = 'See Project';
    button.type = 'button';
    button.addEventListener('click', () => windowPop(index));
    content.appendChild(button);
    cards.appendChild(imgProject);
    cards.appendChild(content);
    Portfolio.appendChild(cards);
  });
};

closePopup.addEventListener('click', () => {
  popupContent.style.display = 'none';
  popup.style.display = 'none';
});

window.onload = () => {
  generateproject();
};
