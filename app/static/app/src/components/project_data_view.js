/**
 * Created by zhaojm on 11/04/2017.
 */

import dispatcher from '../dispatcher'
import event_type from '../event_type'


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

let render_project_data_view = (project_data) => {
    $('#projectData').html(project_data_view(project_data));
};

let on_model_project_data_changed = (project_data) => {
    console.log(project_data);
    render_project_data_view(project_data);
};

let init = () => {
    dispatcher.add_listener(event_type.model_project_data_changed, on_model_project_data_changed);
};


export default {
    init
}