
import { Toast } from 'vant';
type ToastType = 'text' | 'loading' | 'success' | 'fail' | 'html';
type ToastPosition = 'top' | 'middle' | 'bottom';
type ToastLoadingType = 'circular' | 'spinner';
class Tips{
    constructor(TipsInfo:TipsInfo){
        this.init(TipsInfo)
    }

    init(TipsInfo:TipsInfo){
        Toast({
            type:TipsInfo.type,      
            message: TipsInfo.message,        
            duration: TipsInfo.duration,        
            forbidClick: TipsInfo.forbidClick,
            icon:TipsInfo.icon   
        });
    }

};

export default Tips;

/**
 * @interface TipsInfo
 * @type 提示类型，可选值为 loading success fail html
 * @position 位置，可选值为 top bottom
 * @message 文本内容，支持通过\n换行
 * @icon 自定义图标，支持传入图标名称或图片链接
 * @iconPrefix 图标类名前缀，同 Icon 组件的 class-prefix 属性	
 * @overlay 是否显示背景遮罩层
 * @forbidClick 是否禁止背景点击
 * @loadingType 加载图标类型, 可选值为 spinner
 * @duration 展示时长(ms)，值为 0 时，toast 不会消失
 * @className 自定义类名
 */

interface TipsInfo{
    type?:ToastType;
    position?:ToastPosition;
    message:string;
    icon?:string;
    iconPrefix?:string;
    overlay?:boolean;
    forbidClick?:boolean;
    loadingType?:ToastLoadingType;
    duration?:number;
    className?:any;
}