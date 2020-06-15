//index-nav
import * as types from '@/store/vuex/mutation-types';
import { ActionTree } from 'vuex';
import { RootStateTypes } from '@/types/vuexTypes';

const actions: ActionTree<RootStateTypes,any> = {
    set_index_nav:({ commit }: any, d: any) => {
        // console.log(commit,d)
        let index_nav = require('@/mock/index-nav')
        commit(types.SET_MENU, index_nav)
    },
    set_menu_active:({ commit }: any, d: any) => {
        commit(types.SET_MENU_ACTIVE, d);
    },
    /** 
     * 设置相册title
    */
    set_alubm_title:({commit, state:RootStateTypes}:any,d:any)=>{
        console.log(commit,d)
        commit(types.SET_ALUBM_TITLE,d)
    },
    set_author:({ commit , state: RootStateTypes}: any, d: any) => {
        commit(types.SET_AUTHOR, d);
    }
};

export default actions;