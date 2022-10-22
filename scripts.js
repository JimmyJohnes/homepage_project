/*
  piece of code 1:
    assigns a variable 'navbar' to the navbar_list unordered list, scans the amount of sections avaialble
    then appends list items to a document fragment which is later added to the navbar list needing only one reflow and repaint
*/
let navbar = document.querySelector('#navbar__list');
const fragment = document.createDocumentFragment();

const clicked =function (i)
{
  return function()  {
    document.querySelector('#section'+i).scrollIntoView({behavior:'smooth'});
  }
}

for(let i=1;document.querySelector('#section'+i)!=null;i++)
{
    const newSection = document.createElement('li');
    const sectionText= document.createElement('p');
    newSection.addEventListener('click',clicked(i));
    newSection.onclick = function()
    {
      for(let j=1;document.querySelector('.active-item')!=null;j++)
      {
        document.querySelector('.active-item').className='';
      }
      newSection.className='active-item';
    }
    sectionText.textContent="Section "+i;
    sectionText.className="menu__link";
    newSection.appendChild(sectionText);
    fragment.appendChild(newSection);
    
  }

navbar.appendChild(fragment);
/*
  piece of code 2:
    adds an event listener to the whole document which activates when a scroll happens
    checks each section on the page to find which one is in viewport and assigns class 'your-active-class' to it, removing it from others.
*/
document.addEventListener('scroll',whichElementInView);
/* isInViewport function is not mine, found it when searching how to check if element is in viewport on javascripttutorial
  taken on 12-10-2022
  https://www.javascripttutorial.net/dom/css/check-if-an-element-is-visible-in-the-viewport/
*/
function isInViewport(query) {
  const ele = document.querySelector(query);
  const rect = ele.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
let checker;
function whichElementInView()
{
  for(let i=1;document.querySelector('#section'+i)!=null;i++)
  {
    checker=isInViewport('#section'+i);
    if(checker==true)
    {
      document.querySelector('#section'+i).className='your-active-class';
    }
    else{
      document.querySelector('#section'+i).className='';
    }
  }
}




