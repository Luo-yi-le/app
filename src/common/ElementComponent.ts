/** 
 * 导入element-ui 主键
*/
import ElButton from 'element-ui/lib/button';
import ElAvatar from 'element-ui/lib/avatar';

/**
 * 导入样式
*/
import 'element-ui/lib/theme-chalk/index.css';

export default {
  Components($vue:any) {
    const elementComponent:Object= {
      'el-button': ElButton,
      'el-avatar': ElAvatar
    };

    for (const i in elementComponent) {
      $vue.component(i, elementComponent[i])
    }
  },
}