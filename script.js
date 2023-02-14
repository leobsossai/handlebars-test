
function fillTemplate() {
    var data = {
        title: 'Why handlebars is cool',
        list: [
            {name: 'you can generate stuff'},
            {name: 'it works on both ends'},
            {name: 'it weights like 24 kilobytes'},
            {name: 'haha templates go brrrrrrrr'}
        ],
        footer: 'What a footer, eh?'
    };
    let template = Handlebars.compile(document.querySelector('#template').innerHTML);
    let filled = template(data);
    document.querySelector('#output').innerHTML = filled;
}