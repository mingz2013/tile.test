/**
 * Created by zhaojm on 24/12/2016.
 *
 * 事件分发器
 *
 */


let _events = {};


let remove_listener = (event, handler) => {
    console.log("remove_listener: " + event);
    let handlers = _events[event] || [];
    var index = handlers.indexOf(handler);
    if (index > -1) {
        handlers.splice(index, 1);
    }
    _events[event] = handlers;
};

let add_listener = (event, handler) => {
    console.log("add_listener: " + event);
    let handlers = _events[event] || [];
    handlers.push(handler);
    _events[event] = handlers;

};

let dispatch_event = (event, params) => {
    console.log("dispatch_event: " + event);
    let handlers = _events[event] || [];
    handlers.forEach((handler) => {
        handler(params);
    })

};


export default {
    remove_listener,
    add_listener,
    dispatch_event
}

