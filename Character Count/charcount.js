
let h1 = document.createElement('h1');
h1.innerHTML = 'Character Counter';

let div = document.createElement('div');
div.setAttribute('class', 'main-div');
let textarea = document.createElement('textarea');
textarea.setAttribute('placeholder','Enter Text Here....')
textarea.setAttribute('rows', '4');
textarea.setAttribute('cols', '55');
textarea.setAttribute('onkeyup', 'countChats(this)');

let span = document.createElement('span');
span.innerHTML = "You inserted characters";
let p = document.createElement('p');
p.setAttribute('id', 'charNum');

let count = document.createElement('div');
count.setAttribute('class', 'count-div');


count.append(p);
div.append(textarea, span);
document.body.append(h1,div,count);

function countChats(text) {
    document.getElementById("charNum").innerHTML = text.value.length +`  characters`;
}

