/**
 * Created by zhaojm on 07/04/2017.
 */

//let $ = require('jQuery');


let base_path = '/tile';

const get_game_id_list = (callback) => {
    $.ajax({
        url: base_path + "/game_id_list",
        dataType: "json",
        method: "GET"
    }).done((data, textStatus, jqXHR)=> {
        let json_obj = JSON.parse(data);
        callback(json_obj);
    })
};

const get_play_mode_list_by_game_id = (game_id, callback) => {
    $.ajax({
        url: base_path + "/play_mode_list/" + game_id,
        dataType: "json",
        method: "GET"
    }).done((data, textStatus, jqXHR)=> {
        let json_obj = JSON.parse(data);
        callback(json_obj);
    })
};

const get_templ_by_templ_name = (templ_name, callback) => {
    $.ajax({
        url: base_path + "/templ/" + templ_name,
        dataType: "json",
        method: "GET"
    }).done((data, textStatus, jqXHR)=> {
        let json_obj = JSON.parse(data);
        callback(json_obj);
    })
};

export default {
    get_game_id_list,
    get_play_mode_list_by_game_id,
    get_templ_by_templ_name
}