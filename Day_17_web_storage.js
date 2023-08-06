//* HTML5 web storage :

// webstorage=session storage + localstorage :
// web storage is neww HTML5 API offering imporatant benefits over traditional cookies.
// before html5 :
// application data had to be stored in cookies,
// included in every server request .

// web storage is more secure, and large amounts of data can be stored locally,
// without affecting website performance.

// the data storage limit cookies in many browser is about 4kb per cookie
// web storage can store far larger data (at least 5mb) & never transferred to the user ;

// the data being stored can be accessed using js :
// which gives you the ability to leverage client side scripting to do many things
// that have traditionally involved server side programming and relational databases.
// there are two web storage objects :

//* sessionStorage :
/// localStorage is similar to session storage,except that whle data stored in local storage has ho expiration time :
// Data in sessionStorage gets cleared when the page session ends means page is closed :
// is only available within the browser tab or window session.
// it designed to store data in single page session
// that means if the window is closed the session data will be removed :

// the keys and the values are always strings note that as with objects, integer keys will be automatically converted to strings :

//* localStorage :
// html5 local storage is the para of the web storage API, which is used to store data on the browser with no expiration data .
// the data available in browser ever after the browser is closed
// data is still available when the browser is closed and reopened. and also instantly between tabs and windows :

// web storage data is in both cases, not available between different browsers,
// storage object created in firfox, can not be accessed in internet explore , exactly like cookies ;

// There are five methods to work on local storage :
/*
1. setItem()
2. getItem()
3. removeItem()
4. clear()
5. key()
*/

//* use cases of web storages :
// store data temporarily
// saving products that ther user places in his shopping cart 
// can be used for user authentication method ;
// can be used offline compeletely using localstorage :
// you may be wondering, then when we should use session storage :

//* HTML5 web storage objects :
// html web storage provides two objects for storing data on the client :

//? 1) window.localStorage :
// store data with no expiration data :

//? 2) window.sessionStorage :
// data is lost when the browse tab is closed :
// modern browser supports web storage :

//todo : methods for the web storage objects :

//* 1) localStorage : to display the localstorage object :

//* if you want to store an object in a localstorage, before we store an object to localstorage, the object has to be stringified :
// object to json  by using stringify :

//? =============================================================================

//* store you firstname,lastname,age,country,city in your browser localstorage :




























