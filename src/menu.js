//Builds menu page

import { remover } from "./removeContent.js";

export const menu = (function(doc) {
    
    function menuBuilder() {
        remover.blankSlate();

        doc.getElementById('content').textContent = 'MENU';
    }

    return {
        menuBuilder,
    }

})(document);