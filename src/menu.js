//Builds menu page

import { remover } from './removeContent.js';

//Menu images
import loadedNachos from './loadednachos.jpg';
import charc from './charc.jpg';
import fries from './fries.jpg';
import chicken from './chicken.jpg';
import burger from './burger.jpg';
import waffle from './waffles.jpg';
import burrito from './burrito.jpg';
import sandwich from './sandwich.jpg';

export const menu = (function(doc) {
    
    function menuBuilder() {
        //Removes content
        remover.blankSlate();

        const menuTab = doc.getElementById('menutab');

        //Add selected tab
        menuTab.classList.add('selectedTab');

        buildContent();
    }

    function buildContent() {
        //Menu header
        const mainMenuH = doc.createElement('h1');
        mainMenuH.classList.add('topH');
        mainMenuH.textContent = 'Menu';
        content.appendChild(mainMenuH);

        //Appetizers
        const appetDiv = doc.createElement('div');
        appetDiv.classList.add('menuList');

        const appetH = doc.createElement('h1');
        appetH.textContent = 'Not-so-fancy Apps';
        content.appendChild(appetH);

        addMenuItem('Loaded nachos', loadedNachos, appetDiv);
        addMenuItem('Charcuterie', charc, appetDiv);
        addMenuItem('Parm fries', fries, appetDiv);
        addMenuItem('Wings', chicken, appetDiv);

        content.appendChild(appetDiv);

        //Entrees

        const entreeDiv = doc.createElement('div');
        entreeDiv.classList.add('menuList');

        const entreeH = doc.createElement('h1');
        entreeH.textContent = 'Entrees';
        content.appendChild(entreeH);

        addMenuItem('Ultimate burger', burger, entreeDiv);
        addMenuItem('Chicken \'n waffles', waffle, entreeDiv);
        addMenuItem('Burrito platter', burrito, entreeDiv);
        addMenuItem('Vegan pesto melt', sandwich, entreeDiv);

        content.appendChild(entreeDiv);
    }

    //Create new menu item
    function addMenuItem(item, img, div) {
        const newDiv = doc.createElement('div');
        const newImg = doc.createElement('img');
        const newP = doc.createElement('p');

        newDiv.classList.add('menuItem');

        newImg.setAttribute('src',img);
        newP.textContent = item;

        newDiv.appendChild(newImg);
        newDiv.appendChild(newP);
        div.appendChild(newDiv);
    }

    return {
        menuBuilder,
    }

})(document);