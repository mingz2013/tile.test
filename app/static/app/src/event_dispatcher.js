/**
 * Created by zhaojm on 24/12/2016.
 */
export default (() => {


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

    return {
        "removeListener": removeListener,
        "addListener": addListener,
        "dispatchEvent": dispatchEvent
    }


})();

