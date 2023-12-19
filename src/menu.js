//Builds menu page

import { remover } from "./removeContent.js";

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
        appetDiv.setAttribute('id', 'menuList');

        const appetH = doc.createElement('h1');
        appetH.textContent = 'Not-so-fancy Apps';
        content.appendChild(appetH);

        addMenuItem('Jalepeno Poppers', './loadednachos.jpg', appetDiv);
        addMenuItem('Other food', './loadednachos.jpg', appetDiv);

        content.appendChild(appetDiv);

        //Entrees


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