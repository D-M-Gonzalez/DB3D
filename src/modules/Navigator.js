const NOSOTROS = 'NOSOTROS'
const NUESTROS_EQUIPOS = 'NUESTROSEQUIPOS'
const NUESTROS_PRODUCTOS = 'NUESTROSPRODUCTOS'
const BIJOU = 'BIJOU'
const MEDICINA = 'MEDICINA'
const DECORATIVO = 'DECORATIVO'
const REPUESTOS = 'REPUESTOS'
const REDES_SOCIALES = 'REDESSOCIALES'
const CONTACTANOS = 'MENSAJES'
const CHECKOUT = 'CHECKOUT'

function Navigate(name){
    let url = ""
    let destination = name.trim().toUpperCase().replace(" ","")
    destination === NOSOTROS && (url = '/home?section=us');
    destination === NUESTROS_EQUIPOS && (url = '/home?section=gear');
    destination === NUESTROS_PRODUCTOS && (url = '/home?section=products');
    destination === BIJOU && (url = '/items/list?page=1&size=10&category=BIJOU&search=');
    destination === MEDICINA && (url = '/items/list?page=1&size=10&category=MEDICINA&search=');
    destination === DECORATIVO && (url = '/items/list?page=1&size=10&category=DECORATIVO&search=');
    destination === REPUESTOS && (url = '/items/list?page=1&size=10&category=REPUESTOS&search=');
    destination === REDES_SOCIALES && (url = '/contact?section=social_media');
    destination === CONTACTANOS && (url = '/contact?section=contact_us');
    destination === CHECKOUT && (url = '/checkout');

    return url
}

export default Navigate