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
import models from './models'


let on_window_load = ()=> {
    apis.get_game_id_list((data)=> {
        models.set_game_id_list(data);
    });
};

let on_game_id_changed = () => {
    let gameid = $('#gameId').val();
    apis.get_play_mode_list_by_game_id(gameid, (data) => {
        models.set_play_mode_list(data);
    });
};

let on_play_mode_changed = ()=> {
    let templ = $('#playMode').val();
    apis.get_templ_by_templ_name(templ, (data)=> {
        models.set_templ(data);
    });
};



let init = () => {
    dispatcher.add_listener(event_type.window_load, on_window_load);
    dispatcher.add_listener(event_type.game_id_changed, on_game_id_changed);
    dispatcher.add_listener(event_type.play_mode_changed, on_play_mode_changed);
};

export default {
    init
}