/**
 * Created by zhaojm on 07/04/2017.
 */


import views from './views'
import utils from './utils'

const init = () => {
    utils.insert_view_to_body(views.title_view());
    utils.insert_view_to_body(views.select_view());
};

export default {
    init
}