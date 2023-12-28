//Builds contact page

import { remover } from "./removeContent.js";

export const contact = (function(doc) {
    
    function contactBuilder() {
        remover.blankSlate();

        const contactTab = doc.getElementById('contacttab');

        //Add selected tab
        contactTab.classList.add('selectedTab');

        buildContent();
    }

    function buildContent() {
        const content = doc.getElementById('content');

        //Header
        const contactH = doc.createElement('h1');
        contactH.classList.add('topH');
        contactH.textContent = 'Contact Us';
        content.appendChild(contactH);

        //Contact info
        const phone = doc.createElement('p');
        phone.textContent = 'Phone: 970-123-4567';
        content.appendChild(phone);

        const email = doc.createElement('p');
        email.textContent = 'Email: fancypantsrestaurant@fp.com';
        content.appendChild(email);

        //Map
        const locationDiv = doc.createElement('div');
        const locationP = doc.createElement('p');
        const locationIFrame = doc.createElement('iframe');

        locationP.textContent = 'Address: 199 Trimble Ct, Fort Collins, CO 80524';
        content.appendChild(locationP);
        locationIFrame.setAttribute('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d378.73908778866024!2d-105.07607020662472!3d40.58768231299644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87694a8ad5343e4b%3A0xed2ba215df293d11!2sOld%20Town%20Square!5e0!3m2!1sen!2sus!4v1702959827882!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade')
        locationDiv.appendChild(locationIFrame);

        content.appendChild(locationDiv);

    }

    return {
        contactBuilder,
    }

})(document);