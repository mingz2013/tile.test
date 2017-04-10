/**
 * Created by zhaojm on 07/04/2017.
 *
 * 这里是model,所有数据定义get set方法,set的时候触发changed事件
 *
 */


import dispatcher from './dispatcher'
import event_type from './event_type'

let _game_id_list = [];
let _play_mode_list = [];
let _templ = {};
let _tile_pool = {};

let _project_data = {};

let get_game_id_list = () => {
    return _game_id_list;
};

let set_game_id_list = (game_id_list) => {
    _game_id_list = game_id_list;
    dispatcher.dispatch_event(event_type.game_id_list_changed);
};

let get_play_mode_list = ()=> {
    return _play_mode_list;
};
let set_play_mode_list = (play_mode_list) => {
    _play_mode_list = play_mode_list;
    dispatcher.dispatch_event(event_type.play_mode_list_changed);
};

let get_templ = () => {
    return _templ;
};

let set_templ = (templ) => {
    _templ = templ;
    dispatcher.dispatch_event(event_type.templ_changed);
};


let get_tile_pool = () => {
    return _tile_pool;
};
let set_tile_pool = (tile_pool) => {
    _tile_pool = tile_pool;
    dispatcher.dispatch_event(event_type.tile_pool_changed);
};


let on_templ_changed = ()=> {
    let tiles = _templ.tiles || [];
    let tile_pool = tiles.reduce((acc, color, i) => {
        let c = color.reduce((accc, tile, ii) => {
            accc.push({
                'tile': tile,
                'tile_num': _templ.tile_num
            });
            return accc;
        }, []);
        acc.push(c);
        return acc;
    }, []);

    set_tile_pool(tile_pool);
};


let init = ()=> {
    _game_id_list = [];
    _play_mode_list = [];
    _templ = {};
    _tile_pool = {};
    dispatcher.add_listener(event_type.templ_changed, on_templ_changed);
};

export default {
    init,
    get_game_id_list,
    set_game_id_list,
    get_play_mode_list,
    set_play_mode_list,
    get_templ,
    set_templ,
    get_tile_pool,
    set_tile_pool
}

