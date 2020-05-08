// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

// const tab = (topic)=>{
//     const theDiv = document.createElement('div');
//     theDiv.classList.add('tab');
//     theDiv.textContent = topic;
//     return theDiv;
// }
const topics = document.querySelector('.topics');

    const info = axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response =>{
        console.log('response', response.data);
        response.data.topics.forEach(topic=>{
            const theDiv = document.createElement('div');
            theDiv.classList.add('tab');
            theDiv.textContent = topic;
            topics.append(theDiv);
        });
    })
    .catch(err=>{
        console.log('err', err)
    })




