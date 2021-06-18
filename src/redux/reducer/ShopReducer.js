import { deleteTodo } from "../action/allAction"

//import data from '../../data'
const img1 = 'https://static.wixstatic.com/media/cda177_5b63fc47d8984bd094328cc5cf2045ef.png/v1/fill/w_224,h_224,al_c,q_85,usm_0.66_1.00_0.01/cda177_5b63fc47d8984bd094328cc5cf2045ef.webp'
const img2 = 'https://static.wixstatic.com/media/cda177_467ce979b6924fe689b1347d7a982f3c.png/v1/fill/w_224,h_224,al_c,q_85,usm_0.66_1.00_0.01/cda177_467ce979b6924fe689b1347d7a982f3c.webp'
const img3 = 'https://static.wixstatic.com/media/cda177_44a04a0dbe2e4fe09bcb0e99d933925f.png/v1/fill/w_224,h_224,al_c,q_85,usm_0.66_1.00_0.01/cda177_44a04a0dbe2e4fe09bcb0e99d933925f.webp'
const img4 = 'https://static.wixstatic.com/media/cda177_95cd2230351d454e8fd76b7545766138.png/v1/fill/w_224,h_224,al_c,q_85,usm_0.66_1.00_0.01/cda177_95cd2230351d454e8fd76b7545766138.webp'
const img5 = 'https://static.wixstatic.com/media/cda177_eb61b785ee834218a45a9fad11e1d19b.png/v1/fill/w_224,h_224,al_c,q_85,usm_0.66_1.00_0.01/cda177_eb61b785ee834218a45a9fad11e1d19b.webp'
const img6 = 'https://static.wixstatic.com/media/cda177_f1f82c1c2f2f42df9e23af0c01bf10aa.png/v1/fill/w_224,h_224,al_c,q_85,usm_0.66_1.00_0.01/cda177_f1f82c1c2f2f42df9e23af0c01bf10aa.webp'
const img7 = 'https://static.wixstatic.com/media/cda177_7459c231dd544be7ac7f6f5a1f379d76.png/v1/fill/w_224,h_224,al_c,q_85,usm_0.66_1.00_0.01/cda177_7459c231dd544be7ac7f6f5a1f379d76.webp'
const img8 = 'https://static.wixstatic.com/media/cda177_1c16f70e659f4d0d9f48b5d2f4f211f2.png/v1/fill/w_224,h_224,al_c,q_85,usm_0.66_1.00_0.01/cda177_1c16f70e659f4d0d9f48b5d2f4f211f2.webp'
const img9 = 'https://static.wixstatic.com/media/cda177_1fbd6bdcacca487d80040668c1e587f2.png/v1/fill/w_224,h_224,al_c,q_85,usm_0.66_1.00_0.01/cda177_1fbd6bdcacca487d80040668c1e587f2.webp'


const initailState = {
    data : [
        {
            id: 1,
            name: 'hello world',
            images: [img1,img2],
            price: 234,
            discretion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi possimus porro veniam magnam nisi perspiciatis quas quasi et nobis!',
            color: ['green','red'],
            size: 'medium'
        },
        {
            id: 2,
            name: 'hello world',
            images: [img2],
            price: 553,
            discretion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi possimus porro veniam magnam nisi perspiciatis quas quasi et nobis!',
            color: ['Brown','black'],
            size: 'large'
        },
        {
            id: 3,
            name: 'hello world',
            images: [img3,img4],
            imageTwo: null,
            price: 135,
            discretion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi possimus porro veniam magnam nisi perspiciatis quas quasi et nobis!',
            color: ['red'],
            size: 'large'
        },
        {
            id: 4,
            name: 'hello world',
            images: [img4,img5],
            imageTwo: '',
            price: 677,
            discretion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi possimus porro veniam magnam nisi perspiciatis quas quasi et nobis!',
            color: ['black'],
            size: 'small'
        },
        {
            id: 5,
            name: 'hello world',
            images: [img5,img6],
            imageTwo: '',
            price: 343,
            discretion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi possimus porro veniam magnam nisi perspiciatis quas quasi et nobis!',
            color: ['red'],
            size: 'large'
        },
        {
            id: 6,
            name: 'hello world',
            images: [img6,img7],
            price: 753,
            discretion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi possimus porro veniam magnam nisi perspiciatis quas quasi et nobis!',
            color: ['Purple'],
            size: 'small'
        },
        {
            id: 7,
            name: 'hello world',
            images: [img8,img9],
            price: 235,
            discretion: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eligendi possimus porro veniam magnam nisi perspiciatis quas quasi et nobis!',
            color: ['red'],
            size: 'large'
        }
    
    ]
}


const ShopReducer = (state = initailState, {type, payload}) => {
    switch(type){
        case "DELETE":
            const deletItem = state.data.filter(data => data.id != payload)
            return {
                ...state,
                data: deletItem
            }
        case "MINFILTER":
            const minFilter = state.data.filter(data => data.price >= payload)
            return{
                ...state,
                data: minFilter
            }
            case "MAXFILTER":
                const maxFilter = state.data.filter(data => data.price < payload)
                return{
                    ...state,
                    data: maxFilter
                }
        default:
            return state;
    }
}

export default ShopReducer
