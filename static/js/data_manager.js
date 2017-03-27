 /**
 * Created by bezi on 2017.03.20..
 */

class Data_manager {
    static get_data(key) {
        return localStorage.getItem(key);
    };
    // gets a string as data
    static set_data(name, data) {
        localStorage.setItem(name, data);
    };
    static delete_data(name) {
        localStorage.removeItem(name);
    };
}

