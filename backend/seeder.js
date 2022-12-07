import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import products from './data/products.js'
import Order from "./models/orderModuel.js";
import User from "./models/uesrModuel.js";
import Product from "./models/productMoudel.js";


const importData = async () => {
    try {
        const createdUsers = await User.insertMany(users)

        const adminUser = createdUsers[0]._id

        const sampleProducts = products.map((product) => {
            return { ...product, user: adminUser }
        })

        await Product.insertMany(sampleProducts)

        console.log('Data Imported!'.green.inverse)
        process.exit()
    } catch (error) {
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

// const destroyData = async () => {
//     try {
//         await Order.deleteMany()
//         await Product.deleteMany()
//         await User.deleteMany()
//
//         console.log('Data Destroyed!'.red.inverse)
//         process.exit()
//     } catch (error) {
//         console.error(`${error}`.red.inverse)
//         process.exit(1)
//     }
// }
// if (process.argv[2] === '-d') {
//     destroyData()
// } else {
//     console.log('here');
//     importData()
// }

export default  importData;