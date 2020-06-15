
import *as types from '@/store/vuex/mutation-types'
import { MutationTree } from 'vuex'
import { RootStateTypes } from '@/types/vuexTypes';

const mutations: MutationTree<RootStateTypes> = {
     [types.SET_MENU](state: any, d: any){
        state.indexNav=d;
    },
    [types.SET_MENU_ACTIVE](state:any,d:any){
        state.menuActive=d;
    },

    /**
     * @设置标题头
     * @param state 
     * @param d 
     */
    [types.SET_ALUBM_TITLE](state:any,d:any){
        state.alubmTitle=d;
    },
    /**
     * @设置作者
     * @param state 
     * @param d 
     */
    [types.SET_AUTHOR](state:any,d:any){
        state.author=d;
    }
}

export default mutations;