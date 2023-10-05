/**
 * 
 * @param {string} name 
 * @returns 
 */
export function getLocalStorage(name){
  return localStorage.getItem(name) ?? null
}

/**
 * 
 * @param {string} key
 * @param {string} value 
 */
export function setLocalStorage(key, value){
  localStorage.setItem(key, value)
}

export function clearLocalStorage(){
  localStorage.clear()
}