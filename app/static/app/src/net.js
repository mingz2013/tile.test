/**
 * Created by zhaojm on 07/04/2017.
 *
 * 这里访问网络的api
 *
 */
import dispatcher from './dispatcher'
import event_type from './event_type'


let _base_path = '/tile';


let _ajax_get = (url, callback) => {
    $.ajax({
        url: url,
        dataType: "json",
        method: "GET"
    }).done((data, textStatus, jqXHR)=> {
        let json_obj = JSON.parse(data);
        callback(json_obj);
    })
};

let get_game_id_list = () => {
    let url = _base_path + "/game_id_list";
    _ajax_get(url, (json_obj) => {
        dispatcher.dispatch_event(event_type.net_get_game_id_list, json_obj);
    });
};

let get_play_mode_list_by_game_id = (game_id) => {
    let url = _base_path + "/play_mode_list/" + game_id;
    _ajax_get(url, (json_obj)=> {
        dispatcher.dispatch_event(event_type.net_get_play_mode_list, json_obj);
    });
};

let get_templ_by_templ_name = (templ_name) => {
    let url = _base_path + "/templ/" + templ_name;
    _ajax_get(url, (json_obj)=> {
        dispatcher.dispatch_event(event_type.net_get_templ, json_obj);
    });

};


// events
let on_view_window_load = ()=> {
    get_game_id_list();
};

let on_view_game_id_changed = (gameid) => {
    get_play_mode_list_by_game_id(gameid);
};

let on_view_play_mode_changed = (templ)=> {
    get_templ_by_templ_name(templ);
};


let init = () => {
    dispatcher.add_listener(event_type.view_window_load, on_view_window_load);
    dispatcher.add_listener(event_type.view_game_id_changed, on_view_game_id_changed);
    dispatcher.add_listener(event_type.view_play_mode_changed, on_view_play_mode_changed);
};

export default {
    init
};

