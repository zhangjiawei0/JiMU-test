const Event = (function(){
	let eventLists = {}, // 事件列表 {ev1: [fn1, fn2, ...], ev2: [fn1, fn2, ...]}
		publish, // 发布事件
		subscribe, // 订阅事件
		remove // 移除事件
	publish = function(){
		let ev = Array.prototype.shift.call(arguments); // 获取事件
        let _fn = eventLists[ev];
        if ( !_fn) { //如果事件列表中没有事件 
            let res = [] // 函数列表
            for (let i = 0, l = arguments.length; i < l; i++ ) { // 获取参数
                res.push(arguments[i]) // 将参数存入res，即事件注册的函数
            }
            eventLists[ev] = res // 将事件存入事件列表
            return true
        }else{ //如果事件已存在，需要重新注册函数
        	delete eventLists[ev]
        	publish.call(this, ev, arguments) // 将arguments传入空的数组
        }
	}

	subscribe = function(ev, fn){
		let _fn = eventLists[ev]
		if(!_fn || _fn.length === 0){
			return false
		}
		fn.apply(this, _fn) // 执行函数列表中的函数
	}

	remove = function(ev, fn){
		let _fn = eventLists[ev]
		// 没有人订阅事件
		if(!_fn){
			return false
		}
		if(!fn){
			// 事件没有注册函数
			_fn.length = 0
			return true
		}
		for ( let i = 0,l = _fn.length; i < l; i++ ) {
            if ( fn === _fn[i] ) {
                // 删除该事件注册的函数
                eventLists[ev].splice( i, 1 );
                return true
            }else{
            	return false
            }
        }
	}

	return {
        publish: publish,
        subscribe: subscribe,
        remove: remove
    }
}())