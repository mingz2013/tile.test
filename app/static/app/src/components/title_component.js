/**
 * Created by zhaojm on 08/04/2017.
 */
import Component from './component'

class TitleComponent extends Component {
    constructor() {
        this.model = {};

    }

    render() {
        return this.view();
    }

    view() {
        return `<div><h1>${this.model.title}</h1></div>`
    }

    set_model(model) {
        this.model = model;
        this.render();
    }

}