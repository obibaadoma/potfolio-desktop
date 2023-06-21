const hamburger = document.querySelector('.hamburger');
const mainlinks = document.querySelector('#links-nav');
const listpopup = document.querySelectorAll('.menu-list');
const closebutton = document.querySelector('.x-button');

function openwindow() {
  mainlinks.classList.replace('links', 'links-menu');
}

function closewindow() {
  mainlinks.classList.replace('links-menu', 'links');
}

hamburger.addEventListener('click', openwindow);
closebutton.addEventListener('click', closewindow);

for (let i = 0; i < listpopup.length; i += 1) {
  listpopup[i].addEventListener('click', closewindow);
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

const Portfolio = document.querySelector('#Portfolio');
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
      li.innerHTML = tech;
      tags.appendChild(li);
    });
    content.appendChild(tags);
    const button = document.createElement('button');
    button.classList.add('main-button');
    button.innerHTML = 'See Project';
    button.type = 'button';
    content.appendChild(button);
    cards.appendChild(imgProject);
    cards.appendChild(content);
    Portfolio.appendChild(cards);
  });
};
window.onload = () => {
  generateproject();
};