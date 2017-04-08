/**
 * Created by zhaojm on 07/04/2017.
 *
 * 这里是model,所有数据定义get set方法,set的时候触发changed事件
 *
 */


import dispatcher from './dispatcher'
import event_type from './event_type'

let game_id_list = [];
let play_mode_list = [];
let templ = {};

let project_data = {};

let get_game_id_list = () => {
    return game_id_list;
};

let set_game_id_list = (game_ids) => {
    game_id_list = game_ids;
    dispatcher.dispatch_event(event_type.game_id_list_changed);
};

let get_play_mode_list = ()=> {
    return play_mode_list;
};
let set_play_mode_list = (play_modes) => {
    play_mode_list = play_modes;
    dispatcher.dispatch_event(event_type.play_mode_list_changed);
};

let get_templ = () => {
    return templ;
};

let set_templ = (t) => {
    templ = t;
    dispatcher.dispatch_event(event_type.templ_changed);
};


let get_tile_pool = () => {
    return templ.tiles;
};

let init = ()=> {
    game_id_list = [];
    play_mode_list = [];
    templ = {};
};

export default {
    init,
    get_game_id_list,
    set_game_id_list,
    get_play_mode_list,
    set_play_mode_list,
    get_templ,
    set_templ,
    get_tile_pool
}

