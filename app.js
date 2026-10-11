const toggleBtn = document.querySelector('#mode-toggle')

toggleBtn.addEventListener('change', function () {
    this.checked ? document.body.classList.add('dark-theme') : document.body.classList.remove('dark-theme')
    }
)