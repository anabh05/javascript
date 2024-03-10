
const ul = document.createElement('ul')
document.body.appendChild(ul)

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

apps.forEach(app => {
    const li = document.createElement('li');
    li.textContent = app;
    ul.appendChild(li)

})
