/**
 * Created by zhaojm on 07/04/2017.
 *
 * 这里定义常量, 主要是事件类型
 */



// model changed
let model_game_id_list_changed = "model_game_id_list_changed";
let model_play_mode_list_changed = "model_play_mode_list_changed";
let model_templ_changed = "model_templ_changed";
let model_tile_pool_changed = "model_tile_pool_changed";
let model_project_data_changed = "model_project_data_changed";

// view events
let view_window_load = "view_window_load";
let view_game_id_changed = "view_game_id_changed";
let view_play_mode_changed = "view_play_mode_changed";
let view_tile_pool_tile_clicked = "view_tile_pool_tile_clicked";
let view_project_data_changed = "view_project_data_changed";


// net events
let net_get_game_id_list = "net_get_game_id_list";
let net_get_play_mode_list = "net_get_play_mode_list";
let net_get_templ = "net_get_templ";

export default {

    model_game_id_list_changed,
    model_play_mode_list_changed,
    model_templ_changed,
    model_tile_pool_changed,
    model_project_data_changed,

    view_window_load,
    view_game_id_changed,
    view_play_mode_changed,
    view_tile_pool_tile_clicked,
    view_project_data_changed,

    net_get_game_id_list,
    net_get_play_mode_list,
    net_get_templ


}