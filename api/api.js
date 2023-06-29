// .fetch()  looks very similar to requests.get()
const res = fetch('https://catfact.ninja/fact')
.then((res) => {return res.json()}).then((data) => {console.log(data)});

// with fetch() you'll commonly see fetch().then().then().catch()

// let's look at async await syntax


const getCatFactFetch = async () => {
    const resp = await fetch('https://catfact.ninja/fact');
    const dat =  await resp.json();
    console.log('Async await fetch-', dat);
    return dat
}
getCatFactFetch();

// a quick example for post/put/delete requests/routes

// const getCatFactFetchPostExample = async () => {
//     const resp = await fetch('https://catfact.ninja/fact', {
//         method : 'POST',
//         body : {},
//         headers :{}
//     });
// }

// let's talk about one other way- Axios

let getData = async () => {
    const response = await axios.get('https://catfact.ninja/fact');
    console.log('Async/await AXIOS-', response.data);
    return response.data
}
// getData();

// make some stuff:
// typical setup getData() => loadData() => clearData()

let loadData = async () => {
    let data = await getData();
    console.log(data);
    // do something- make some html
    let newRow = `<tr><th scope="row"></th><td>${data.fact}</td></tr>`;
    document.getElementById('catBody').insertAdjacentHTML('afterbegin', newRow);
}

let clearData = () => {
    document.getElementById('catBody').innerHTML = '';
}
