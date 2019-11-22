import { LazyImageSelector } from './src/components/lazyImageSelector'
import lazyLoad from './src/directives/lazy-load'
const LazyImageSelectorPlugin = {
    install(Vue) {
        Vue.directive('lazy-load', lazyLoad)
        Vue.component("ImgLazySelector", LazyImageSelector);
    }
};

export default LazyImageSelectorPlugin;