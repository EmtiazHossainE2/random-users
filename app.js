fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => displayUser(data))

const displayUser = users => {
    const results = users.results
    userDisplay(results)

}
function userDisplay(results) {
    results.forEach(user => {
        console.log(user.location)
        const randomUser = document.getElementById('random-user')
        randomUser.innerHTML = `
            <img src="${user.picture.large}">
            <h4>City : ${user.location.city}</h4>
            <h5>State : ${user.location.state}</h5>
            <h5>Country : ${user.location.country}</h5>
            <p>Coordinates : ${user.location.coordinates.latitude} , ${user.location.coordinates.longitude}</p>
            <p>Street : ${user.location.street.number},${user.location.street.name}</p>
            <p>Timezone : ${user.location.timezone.offset} , ${user.location.timezone.description}</p>
            <button onclick="randomBtn()" class="btn btn-success">Random User</button>
        `
    })
}
const randomBtn = () => {
    fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => displayBtn(data))
}
const displayBtn = something => {
    console.log(something.results)
    const results = something.results
    userDisplay(results)

}
