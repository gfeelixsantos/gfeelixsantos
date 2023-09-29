const acordeonTrigger = document.querySelectorAll('.acordeon .trigger')

acordeonTrigger.forEach( (trigger) => {
    trigger.addEventListener('click', () => {
        const acordeon = trigger.nextElementSibling
        const acordeonSection = trigger.parentElement

        acordeon.classList.toggle('open')
        acordeonSection.classList.toggle('open')
    })
})