/**
 * Created by zhaojm on 07/04/2017.
 *
 * 这里处理界面上的事件触发, 系统的事件触发,
 *
 * 网络api调用都在这里
 *
 */


import dispatcher from './dispatcher'
import event_type from './event_type'
import apis from './apis'


let on_window_load = ()=> {
    apis.get_game_id_list((data)=> {
        // TODO 这里更新model,然后注册监听model变化, 去更新界面, flow循环

    });
};

let on_game_id_changed = () => {
    let gameid = $('#gameId').val();
    apis.get_play_mode_list_by_game_id(gameid, (data) => {


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
    dispatcher.add_listener(event_type.window_load, on_window_load);
    dispatcher.add_listener(event_type.game_id_changed, on_game_id_changed);
    dispatcher.add_listener(event_type.play_mode_changed, on_play_mode_changed);

    dispatcher.add_listener(event_type.game_id_list_changed, on_game_id_list_changed);
    dispatcher.add_listener(event_type.play_mode_list_changed, on_play_mode_list_changed);
    dispatcher.add_listener(event_type.templ_changed, on_templ_changed);
};

export default {
    init
}