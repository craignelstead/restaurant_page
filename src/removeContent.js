//Removes all content

export const remover = (function(doc) {
    

    function blankSlate() {
        //Remove all content
        const content = doc.getElementById('content');
        while (content.firstChild) {
            content.removeChild(content.firstChild);
        }

        //Remove selected tab
        const tabs = Array.from(doc.querySelectorAll('.navbtn'));
        console.log(tabs);
        tabs.forEach((tab) => tab.classList.remove('selectedTab'));
    }

    return {
        blankSlate,
    }
})(document);