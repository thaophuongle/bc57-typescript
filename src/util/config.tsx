export const ACCESS_TOKEN = 'accessToken'
export const USER_LOGIN = 'userLogin'
export const ACCESS_TOKEN_CYBERSOFT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlSlMgNDEiLCJIZXRIYW5TdHJpbmciOiIyOC8wMi8yMDI1IiwiSGV0SGFuVGltZSI6IjE3NDA3MDA4MDAwMDAiLCJuYmYiOjE3MTE2NDUyMDAsImV4cCI6MTc0MDg0ODQwMH0.0_tmvn4b0xTEM_cZrDYETwckfXaE7DVv7NgiCAPSfDI'


export const {saveStorage,getStorage,saveStorageJson,getStorageJson, setCookie, getCookie, eraseCookie} = {
    saveStorage: (storeName:string,data:string): void => {
        localStorage.setItem(storeName,data)
    },
    getStorage:(storeName:string):string | null=> {
        if (localStorage.getItem(storeName)){
            return localStorage.getItem(storeName)
        }
        return null       
    },
    saveStorageJson: (storeName:string,data:any):void => {
        const jsData = JSON.stringify(data)
        localStorage.setItem(storeName,jsData)
    },
    getStorageJson: (storeName:string): any => {
            const data: null | string = localStorage.getItem(storeName)
            if(data != null && data != undefined)
                return JSON.parse(data)
            return null
    },
    setCookie: (name:string,value:string,days=30 ) => {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    },
    getCookie: (name:string) => {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for(var i=0;i < ca.length;i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1,c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
            }
            return null;
        },

        eraseCookie: (name:string) => {   
                document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            }

}

