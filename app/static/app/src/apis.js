/**
 * Created by zhaojm on 07/04/2017.
 */

import jQuery from 'jquery'

const $ = jQuery.$;

const get_game_id_list = (callback) => {
    $.ajax({
        url: "/game_id_list",
        dataType: "json",
        method: "GET"
    }).success((data, textStatus, jqXHR)=> {
        callback(data);
    })
};

const get_play_mode_list_by_game_id = (game_id, callback) => {
    $.ajax({
        url: "/play_mode_list/" + game_id,
        dataType: "json",
        method: "GET"
    }).success((data, textStatus, jqXHR)=> {
        callback(data);
    })
};

const get_templ_by_templ_name = (templ_name, callback) => {
    $.ajax({
        url: "/templ/" + templ_name,
        dataType: "json",
        method: "GET"
    }).success((data, textStatus, jqXHR)=> {
        callback(data);
    })
};

export default {
    get_game_id_list,
    get_play_mode_list_by_game_id,
    get_templ_by_templ_name
}