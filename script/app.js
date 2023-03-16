const mobileMenu = document.querySelector('.hamburger');
const mobilePop = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-btn');

mobileMenu.addEventListener('click', () => {
  mobilePop.classList.remove('show');
});

closeBtn.addEventListener('click', () => {
  mobilePop.classList.add('show');
});

const artist = [
  {
    name: 'Sarkodie',
    achievement: 'Sarkodie is a Ghanaian rapper and musician who has achieved international awards for his music',
    accolades: 'He was the first rapper from Africa to win the BET Best International Flow award in 2019.',
    img: 'img/speakers/sark.png',
  },
  {
    name: 'Kwesi Arthur',
    achievement: 'Kwesi Arthur is a Ghanaian rapper and musician who gained recognition with his hit song "Grind Day"',
    accolades: 'Experience the electrifying beats of rising Ghanaian star, Kwesi Arthur, at Afrochella 2023.',
    img: 'img/speakers/kwesi.png',
  },
  {
    name: 'Wizkid',
    achievement: 'Best overall artist for the year 2022',
    accolades: 'Join us at Afrochella to experience the electrifying sound and dynamic stage presence of Wizkid, the Nigerian superstar taking the Afrobeats world by storm.',
    img: 'img/speakers/wiz.png',
  },
  {
    name: 'Black Sheriff',
    achievement: 'Released his debut album that topped the charts for several weeks.',
    accolades: 'Get ready to vibe to the soulful tunes of Ghanaian artist, Black Sherif, as he takes the stage at Afrochella 2023.',
    img: 'img/speakers/black.png',
  },
  {
    name: 'Rema',
    achievement: 'Currently has the most streamed song on YouTube',
    accolades: 'Experience the dynamic and infectious sounds of Nigerian superstar, Rema, as he takes the stage at Afrochella 2023.',
    img: 'img/speakers/rema.png',
  },
  {
    name: 'Tems',
    achievement: 'Number three on most streamed African artist on Spotify',
    accolades: 'Experience the raw and soulful vocals of Nigerian sensation, Tems, as she takes Afrochella 2023',
    img: 'img/speakers/tems.png',
  },
];

const initialDisplayCount = 2;

const displayCount = 6;

function displayItems() {
  const container = document.querySelector('#show-cont');
  container.innerHTML = '';

  for (let i = 0; i < Math.min(artist.length, initialDisplayCount); i += 1) {
    const item = artist[i];
    const element = document.createElement('div');
    element.innerHTML = `
    <div class="d-flex align-items-center gap-3 mb-4">
       <img src="${item.img}" alt="sark">
       <div>
         <p class="speaker">${item.name}</p>
         <p class="speaker-des mt-1">${item.achievement}</p>
         <p class="speak-line mt-2"></p>
         <p class="speaker-achievement mt-3">${item.accolades}</p>
       </div>
    </div>
    `;
    container.appendChild(element);
  }
}

function showMore() {
  const container = document.querySelector('#show-cont');
  container.innerHTML = '';

  for (let i = 0; i < artist.length; i += 1) {
    const item = artist[i];
    const element = document.createElement('div');
    element.innerHTML = `
    <div class="d-flex align-items-center gap-3 mb-4">
       <img src="${item.img}" alt="sark">
       <div>
         <p class="speaker">${item.name}</p>
         <p class="speaker-des mt-1">${item.achievement}</p>
         <p class="speak-line mt-2"></p>
         <p class="speaker-achievement mt-3">${item.accolades}</p>
       </div>
    </div>
    `;
    container.appendChild(element);
  }
}

function showLess() {
  displayItems();
}

displayItems();

// function displayData() {
//   const dataDisplay = document.querySelector('#data-display');
//   for (let i = 0; i < artist.length; i += 1) {
//     const performer = artist[i];
//     const dataItems = document.createElement('div');
//     dataItems.classList.add('dynamic-container');
//     dataItems.innerHTML = `
//     <div class="d-flex align-items-center gap-3 mb-4">
//       <img src="${performer.img}" alt="sark">
//       <div>
//         <p class="speaker">${performer.name}</p>
//         <p class="speaker-des mt-1">${performer.achievement}</p>
//         <p class="speak-line mt-2"></p>
//         <p class="speaker-achievement mt-3">${performer.accolades}</p>
//       </div>
//     </div>
//     `;
//     dataDisplay.appendChild(dataItems);
//   }
// }

// displayData();

const moreBtn = document.querySelector('#more');
const lessBtn = document.querySelector('#less');

moreBtn.addEventListener('click', showMore);
lessBtn.addEventListener('click', showLess);