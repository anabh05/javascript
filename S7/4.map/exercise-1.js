

const users = [{ id: 1, name: 'Abel' }, { id: 2, name: 'Julia' }, { id: 3, name: 'Pedro' }, { id: 4, name: 'Amanda' }];



let newUsers = users.map(function (element) {
    return `${element.name}`;
})


console.log(newUsers)