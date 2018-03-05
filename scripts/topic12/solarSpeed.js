const input = document.getElementById('timing');

function update() {
    const s = this.dataset.timing;
    document.documentElement.style.setProperty('--timing', this.value + s);
}

input.addEventListener('change', update);
input.addEventListener('mousemove', update);