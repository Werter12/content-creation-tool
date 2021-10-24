export default class Storage {

  static defaultKey = 'SAVED_IMAGES';

  static clearItem(key) {
    window.localStorage.removeItem(key);
  }

  static setItem(key, data, stringify = false) {
    window.localStorage.setItem(key, stringify ? JSON.stringify(data) : data);
  }

  static getItem(key, parse = false) {
    try {
      const data = window.localStorage.getItem(key);
      return parse ? JSON.parse(data) : data;
    } catch (e) {
      return '';
    }
  }
}
