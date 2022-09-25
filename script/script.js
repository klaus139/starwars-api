async function main(){
    const response = await fetch('https://swapi.dev/api/people/');
    const data = await response.json();

    const people = data.results;
    const rootDiv = document.getElementById('root');
    const peopleDiv = document.createElement('div');
    peopleDiv.setAttribute('class', 'people');
    let count = 0;
    for (const person of people) {
        const personDiv = document.createElement('div');
        personDiv.setAttribute('class', 'person');

        const personImg = document.createElement('img');

        const btn = document.createElement('button');
        btn.setAttribute('class', 'btn2');
        btn.innerText = person.name;
        btn.addEventListener('click', () => displayInformation(person));

        const imageSource = 'image';
        personImg.src = `${imageSource}${count}.jpg`;
        personImg.alt = person.name;
        person.img = personImg.src;
        console.log(1, person.img, 2, person);


        personDiv.appendChild(personImg);
        personDiv.appendChild(btn);
        peopleDiv.appendChild(personDiv);
        count++;

    }
    rootDiv.innerHTML = '';
    rootDiv.appendChild(peopleDiv);
}

    function displayInformation(person) {
        const rootDiv = document.getElementById('root');
        const informationDiv = document.createElement('div');
        informationDiv.className = 'information';
        const splitedImgSource = person.img.split('/')[3];
        informationDiv.innerHTML = `
        <img src= ${splitedImgSource} alt= ${person.name}>
        <div>
        <p><strong>Name:</strong> ${person.name}</p>
        <p><strong>Height:</strong> ${person.height}cm</p>
        <p><strong>Gender:</strong> ${person.gender}</p>
        </div>`;

        const btn = document.createElement('button');
        btn.setAttribute('class', 'btn1');
        btn.innerText = 'Back';
        btn.addEventListener('click', () => main());
        informationDiv.appendChild(btn);

        rootDiv.innerHTML = '';
        rootDiv.appendChild(informationDiv);
    }

main();

module.exports = {main}
