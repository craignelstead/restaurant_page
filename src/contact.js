//Builds contact page

import { remover } from "./removeContent.js";

export const contact = (function(doc) {
    
    function contactBuilder() {
        remover.blankSlate();

        const content = doc.getElementById('content');
        const contactTab = doc.getElementById('contacttab');

        //Add selected tab
        contactTab.classList.add('selectedTab');

        doc.getElementById('content').textContent = 'CONTACT';
    }

    return {
        contactBuilder,
    }

})(document);