console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submitted');
}



let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let mainImage = document.querySelector('img');

mainImage.addEventListener("mouseover", () => {
	alert('You are so awesome!')
})
