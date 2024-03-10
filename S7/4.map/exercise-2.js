const users = [
    { id: 1, name: 'Abel' },
    { id: 2, name: 'Julia' },
    { id: 3, name: 'Pedro' },
    { id: 4, name: 'Amanda' }];

    
for (let user of users) {
    if (user.name.startsWith('A')) {
        user.name = "Anacleto";
    }

}

let usuarios = users.map(function(user) {
  return user.name;
});
    


console.log(usuarios)
