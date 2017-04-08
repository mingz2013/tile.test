/**
 * Created by zhaojm on 08/04/2017.
 */

import Component from './component'
import TitleComponent from './title_component'

class BodyComponent extends Component {
    constructor() {

    }

    render() {
        $('body').html(this.view());
    }

}