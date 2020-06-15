import { GetterTree } from 'vuex'
import { RootStateTypes } from '@/types/vuexTypes';
const getters: GetterTree<RootStateTypes,any> = {
    indexNav(state: any) {
        return state.indexNav;
    },
    menuActive(state: any) {
        return state.menuActive;
    },
    alubmTitle(state:RootStateTypes){
        return state.alubmTitle;
    },
    author (state: RootStateTypes) {
        return state.author;
    },
};

export default getters;