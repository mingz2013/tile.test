/**
 * Created by zhaojm on 07/04/2017.
 */


import views from './views'
import utils from './utils'
import apis from './apis'
//let $ = require('jQuery');


let init_gameid_select = () => {
    apis.get_game_id_list((data)=> {
        // TODO 这里更新model,然后注册监听model变化, 去更新界面, flow循环
        $('#gameId').html(views.game_id_select_view(data));
        let gameid = $('#gameId').val();
        init_play_mode_select(gameid);
    });
};
let init_play_mode_select = (game_id) => {
    apis.get_play_mode_list_by_game_id(game_id, (data) => {
        $('#playMode').html(views.play_mode_select_view(data));
        let templ = $('#playMode').val();


    });
};


const init = () => {
    init_gameid_select();


};


export default {
    init,
    init_play_mode_select
}