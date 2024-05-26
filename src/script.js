const sliderSource = document.getElementById('slider-template').innerHTML;

const sliderTemplate = Handlebars.compile(sliderSource);

const data = {
    headers: ['Master', 'Drums', 'Synthesizer', 'Guitar', 'Bass', 'Piano', 'Strings all day', 'Drone'],
    test: 'test',
}



const compiledSlider = sliderTemplate(data);

const targetContainer = document.getElementsByClassName('container')[0];

targetContainer.innerHTML = compiledSlider;