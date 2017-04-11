/**
 * Created by zhaojm on 07/04/2017.
 *
 * 这里注册需要修改界面的事件, 根据数据去修改界面
 *
 */


import dispatcher from './dispatcher'
import event_type from './event_type'


// components
let game_id_select_view = (game_id_list) => {
    return game_id_list.map((game_id)=>`<option value="${game_id}">${game_id}</option>`).join('');
};
let play_mode_select_view = (play_mode_list) => {
    return play_mode_list.map((play_mode)=>`<option value="${play_mode.templ}">${play_mode.desc}</option>`).join('');
};

let tile_view = (tile, num) => {
    return `<div class="tile">
                <img src="${imagesReq('./' + tile + '.png')}" class="tile"/>
                <div class="dot">
                    <span>${num}</span>
                </div>
            </div>`
};

let tile_pool_view = (tiles) => {
    return tiles.map((color)=> {
        return color.map((tile) => tile_view(tile.tile, tile.tile_num)).join('');
    }).join('<br/>');
};

let project_data_radio_view = (desc) => {
    return `<label><input type="radio" name="rule"/>${desc}</label>`;
};

let project_data_tiles_view = (tiles) => {
    return tiles.map((tile)=> {
        return `<div class="tile">
                <img src="${imagesReq('./' + tile + '.png')}" class="tile"/>
            </div>`
    }).join('');
};

let project_data_view = (project_data) => {
    return project_data.map((line) => {
        return `<div>
            <div>${project_data_radio_view(line.desc)}</div>
            <div>${project_data_tiles_view(line.tiles)}</div>
        </div>`;
    }).join('');
};


// renders
let render_game_id_select_view = (game_id_list) => {
    $('#gameId').html(game_id_select_view(game_id_list));
    let gameid = $('#gameId').val();
    dispatcher.dispatch_event(event_type.view_game_id_changed, gameid);
};

let render_play_mode_select_view = (play_mode_list) => {
    $('#playMode').html(play_mode_select_view(play_mode_list));
    let templ = $('#playMode').val();
    dispatcher.dispatch_event(event_type.view_play_mode_changed, templ);
};

let render_tile_pool_view = (tile_pool) => {
    $('#tilePool').html(tile_pool_view(tile_pool));
};

let render_project_data_view = (project_data) => {
    $('#projectData').html(project_data_view(project_data));
};

// events
let on_model_game_id_list_changed = (game_id_list)=> {
    console.log(game_id_list);
    render_game_id_select_view(game_id_list);

};

let on_model_play_mode_list_changed = (play_mode_list)=> {
    console.log(play_mode_list);
    render_play_mode_select_view(play_mode_list);

};

let on_model_tile_pool_changed = (tile_pool)=> {
    console.log(tile_pool);
    render_tile_pool_view(tile_pool);
};

let on_model_project_data_changed = (project_data) => {
    console.log(project_data);
    render_project_data_view(project_data);
};

let init = () => {
    dispatcher.add_listener(event_type.model_game_id_list_changed, on_model_game_id_list_changed);
    dispatcher.add_listener(event_type.model_play_mode_list_changed, on_model_play_mode_list_changed);
    dispatcher.add_listener(event_type.model_tile_pool_changed, on_model_tile_pool_changed);
    dispatcher.add_listener(event_type.model_project_data_changed, on_model_project_data_changed);
};


export default {
    init
}