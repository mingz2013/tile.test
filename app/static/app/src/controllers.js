/**
 * Created by zhaojm on 07/04/2017.
 */


import views from './views'
import utils from './utils'
import apis from './apis'
//let $ = require('jQuery');

let init_gameid_select = () => {
    apis.get_game_id_list((data)=> {
        $('#gameId').html(views.game_id_select_view(data));
    });
};
let init_play_mode_select = (game_id) => {
    apis.get_play_mode_list_by_game_id(game_id, (data) => {
        $('#playMode').html(views.play_mode_select_view(data));
    });
};

let init_title_view = () => {
    utils.insert_view_to_body(views.title_view());
};

let init_select_view = () => {
    utils.insert_view_to_body(views.select_view());
    $('#gameId').change(() => {
        console.log("gameid change..");
        let gameid = $(this).children('option:selected').val();
        init_play_mode_select(gameid);
    });
    init_gameid_select();
};


const init = () => {
    init_title_view();
    init_select_view();


};


export default {
    init,
    init_play_mode_select
}