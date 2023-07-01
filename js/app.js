const buttonHeight = 20;
const buttonWidth = 50;

const maxWidth = window.innerWidth - buttonWidth;
const maxHeight = window.innerHeight - buttonHeight;

window.addEventListener('DOMContentLoaded',()=> {
	const button = document.getElementById('b1');
	button.addEventListener('click',()=> alert('Ma Ma nor! Ya Bu Chik Ya Mr Pl'));
	button.addEventListener('mouseover',()=>{
		b1.style.left =  Math.floor(Math.random() * (maxWidth+1))+'px';
		b1.style.top = Math.floor(Math.random() * (maxHeight+1))+'px';
	});
});
// window.addEventListener('DOMContentLoaded',()=> {
// 	const button = document.getElementById('b2');
// 	button.addEventListener('click',()=> document.write('I Love You Too hehe'));
// })