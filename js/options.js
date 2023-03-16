import { SmartRentAPI as srapi } from "./SmartRentApi.js";

const fns = {
    load(){

        els.login = document.createElement('form');
        els.login.id = "login";

        els.email = document.createElement('label');
        els.email.appendChild(document.createElement('p'));
        els.email.querySelector('p').textContent = 'eMail:';
        els.email.querySelector('p').appendChild(document.createElement('br'));
        els.email.querySelector('p').appendChild(document.createElement('input'));
        els.email.querySelector('input').type = "text";
        els.login.appendChild(els.email);

        els.password = document.createElement('form');
        els.password.id = "password";
        els.password = document.createElement('label');
        els.password.appendChild(document.createElement('p'));
        els.password.querySelector('p').textContent = 'Password:';
        els.password.querySelector('p').appendChild(document.createElement('br'));
        els.password.querySelector('p').appendChild(document.createElement('input'));
        els.password.querySelector('input').type = "password";
        els.login.appendChild(els.password);

        els.loginbtn = document.createElement('div');
        els.loginbtn.classList.add('btn');
        els.loginbtn.id = 'loginbtn';
        els.loginbtn.textContent = 'Login';
        els.login.appendChild(els.loginbtn);

        els.ui_options = document.createElement('form');
        els.ui_options.id = "ui_options";
        els.ui_options.appendChild(document.createElement('p'));

        els.dark_preference = document.createElement('input');
        els.dark_preference.type = "checkbox";
        els.dark_preference.id = 'dark-preference';
        els.ui_options.querySelector('p').appendChild(els.dark_preference);
        els.ui_options.querySelector('p').appendChild(document.createTextNode('Dark Mode'));

        els.save = document.createElement('div');
        els.save.classList.add('btn');
        els.save.id = 'save';
        els.save.textContent = 'Save';
        els.ui_options.appendChild(els.save);

        document.querySelector('.wrapper').appendChild(els.login);
        document.querySelector('.wrapper').appendChild(els.ui_options);

    },

    login(){
        const srsession = srapi.session();
        session.user_id = srsession.user_id;
        session.access_token = srsession.access_token;
        session.first_name = srsession.first_name;

        els.login.querySelector('label').remove();
        els.login.querySelector('label').remove();
        els.loginbtn.remove();
        els.login;
        els.greeting = document.createElement('div');
        els.greeting.id = 'greeting';
        els.greeting.appendChild(document.createElement('p'));
        els.greeting.querySelector('p').textContent = `Welcome ${session.first_name}`;
        els.login.appendChild(els.greeting);
    },

    // save options to storage - Google examples are not working - trying something else.
    save_options(){
        els.save.textContent = 'Saved!';
    },
    // /**
    //  *  chrome.storage.sync.set({ key: value }).then(() => {
    //         console.log("Value is set to " + value);
    //     });
    // */
    restore_options(){

        
    }

    /**
        chrome.storage.sync.get(["key"]).then((result) => {
            console.log("Value currently is " + result.key);
        });
     */

};


const els = {
    dark_preference: document.querySelector('#dark-mode'),
    save: document.querySelector('#save')
}

const session = {};

fns.load();

// Event Listeners
document.addEventListener('DOMContentLoaded', fns.restore_options());
els.save.addEventListener('click',() => {fns.save_options()} );
els.loginbtn.addEventListener('click', () => {fns.login()} );