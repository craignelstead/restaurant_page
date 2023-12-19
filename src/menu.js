//Builds menu page

import { remover } from "./removeContent.js";

export const menu = (function(doc) {
    
    function menuBuilder() {
        //Removes content
        remover.blankSlate();

        const content = doc.getElementById('content');
        const menuTab = doc.getElementById('menutab');

        //Add selected tab
        menuTab.classList.add('selectedTab');

        doc.getElementById('content').textContent = 'MENU';
    }

    return {
        menuBuilder,
    }

})(document);