//Builds contact page

import { remover } from "./removeContent.js";

export const contact = (function(doc) {
    
    function contactBuilder() {
        remover.blankSlate();

        doc.getElementById('content').textContent = 'CONTACT';
    }

    return {
        contactBuilder,
    }

})(document);