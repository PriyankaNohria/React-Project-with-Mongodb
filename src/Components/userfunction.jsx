import axios from 'axios';

export const sign = newUser => {
    return axios.post('http://localhost:3009/users/signup', {
        firstname: newUser.firstname,
        lastname: newUser.lastname,
        email: newUser.email,
        password: newUser.password,
        cart:
        {
           s:'', 
           name:'',
           price:''
        }
    }).then(res => {
        return res;
    })
    .catch(err => console.log(err))
}

export const login = user => {
    return axios.post('http://localhost:3009/users/login', {
        email: user.email,
        password: user.password
    })
        .then(res => {
            localStorage.setItem('usertoken', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err)
        })
}

export const logout = user => {
    return axios.post('http://localhost:3009/users/logout', {
        email: user.email,
        password: user.password
    })
        .then(res => {
            localStorage.removeItem('usertoken', res.data)
            return res.data
        })
        .catch(err => {
            console.log(err) 
        })
}

// export const addtocart = item =>{
//     return axios.put('http://localhost:3009/users/addtocart',{  
//         cart:{
//         s:item.s,
//         name:item.name,
//         price:item.price
//         }
//     })
//     .then(res=>{
//         console.log('add item');
//     })
// }