/**
 * Created by zhaojm on 07/04/2017.
 */


import dispatcher from './dispatcher'
import views from './views'
//import utils from './utils'
import apis from './apis'
import constants from './constants'


let on_window_load = ()=> {
    apis.get_game_id_list((data)=> {
        // TODO 这里更新model,然后注册监听model变化, 去更新界面, flow循环

    });
};


let on_game_id_list_changed = ()=> {
    $('#gameId').html(views.game_id_select_view(data));
    let gameid = $('#gameId').val();
};
let on_play_mode_list_changed = ()=> {
    $('#playMode').html(views.play_mode_select_view(data));
    let templ = $('#playMode').val();

};
let on_templ_changed = ()=> {

};


let init = () => {
    dispatcher.addListener(constants.window_load, on_window_load);

    dispatcher.addListener(constants.game_id_list_changed, on_game_id_list_changed);
    dispatcher.addListener(constants.play_mode_list_changed, on_play_mode_list_changed);
    dispatcher.addListener(constants.templ_changed, on_templ_changed);
};

export default {
    init
}