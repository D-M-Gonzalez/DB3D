const NOSOTROS = 'NOSOTROS'
const NUESTROS_EQUIPOS = 'NUESTROSEQUIPOS'
const NUESTROS_PRODUCTOS = 'NUESTROSPRODUCTOS'
const ACCESORIOS = 'ACCESORIOS'
const MEDICINA = 'MEDICINA'
const PASTELERIA = 'PASTELERÍA'
const HOGAR = 'HOGAR'
const LIBRERIA = 'LIBRERÍA'
const REPUESTOS = 'REPUESTOS'
const REDES_SOCIALES = 'REDESSOCIALES'
const CONTACTANOS = 'MENSAJES'
const CHECKOUT = 'CHECKOUT'
const ALL = 'ALL'
const SIGNUP = 'SIGNUP'
const LOGIN = 'LOGIN'
const MODIFYUSER = 'MODIFYUSER'
const USERORDERS = 'USERORDERS'

function Navigate(name){
    let url = ""
    let destination = name.trim().toUpperCase().replace(" ","")
    destination === NOSOTROS && (url = '/home?section=us');
    destination === NUESTROS_EQUIPOS && (url = '/home?section=gear');
    destination === NUESTROS_PRODUCTOS && (url = '/home?section=products');
    destination === ALL && (url = '/items?page=1&size=10&category=ALL&subcategory=ALL&search=undefined');
    destination === ACCESORIOS && (url = '/items?page=1&size=10&category=ACCESORIOS&subcategory=ALL&search=undefined');
    destination === MEDICINA && (url = '/items?page=1&size=10&category=MEDICINA&subcategory=ALL&search=undefined');
    destination === PASTELERIA && (url = '/items?page=1&size=10&category=PASTELERIA&subcategory=ALL&search=undefined');
    destination === HOGAR && (url = '/items?page=1&size=10&category=HOGAR&subcategory=ALL&search=undefined');
    destination === LIBRERIA && (url = '/items?page=1&size=10&category=LIBRERIA&subcategory=ALL&search=undefined');
    destination === REPUESTOS && (url = '/items?page=1&size=10&category=REPUESTOS&subcategory=ALL&search=undefined');
    destination === REDES_SOCIALES && (url = '/contact?section=social_media');
    destination === CONTACTANOS && (url = '/contact?section=contact_us');
    destination === CHECKOUT && (url = '/checkout');
    destination === SIGNUP && (url = '/signup');
    destination === LOGIN && (url = '/login');
    destination === MODIFYUSER && (url = '/modifyuser');
    destination === USERORDERS && (url = `/userorders/${JSON.parse(localStorage.getItem("user")).id}`);

    return url
}

export default Navigate