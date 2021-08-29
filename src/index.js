const content = {{ __path__ }};
console.log(content);
document.getElementsByTagName('body')[0].innerHTML = content;

