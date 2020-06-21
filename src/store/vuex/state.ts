let index_nav = require('@/mock/index-nav');
import { RootStateTypes } from '@/types/vuexTypes';

// export default state= {
//     token: null,
//     userInfo: null,
//     wxInfo: null,
//     indexNav:index_nav,
//     menuActive:null
//   };
const state: RootStateTypes = {
  author: 'lonley',
  token: null,
  userInfo: null,
  wxInfo: null,
  indexNav: index_nav,
  menuActive: null,
  alubmTitle:"默认标题头",
};

export default state;