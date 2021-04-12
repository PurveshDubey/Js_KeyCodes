let insert = document.getElementById('insert');

window.addEventListener('keydown', (event) => {
    document.querySelector('.key-container').innerHTML = event.keyCode;
    insert.innerHTML = `<div class="key">
    ${event.key === ' ' ? 'space' : event.key}
    <small>event.key</small>
</div>

<div class="key">
    ${event.keyCode}
    <small>event.keyCode</small>
</div>

<div class="key">
    ${event.code}
    <small>event.code</small>
</div>

<div class="key">
    ${event.location}
    <small>event.location</small>
</div>`
})