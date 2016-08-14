const EventEmitter = require('events');

export default class ExEventEmitter extends EventEmitter {
  log(funcName, message) {
    console.log(`[EventEmitter][${funcName}]: ${message}`)
  }

  on(eventName, listener) {
    super.on(eventName, listener);
    this.log('on', eventName);
  }

}