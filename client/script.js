const generate = () => {
    let message = quotes[Math.floor(Math.random() * (quotes.length - 1))];
    document.querySelector('h2').textContent = `"${message}"`;
}
window.addEventListener('load', generate);
document.getElementById('btn__more-quotes').addEventListener('click', generate);
