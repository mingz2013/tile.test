/**
 * Created by zhaojm on 07/04/2017.
 */


import views from './views'
import utils from './utils'
import apis from './apis'
//let $ = require('jQuery');

const init_gameid_select = () => {
    apis.get_game_id_list((data)=> {
        $('#gameId').html(views.game_id_select_view(data));
    });
};



const init = () => {
    utils.insert_view_to_body(views.title_view());
    utils.insert_view_to_body(views.select_view());

    init_gameid_select();

};

export default {
    init
}