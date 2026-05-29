// Strips trailing slash so paths can be written as `${B}/images/...`
// Dev:  B = ''           → '/images/...'
// Prod: B = '/Kimie_Jin' → '/Kimie_Jin/images/...'
const B = import.meta.env.BASE_URL.replace(/\/$/, '')
export default B
