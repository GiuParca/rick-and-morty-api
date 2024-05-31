export default function characterCardView(characterModel) {
    const ul = document.createElement('ul');
    const li = document.createElement('li');
    
    const link = document.createElement('a');
    link.href = `#character?id=${characterModel.id}`;
    link.className = 'card-link';

    const image = document.createElement('img');
    image.src = characterModel.image;
    const innerDiv = document.createElement('div');
    const h2 = document.createElement('h2');
    h2.innerText = characterModel.name;

    li.appendChild(image);
    li.appendChild(innerDiv);
    innerDiv.appendChild(h2);

    link.appendChild(li);
    ul.appendChild(link);

    const div = document.createElement('div');
    div.appendChild(ul);

    return div;
}










