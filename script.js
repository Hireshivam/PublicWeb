document.addEventListener('DOMContentLoaded', () => {
    const helloBtn = document.getElementById('helloBtn');
    const byeBtn = document.getElementById('byeBtn');
    const displayText = document.getElementById('displayText');
    const body = document.body;

    helloBtn.addEventListener('click', () => {
        displayText.textContent = 'Hello';
        body.style.backgroundColor = 'lavender';
    });

    byeBtn.addEventListener('click', () => {
        displayText.textContent = 'Bye';
        body.style.backgroundColor = 'lightyellow';
    });
});
