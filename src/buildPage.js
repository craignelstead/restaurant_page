//Builds main structure of page

//Clears content from page
import { remover } from "./removeContent.js";
//Tab modules
import { home } from "./home.js";
import { menu } from "./menu.js";
import { contact } from "./contact.js";
import backgroundImg from './womaneatingfood.jpg';

export const pageBuilder = (function(doc) {

    //Get main container
    const mainCont = doc.getElementById('mainContainer');

    //Create main containers
    const header = doc.createElement('div');
    const nav = doc.createElement('div');
    const backImg = doc.createElement('img');
    const content = doc.createElement('div');

    //Set container attributes
    header.setAttribute('id', 'header');
    nav.setAttribute('id', 'nav');
    backImg.setAttribute('src', backgroundImg);
    backImg.setAttribute('id','backimg');
    backImg.setAttribute('alt','Woman eating food in a restraurant');
    content.setAttribute('id', 'content');

    //Header for restaurant name
    const restaurantName = doc.createElement('h1');
    restaurantName.textContent='Fancy Pants Diner';
    header.appendChild(restaurantName);

    //Create nav bar
    function createTab(tab, builder) {
        const newTab = doc.createElement('div');
        newTab.setAttribute('id', tab + 'tab');
        newTab.classList.add('navbtn');
        const newTabH2 = doc.createElement('h2');
        newTabH2.textContent = tab;
        newTab.appendChild(newTabH2);
        nav.appendChild(newTab);
        newTab.addEventListener('click', builder);
    }
    createTab('home', home.homeBuilder);
    createTab('menu', menu.menuBuilder);
    createTab('contact', contact.contactBuilder);

    //Append main containers to document
    mainCont.appendChild(header);
    mainCont.appendChild(nav);
    mainCont.appendChild(backImg);
    mainCont.appendChild(content);

    return {

    }
})(document);