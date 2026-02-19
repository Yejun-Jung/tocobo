
const img =(path)=>`/img/${path}`

export const headerData ={

    logo:{
        src:img('logo.svg'),
        alt:'TOCOBO',
        href:'/'
    },
    menus:[
        {
            id:'hero',
            label:'hero',
            href:'#hero',
            type:'section'
        },
        {
            id:'follow',
            label:'follow',
            href:'#follow',
            type:'section'
        },
        {
            id:'collection',
            label:'collection',
            href:'#collection',
            type:'section'
        },
        {
            id:'skincare',
            label:'skincare',
            href:'#skincare',
            type:'section'
        },
        {
            id:'instargram',
            label:'instargram',
            href:'#instargram',
            type:'section'
        },
    ],
    utils: [
        { id: "search", label: "검색", icon: img("icon_search.svg"), href: "#" },
        { id: "account", label: "마이", icon: img("icon_myp.svg"), href: "#" },
        { id: "cart", label: "장바구니", icon: img("icon_cart.svg"), href: "#" },
    ],
}