//Removes all content

export const menuBuilder = (function(doc) {
    const mainCont = doc.getElementById('mainContainer');
    while (mainCont.firstChild) {
        mainCont.removeChild(mainCont.firstChild);
    }
})(document);