export const LazyImageSelector = {
    props: {
        images: {
            type: Array,
            required: true,
        },
        rootUrl: {
            type: String,
            required: true,
        }
    },
    inheritAttrs: true,
    data: () => ({ image: null, loaded: false, index: 0 }),
    computed: {
        availableImage() {
            return this.rootUrl + this.image
        }
    },
    methods: {
        getAvailableImage() {
            let img = new Image()
            const image = this.images[this.index];
            img.onload = () => { 
                this.image = image; 
                this.loaded = true 
            }
            img.onerror = () => {
                this.index++
                this.getAvailableImage()
            }
            img.src = this.rootUrl + image
        },
    },
    mounted() {
        this.getAvailableImage()
    },
    render(h) {
        let img = h('img', {
            attrs: {
                'data-url': this.availableImage,
            },
            directives: [
                {
                    name: 'lazy-load',
                    value: this.loaded
                }
            ],
            domProps: this.$attrs,
        })
        return img
    },
}