export default {
    update(el, binding) {
        const intersectionObserver = new IntersectionObserver((entries, observer) => {
            let entry = entries[0]
            if (entry.isIntersecting) {
                entry.target.src = entry.target.dataset['url']
                entry.target.classList.add('active')
                observer.unobserve(entry.target);
            }
        });
        if (binding.value) {
            intersectionObserver.observe(el)
        }
    }
}