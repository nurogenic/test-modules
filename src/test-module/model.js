/**
 * Normal Data model. Can extend from PixModel
 */
class Model {
    constructor(data){
        this._data = data
    }

    setProp(key, value) {
        this._data[key] = value
        return this
    }

    getProp(key) {
        return key ? this._data[key] : this._data;
    }
}

export default Model