/**   
 * api接口统一管理
 */
import { get, post } from './Axios';
import Q from 'q';
import URL from './../url/url'

export const apiAddress = (p: object) => post('photo/json/data.json', p);

module Api{
    export let ParanUnit=(boolean:boolean)=>{
        if(boolean===true){
            return {};
        }else{
            return boolean;
        }
       
    }

    /**
     *用户登陆及信息
     *
     * @export
     * @class account
     */
    export class account{
        /**
         *基础登陆 （既没有任何处理）
         * @static
         * @param {*} data
         * @returns
         * @memberof account
         */
        static basic_login(data:any){
            var deferred=Q.defer();
            let basic_login=get(URL.userLogin, ParanUnit(data));       
            return basic_login;
        };
    };

    export class Alubm{
        static getAlubm(data:any){
            let dataList=post(URL.getAlubm,ParanUnit(data));
            return dataList;
        };
    }

    export class Message{
        static selectMessageAll(data:any){
            let dataList=get(URL.getMessage,ParanUnit(data));
            return dataList;
        } 
    }
    export class Mune{
        static selectMuneAll(data:any){
            let dataList=get(URL.getMenu,ParanUnit(data));
            return dataList;
        } 
    }

    export class Ip{
        static ip(data:any){
            let dataList=get(URL.ip,ParanUnit(data));
            return dataList;
        } 
    }
}
export default Api;