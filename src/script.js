// Creating the HTML slider element
const sliderObject = document.createElement('div');
sliderObject.className = 'slider-object';
const sliderHeader = document.createElement('h2');
sliderHeader.className = 'slider-header';
const headerText = document.createTextNode('Test')
sliderHeader.append(headerText);
sliderObject.append(sliderHeader);

const container = document.getElementsByClassName('container')[0];

// calling an 'appendChild' multiple times doesn't work, as the same node is being re-added.
// we need to create another element each time. Hopefully, cloneNode does that for us

const clamp = (min, num, max) => Math.min(Math.max(num, min), max)

let numOfSliders = clamp(1, Math.floor(window.innerWidth / 100), 8) ;
console.log(numOfSliders);

for (let i = 0; i < numOfSliders; i++) {
    container.append(sliderObject.cloneNode(true))
}