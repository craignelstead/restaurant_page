//Builds home page

import { remover } from "./removeContent.js";

export const home = (function(doc) {
    
    function homeBuilder() {
        remover.blankSlate();

        doc.getElementById('content').textContent = 'HOME';
    }

    return {
        homeBuilder,
    }

})(document);