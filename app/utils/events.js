const EventEmitter = require('events');

export default class ExEventEmitter extends EventEmitter {
  log(funcName, message) {
    console.log(`[EventEmitter][${funcName}]: ${message}`)
  }

  on(eventName, listener) {
    this.log('on', eventName);
    super.on(eventName, listener);
  }

  emit() {
    this.log('emit', arguments[0]);
    super.emit.apply(this, arguments);
  }

}