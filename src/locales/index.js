import {RU} from './RU';
import {UZ} from './UZ';
import {SITE_LANG} from "../tools/Const";




export function getText(word){
    if (localStorage.getItem(SITE_LANG) === "uz"){
        return UZ[word];
    } else return RU[word];
}

export function getLang(){
    return localStorage.getItem(SITE_LANG);
}