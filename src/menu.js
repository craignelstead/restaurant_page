//Builds menu page

export const menuBuilder = (function(doc) {
    const mainCont = doc.getElementById('mainContainer');

    //Remove existing content
    while (mainCont.firstChild) {
        mainCont.removeChild(mainCont.firstChild);
    }
})(document);