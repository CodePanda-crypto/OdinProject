// import your function
import { myName } from './myName';
import { username } from './myName';

function component() {
  let element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'],'');

    return element;

    let Name = document.createElement(div);
    Name.textContent = `${myName}`;
    return Name;

    let Username = document.createElement(div);
    Username.textContent = `${username}`;
    return Username;

}


document.body.appendChild(component());
