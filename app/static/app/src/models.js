/**
 * Created by zhaojm on 07/04/2017.
 *
 * 这里是model,所有数据定义get set方法,set的时候触发changed事件
 *
 */


import dispatcher from './dispatcher'
import event_type from './event_type'

// data
let _game_id_list = [];
let _play_mode_list = [];
let _templ = {};
let _tile_pool = {};

let _project_data = {};


// getter/setter
let get_game_id_list = () => {
    return _game_id_list;
};

let set_game_id_list = (game_id_list) => {
    _game_id_list = game_id_list;
    dispatcher.dispatch_event(event_type.model_game_id_list_changed, _game_id_list);
};

let get_play_mode_list = ()=> {
    return _play_mode_list;
};
let set_play_mode_list = (play_mode_list) => {
    _play_mode_list = play_mode_list;
    dispatcher.dispatch_event(event_type.model_play_mode_list_changed, _play_mode_list);
};

let get_templ = () => {
    return _templ;
};

let set_templ = (templ) => {
    _templ = templ;
    dispatcher.dispatch_event(event_type.model_templ_changed, _play_mode_list);
};


let get_tile_pool = () => {
    return _tile_pool;
};
let set_tile_pool = (tile_pool) => {
    _tile_pool = tile_pool;
    dispatcher.dispatch_event(event_type.model_tile_pool_changed, _tile_pool);
};

let get_project_data = () => {
    return _project_data;
};

let set_project_data = (project_data) => {
    _project_data = project_data;
    dispatcher.dispatch_event(event_type.model_project_data_changed, _project_data);
};


let add_one_tile = (tile) => {
    _tile_pool.forEach((color)=> {
        color.forEach((t)=> {
            if (t.tile == tile) {
                if (t.tile_num > 0) {

                    _project_data.forEach((r) => {
                        if (r.checked == true) {
                            if (r.count < 0 || r.tiles.length < r.count) {
                                r.tiles.push(tile);
                                if (r.sort) {
                                    r.tiles.sort();
                                }
                                set_project_data(_project_data);
                                t.tile_num--;
                                set_tile_pool(_tile_pool);
                                return true;
                            }
                        }
                    });

                }
                return true;
            }
        });
    });
};

let project_data_checked = (rule) => {
    _project_data.forEach((r) => {
        if (r.name == rule.name) {
            r.checked = true;
        } else {
            r.checked = false;
        }
    });
    set_project_data(_project_data);
};



// events
let on_model_templ_changed = ()=> {

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

    set_project_data(_templ.rule);
};

let on_net_get_game_id_list = (json_obj)=> {
    set_game_id_list(json_obj);
};

let on_net_get_play_mode_list = (json_obj) => {
    set_play_mode_list(json_obj);
};
let on_net_get_templ = (json_obj)=> {
    set_templ(json_obj);
};

let on_view_tile_pool_tile_clicked = (tile) => {
    console.log(tile);
    add_one_tile(tile);
};

let on_view_project_data_changed = (rule) => {
    project_data_checked(rule);
};

let init = ()=> {
    _game_id_list = [];
    _play_mode_list = [];
    _templ = {};
    _tile_pool = {};

    dispatcher.add_listener(event_type.model_templ_changed, on_model_templ_changed);

    dispatcher.add_listener(event_type.net_get_game_id_list, on_net_get_game_id_list);
    dispatcher.add_listener(event_type.net_get_play_mode_list, on_net_get_play_mode_list);
    dispatcher.add_listener(event_type.net_get_templ, on_net_get_templ);

    dispatcher.add_listener(event_type.view_tile_pool_tile_clicked, on_view_tile_pool_tile_clicked);
    dispatcher.add_listener(event_type.view_project_data_changed, on_view_project_data_changed);
};

export default {
    init
}

