/**
 * Created by zhaojm on 08/04/2017.
 */

import Component from './component'
import TitleComponent from './title_component'

class BodyComponent extends Component {
    constructor() {
        this.model = {};
        this.title_component = new TitleComponent();
    }

    render() {
        $('body').html(this.view());
    }

    view() {
        return this.title_component.view();
    }

    set_model(model) {
        this.model = model;
        this.render();
    }

}