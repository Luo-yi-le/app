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
  token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtc2ciOiJsb2dpbiIsImlhdCI6MTU5MjczMjI5MywiZXhwIjoxNTkyNzMzMTkzfQ.SW6PHF3fsnZjqqo0S5HEA1x2MhMC_k4ft6ebDKa8Ugk',
  userInfo: null,
  wxInfo: null,
  indexNav: index_nav,
  menuActive: null,
  alubmTitle:"默认标题头",
};

export default state;