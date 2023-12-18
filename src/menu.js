//Builds menu page

import { remover } from "./removeContent.js";

export const menu = (function(doc) {
    
    function menuBuilder() {
        //Removes content
        remover.blankSlate();

        doc.getElementById('content').textContent = 'MENU';
    }

    return {
        menuBuilder,
    }

})(document);