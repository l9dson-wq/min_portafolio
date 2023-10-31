const homeView = document.getElementById('homeView');
const projectsView = document.getElementById('projectsView');
const linkAbout = document.querySelector('.linkAbout');
const linkProjects = document.querySelector('.linkProjects');
const linkAboutMobile = document.querySelector('.linkAboutMobile');
const linkProjectsMobile = document.querySelector('.linkProjectsMobile');

console.log(linkProjects, linkAbout);

function checkView() {
  if (!homeView.classList.contains('hidden')) {
    linkAbout.classList.add('bg-green-300','p-2','text-black');
    projectsView.classList.add('hidden');
  } else {
    linkProjects.classList.add('bg-green-300','p-2','text-black');
  }
}

linkAbout.addEventListener('click', () => {
  if (homeView.classList.contains('hidden')) {
    homeView.classList.remove('hidden');
    linkAbout.classList.add('p-2','bg-green-300','text-black');
  }

  if (!projectsView.classList.contains('hidden')) {
    projectsView.classList.add('hidden');
    linkProjects.classList.remove('bg-green-300','p-2','text-black');
  }

  // checkView();
});

linkProjects.addEventListener('click', () => {
  if (projectsView.classList.contains('hidden')) {
    projectsView.classList.remove('hidden');
    linkProjects.classList.add('bg-green-300','p-2','text-black');
  }

  if (!homeView.classList.contains('hidden')) {
    homeView.classList.add('hidden');
    linkAbout.classList.remove('p-2','bg-green-300','text-black');
  }

  // checkView();
});

// MOBILE
linkAboutMobile.addEventListener('click', () => {
  if (homeView.classList.contains('hidden')) {
    homeView.classList.remove('hidden');
    linkAbout.classList.add('p-2','bg-green-300','text-black');
  }

  if (!projectsView.classList.contains('hidden')) {
    projectsView.classList.add('hidden');
    linkProjects.classList.remove('bg-green-300','p-2','text-black');
  }

  // checkView();
});

linkProjectsMobile.addEventListener('click', () => {
  if (projectsView.classList.contains('hidden')) {
    projectsView.classList.remove('hidden');
  }

  if (!homeView.classList.contains('hidden')) {
    homeView.classList.add('hidden');
    linkAbout.classList.remove('p-2','bg-green-300','text-black');
  }

  // checkView();
});

checkView();