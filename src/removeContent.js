//Removes all content

export const remover = (function(doc) {
    

    function blankSlate() {
        const content = doc.getElementById('content');
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }
    }

    return {
        blankSlate,
    }
})(document);