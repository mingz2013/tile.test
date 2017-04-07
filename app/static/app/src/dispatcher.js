/**
 * Created by zhaojm on 24/12/2016.
 *
 * 事件分发器
 *
 */


let _events = {};


let removeListener = (event, handler) => {
    console.log("removeListener: " + event);
    let handlers = _events[event] || [];
    var index = handlers.indexOf(handler);
    if (index > -1) {
        handlers.splice(index, 1);
    }
    _events[event] = handlers;
};

let addListener = (event, handler) => {
    console.log("addListener: " + event);
    let handlers = _events[event] || [];
    handlers.push(handler);
    _events[event] = handlers;

};

let dispatchEvent = (event, params) => {
    console.log("dispatchEvent: " + event);
    let handlers = _events[event] || [];
    console.log(handlers.length);
    handlers.forEach((handler) => {
        handler(params);
    })

};


export default {
    removeListener,
    addListener,
    dispatchEvent
}

