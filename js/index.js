const title = document.querySelector('.title')
const text = 'Have Something for You'.split('')
for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}</span>` // Fixed closing tag
  } else {
    title.innerHTML += `<span style='margin-right: 20px;'></span>` // Fixed closing tag
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; // Menghasilkan delay acak antara 0 hingga 3 detik
  element.style.setProperty('--delay', `${randomDelay}s`); // Using CSS variable instead of direct animation-delay
});
