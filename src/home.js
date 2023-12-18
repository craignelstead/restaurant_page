//Builds home page

import { remover } from "./removeContent.js";

export const home = (function(doc) {
    
    function homeBuilder() {
        remover.blankSlate();

        const content = doc.getElementById('content');
        const homeTab = doc.getElementById('hometab');

        homeTab.classList.add('selectedTab');

        doc.getElementById('content').textContent = 'HOME';
    }

    return {
        homeBuilder,
    }

})(document);