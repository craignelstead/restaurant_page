//Builds home page

import { remover } from "./removeContent.js";

export const home = (function(doc) {
    
    function homeBuilder() {
        remover.blankSlate();

        const homeTab = doc.getElementById('hometab');

        homeTab.classList.add('selectedTab');

        buildContent();
    }

    function buildContent() {
        //Blurb
        const blurbP = doc.createElement('p');
        blurbP.textContent = 'What makes fancy pants fancy? At Fancy Pants \
            Diner, we believe fancy is in the eye of the beholder. So bring \
            your sweatpants, khakis, jorts, or whatever may have you. As long as \
            the wasteband stretches to make room for the delicious food you are \
            about to devour, we think you will enjoy your experience.';
        content.appendChild(blurbP);

        //Hours
        const hoursDiv = doc.createElement('div');
        const hoursH = doc.createElement('h1');
        hoursH.textContent = 'Hours';
        hoursDiv.appendChild(hoursH);
        content.appendChild(hoursDiv);
        const list = doc.createElement('li');

        const weekday = '10am - 10pm';
        const weekend = '10am - 12pm';
        const sunday = '12pm - 11pm';

        function createHours(day, typeOfDay) {
            const thisDay = doc.createElement('ul');
            thisDay.textContent = `${day}: ${typeOfDay}`;
            list.appendChild(thisDay);
        }

        createHours('Sunday', sunday);
        createHours('Monday', weekday);
        createHours('Tuesday', weekday);
        createHours('Wednesday', weekday);
        createHours('Thursday', weekday);
        createHours('Friday', weekend);
        createHours('Saturday', weekend);

        hoursDiv.appendChild(list);

        //Location
        const locationDiv = doc.createElement('div');
        const locationH = doc.createElement('h1');
        const locationP = doc.createElement('p');
        const locationIFrame = doc.createElement('iframe');

        locationH.textContent = 'Location';
        locationDiv.appendChild(locationH);
        locationP.textContent = '199 Trimble Ct, Fort Collins, CO 80524';
        locationDiv.appendChild(locationP);
        locationIFrame.setAttribute('src','https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d378.73908778866024!2d-105.07607020662472!3d40.58768231299644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87694a8ad5343e4b%3A0xed2ba215df293d11!2sOld%20Town%20Square!5e0!3m2!1sen!2sus!4v1702959827882!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade')
        locationDiv.appendChild(locationIFrame);

        content.appendChild(locationDiv);
    }

    return {
        homeBuilder,
    }

})(document);