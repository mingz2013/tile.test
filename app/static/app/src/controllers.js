/**
 * Created by zhaojm on 07/04/2017.
 *
 * 这里处理界面上的事件触发, 系统的事件触发,
 *
 * 网络api调用都在这里
 *
 */


import dispatcher from './dispatcher'
import constants from './constants'
import apis from './apis'


let on_window_load = ()=> {
    apis.get_game_id_list((data)=> {
        // TODO 这里更新model,然后注册监听model变化, 去更新界面, flow循环

    });
};

let on_game_id_changed = () => {
    let gameid = $('#gameId').val();
    apis.get_play_mode_list_by_game_id(game_id, (data) => {


    });
};

let on_play_mode_changed = ()=> {

};


let on_game_id_list_changed = ()=> {

};
let on_play_mode_list_changed = ()=> {


};
let on_templ_changed = ()=> {

};


let init = () => {
    dispatcher.addListener(constants.window_load, on_window_load);
    dispatcher.addListener(constants.game_id_changed, on_game_id_changed);
    dispatcher.addListener(constants.play_mode_changed, on_play_mode_changed);

    dispatcher.addListener(constants.game_id_list_changed, on_game_id_list_changed);
    dispatcher.addListener(constants.play_mode_list_changed, on_play_mode_list_changed);
    dispatcher.addListener(constants.templ_changed, on_templ_changed);
};

export default {
    init
}