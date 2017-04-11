/**
 * Created by zhaojm on 11/04/2017.
 */

import dispatcher from '../dispatcher'
import event_type from '../event_type'

let on_sys_tile_pool_tile_click = (e) => {
    let tile = e.data;
    //let tile = e.currentTarget.tile;
    console.log(tile);
    dispatcher.dispatch_event(event_type.view_tile_pool_tile_clicked, tile);
};


let tile_view = (tile, num) => {
    return `<div class="tile">
                <img src="${imagesReq('./' + tile + '.png')}" class="tile" id="tile-pool-${tile}" tile="${tile}"/>
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

let render_tile_pool_view = (tile_pool) => {
    $('#tilePool').html(tile_pool_view(tile_pool));
    tile_pool.forEach((color)=> {
        color.forEach((tile)=> {
            $('#tile-pool-' + tile.tile).bind('click', tile.tile, on_sys_tile_pool_tile_click);
        });
    });
};


let on_model_tile_pool_changed = (tile_pool)=> {
    //console.log(tile_pool);
    render_tile_pool_view(tile_pool);
};

let init = () => {
    dispatcher.add_listener(event_type.model_tile_pool_changed, on_model_tile_pool_changed);
};


export default {
    init
}