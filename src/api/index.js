//统一管理项目接口的模块
//引入二次封装的axios（带有请求、响应的拦截器）
import requests from "./ajax";
import mockRequests from "./mockAjax";
//三级菜单的请求地址  /api/product/getBaseCategoryList   GET    没有任何参数
//对外暴露一个函数，只要外部调用这个函数，就想服务器发起ajax请求、获取咱们的三级菜单数据。当前咱们这个函数只需要把服务器返回结果返回即可。
export const reqgetCategoryList = () => requests.get(`/product/getBaseCategoryList`);
//切记:当前函数执行需要把服务器返回结果返回
//获取banner（Home首页轮播图接口）
export const reqGetBannerList = () => mockRequests.get('/banner');

//获取floor数据
export const reqFloorList = () => mockRequests.get('/floor');

//获取搜索模块数据
export const reqGetSearchInfo = (params) => requests({ url: "/list", method: "post", data: params })

//获取产品详细信息的接口
export const reqGoodsInfo = (skuId) => requests({ url: `/item/${skuId}`, method: 'get' });

//将产品加入到购物车
export const reqAddOrUpdateShopCart = (skuId, skuNum) => requests({ url: `/cart/addToCart/${skuId}/${skuNum}`, method: 'post' })

//获取购物车列表数据接口
export const reqCartList = () => requests({ url: '/cart/cartList', method: 'get' });

//删除购物车产品接口
export const reqDeleteCartById = (skuId) => requests({ url: `/cart/deleteCart/${skuId}`, method: 'delete' });

//修改商品选中的状态
export const reqUpdateCheckedByid = (skuId,isChecked)=>requests({url:`/cart/checkCart/${skuId}/${isChecked}`,method:'get'});

//获取验证码
export const reqGetCode=(phone)=>requests({url:`/user/passport/sendCode/${phone}`,method:'get'});

//注册
export const reqUserRegister=(data)=>requests({url:'/user/passport/register',data,method:'post'});

//登录
export const reqUserLogin=(data)=>requests({url:'/user/passport/login',data,method:'post'});

//获取用户信息
export const reqUserInfo = ()=>requests({url:'/user/passport/auth/getUserInfo',method:'get'});

//退出登录
export const reqLogout=()=>requests({url:'/user/passport/logout',method:'get'});

//获取用户地址信息
export const reqAddressInfo = ()=>requests({url:'/user/userAddress/auth/findUserAddressList',method:'get'});

//获取商品清单
export const reqOrderInfo = ()=>requests({url:'/order/auth/trade',method:'get'});

//提交订单的接口
export const reqSubmitOrder = (tradeNo,data)=>requests({url:`/order/auth/submitOrder?tradeNo=${tradeNo}`,data,method:'post'});

//获取支付信息
export const reqPayInfo = (orderId)=>requests({url:`/payment/weixin/createNative/${orderId}`,method:'get'});

//获取支付订单状态
export  const reqPayStatus = (orderId)=>requests({url:`/payment/weixin/queryPayStatus/${orderId}`,method:'get'});

//获取个人中心数据
export const reqMyOrderList = (page,limit)=>requests({url:`/order/auth/${page}/${limit}`,method:'get'});

