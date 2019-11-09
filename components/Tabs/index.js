// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


// const axiosPromise = axios.get('https://lambda-times-backend.herokuapp.com/topics');
// console.log(axiosPromise);

const tabCont = document.querySelector('.topics');

function tab(info) {
    const javascript = document.createElement('div');
    const bootstrap = document.createElement('div');
    const technology = document.createElement('div');
    const jquery = document.createElement('div');
    const nodejs = document.createElement('div');

    javascript.textContent = info.topics[0];
    bootstrap.textContent = info.topics[1];
    technology.textContent = info.topics[2];
    jquery.textContent = info.topics[3];
    nodejs.textContent = info.topics[4];

    tabCont.appendChild(javascript);
    tabCont.appendChild(bootstrap);
    tabCont.appendChild(technology);
    tabCont.appendChild(jquery);
    tabCont.appendChild(nodejs);

    javascript.classList.add('tab');
    bootstrap.classList.add('tab');
    technology.classList.add('tab');
    jquery.classList.add('tab');
    nodejs.classList.add('tab');

    return info;
}

axios.get('https://lambda-times-backend.herokuapp.com/topics').then(response => {
    console.log(response.data);
    tabCont.appendChild(tab(response.data));
});