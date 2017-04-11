/**
 * Created by zhaojm on 07/04/2017.
 *
 * 这里注册需要修改界面的事件, 根据数据去修改界面
 *
 */


import dispatcher from './dispatcher'
import event_type from './event_type'


import top_view from './components/top_view'
import tile_pool_view from './components/tile_pool_view'
import project_data_view from './components/project_data_view'


let init = () => {
    top_view.init();
    tile_pool_view.init();
    project_data_view.init();
};


export default {
    init
}