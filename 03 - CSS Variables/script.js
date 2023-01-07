const input = document.querySelectorAll('.controls input');

function handleChange() {
    const suffix = this.dataset.sizing || '';

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}


input.forEach(inputs => {
    inputs.addEventListener('mousemove', handleChange) 
});

input.forEach(inputs => {
    inputs.addEventListener('change', handleChange) 
});