const INITIAL_STATE = {
    sections: [
        {
            title: 'Hats',
            imageUrl: 'https://i.ibb.co/QFCSDcv/hats.jpg',
            id: 1,
            linkUrl: 'shop/hats',
            align: "right",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat repellat soluta."
        },
        {
            title: 'Jackets',
            imageUrl: 'https://i.ibb.co/j4fPSMG/jackets.jpg',
            id: 2,
            linkUrl: 'shop/jackets',
            align: "left",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit."
        },
        {
            title: 'Sneakers',
            imageUrl: 'https://i.ibb.co/KX5Cf7Q/sneakers.jpg',
            id: 3,
            linkUrl: 'shop/sneakers',
            align: "right",
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing."

        },
        {
            title: 'Mens',
            imageUrl: 'https://i.ibb.co/YjqKfsn/mens.jpg',
            size: 'large',
            id: 5,
            linkUrl: 'shop/mens',
            align: "left",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit odit voluptas nemo eius voluptatibus."
        },
        {
            title: 'Womens',
            imageUrl: 'https://i.ibb.co/vY5KZmv/womens.jpg',
            size: 'large',
            id: 4,
            linkUrl: 'shop/womens',
            align: "right",
            description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit id maiores lores, odit cupiditate  temporibus."

        }
    ]
}
const directoryReducers = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state

    }
}
export default directoryReducers