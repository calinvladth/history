const checkAuth = require('./middleware/checkAuthentication')
const view = require('./middleware/views')

// Admin
const AdminCtrlRegister = require('./controller/admin/register')
const AdminCtrlLogin = require('./controller/admin/login')
const AdminCtrlForgot = require('./controller/admin/forgot')
const AdminCtrlRestorePassword = require('./controller/admin/restore')

// User
const AuthCtrlRegister = require('./controller/user/register')
const AuthCtrlLogin = require('./controller/user/login')

// Address
const AddressCtrlCreate = require('./controller/address/create')
const AddressCrtlRead = require('./controller/address/read')

// Cart
const CartCtrlCreate = require('./controller/cart/create')
const CartCtrlRead = require('./controller/cart/read')
const CartCtrlUpdate = require('./controller/cart/update')
const CartCtrlDelete = require('./controller/cart/delete')

// Product
const ProductCtrlRead = require('./controller/product/read')
const ProductCtrlCreate = require('./controller/product/create')
const ProductCtrlUpdate = require('./controller/product/update')
const ProductCtrlDelete = require('./controller/product/delete')

// Category
const CategoryCtrlCreate = require('./controller/category/create')
const CategoryCtrlRead = require('./controller/category/read')
const CategoryCtrlUpdate = require('./controller/category/update')
const CategoryCtrlDelete = require('./controller/category/delete')

// Subcategory
const SubcategoryCtrlCreate = require('./controller/subcategory/create')
const SubcategoryCtrlRead = require('./controller/subcategory/read')
const SubcategoryCtrlUpdate = require('./controller/subcategory/update')
const SubcategoryCtrlDelete = require('./controller/subcategory/delete')

// Quantity
const QuantityCtrlCreate = require('./controller/quantity/create')
const QuantityCtrlUpdate = require('./controller/quantity/update')

// Image
const ImageCtrlCreate = require('./controller/image/create')
const ImageCtrlDelete = require('./controller/image/delete')

// Detail
const DetailCtrlCreate = require('./controller/detail/create')
const DetailCtrlUpdate = require('./controller/detail/update')

// Checkout
const CheckoutCtrlCreate = require('./controller/checkout/create')
// const OrdersCtrlRead = require('./controller/order/read')
// const OrdersCtrlUpdate = require('./controller/order/update')
// const OrdersCtrlDelete = require('./controller/order/delete')

// Response Success
const Success = require('./helpers/response')


const uploadImageService = require('./services/uploadImageService')


// Futures
// WatchMarket
const WatchMarketFtrRead = require('./future/watch_market/read')
const WatchMarketFtrCreate = require('./future/watch_market/create')

const MailServiceResetPassword = require('./services/mail/reset_password')


module.exports = (app) => {
    // Checkout
    app.post('/checkout', CheckoutCtrlCreate.index, Success.index)


    app.post('/mail', MailServiceResetPassword.index, Success.index)

    //WatchMarket
    app.get('/watch-market', WatchMarketFtrRead.index, Success.index)
    app.post('/watch-market', WatchMarketFtrCreate.validate, WatchMarketFtrCreate.index, Success.index)
    app.post('/watch-market/check', WatchMarketFtrCreate.validate, Success.index)

    //Cart
    app.get('/cart', CartCtrlRead.index, Success.index)
    app.put('/cart', ProductCtrlRead.checkIfValid, CartCtrlUpdate.addProduct, Success.index)
    app.delete('/cart', ProductCtrlRead.checkIfValid, CartCtrlDelete.removeProduct, Success.index)

    // Admin
    app.post('/auth/admin/register', AdminCtrlRegister.register, Success.index)
    app.post('/auth/admin/login', AdminCtrlLogin.index, Success.index)
    app.post('/auth/admin/forgot', AdminCtrlForgot.index, Success.index)
    app.post('/auth/admin/restore', AdminCtrlRestorePassword.index, Success.index)


    // User
    // ToDo: Forgot && Reset Password
    app.post('/auth/register',
        AuthCtrlRegister.register,
        AddressCtrlCreate.onRegister,
        CartCtrlCreate.onRegister,
        Success.index)
    app.post('/auth/login', AuthCtrlLogin.login, AddressCrtlRead.onLogin, Success.index)

    // Product
    app.post('/products/create',
        CategoryCtrlRead.onProduct,
        SubcategoryCtrlRead.onProduct,
        ProductCtrlCreate.index,
        QuantityCtrlCreate.index,
        DetailCtrlCreate.index,
        Success.index)
    app.get('/products/list', ProductCtrlRead.index, Success.index)
    app.get('/products/:productId', view.createViewProduct, view.listViewsProduct, ProductCtrlRead.listById, Success.index)
    app.put('/products/update/:productId',
        CategoryCtrlRead.onProduct,
        SubcategoryCtrlRead.onProduct,
        ProductCtrlUpdate.update,
        QuantityCtrlUpdate.index,
        DetailCtrlUpdate.onProduct,
        Success.index)
    app.delete('/products/delete/:productId',
        ProductCtrlDelete.imagesFromFileSystem,
        ProductCtrlDelete.delete,
        Success.index)

    // Image
    app.post('/products/images', uploadImageService.upload.array('image' , 5), ImageCtrlCreate.create)
    app.delete('/products/images', ImageCtrlDelete.delete)

    // Category
    app.post('/category', CategoryCtrlCreate.index, Success.index)
    app.get('/category', CategoryCtrlRead.index, Success.index)
    app.put('/category', CategoryCtrlUpdate.index, Success.index)
    app.delete('/category', CategoryCtrlDelete.index, Success.index)

    //Subcategory
    app.post('/subcategory', SubcategoryCtrlCreate.index, Success.index)
    app.get('/subcategory', SubcategoryCtrlRead.index, Success.index)
    app.put('/subcategory', SubcategoryCtrlUpdate.index, Success.index)
    app.delete('/subcategory', SubcategoryCtrlDelete.index, Success.index)

    // Quantity
    app.post('/products/quantity', QuantityCtrlCreate.index, Success.index)
    app.put('/products/quantity', QuantityCtrlUpdate.index, Success.index)

    // Detail
    app.put('/products/details/:detailId', DetailCtrlUpdate.index, Success.index)

    // Order
    // app.post('/orders/create', OrdersCtrlCreate.index)
    // app.get('/orders/list', OrdersCtrlRead.index)
    // app.put('/orders/update/:orderId', OrdersCtrlUpdate.index)
    // app.delete('/orders/delete/:orderId', OrdersCtrlDelete.index)
}
