interface ResultInfo {
    code: number;
    data: any[];
    success?: string;
    error?: string
}

interface OptionsInfo{
    page:string,
    message:string,
    time?:Date,
}

interface Global{
    userLoginInfo:userLoginInfo;
    OptionsInfo:OptionsInfo;
}
declare var Global:Global;
declare module 'Global'{
    export= Global;
}