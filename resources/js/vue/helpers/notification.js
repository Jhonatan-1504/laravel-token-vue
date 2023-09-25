import { createVNode, isVNode, render } from 'vue';
import NotificationConstructor from "@/packages/my-notification.vue"
// icon
import CheckCircle from '@/icons/check-circle.vue';
import ExclamationCircle from '@/icons/exclamation-circle.vue';
import InformationCircle from '@/icons/information-circle.vue';
import XCircle from '@/icons/x-circle.vue';

let notificationTypes = ['success', 'warning', 'info', 'error']
let notificationIcons = { success: CheckCircle, warning: ExclamationCircle, info: InformationCircle, error: XCircle }
let seed = 1

/**
 * Opciones para configurar una notificación.
 *
 * @typedef {Object} NotificationOptions
 * @property {string} type - Tipo de la notificación (success, error, warning, info).
 * @property {string} title - Título de la notificación.
 * @property {string} message - Mensaje de la notificación.
 * @property {number} duration - Mensaje de la notificación.
 * @property {import('vue').VNode} [icon] - Icono de la notificación (opcional).
 */

/**
 * 
 * @param {NotificationOptions} options 
 * @returns 
 */
const Notification = function (options) {
  if (typeof options === 'string' || isVNode(options)) {
    options = { title: options }
  }

  if (!options.duration) {
    options.duration = 3000
  }

  if (options.type) {
    options.icon = notificationIcons[options.type]
  }

  const id = `notification_${seed++}`
  const props = {
    ...options,
    id,
    onClose: () => {
      close(id)
    },
  }

  let appendTo = document.body

  const container = document.createElement('div')
  const vm = createVNode(
    NotificationConstructor,
    props,
    isVNode(props.message) ? { default: () => props.message } : null
  )

  render(vm, container)
  appendTo.appendChild(container.firstChild)

  return vm
}

/**
 * 
 * @param {NotificationOptions|string} options 
 * @returns
 */
function NotificationFn(options){
  if (typeof options === 'string' || isVNode(options)) {
    options = {
      title: options,
    }
  }
  return Notification({
    ...options,
    type,
  })
}

/**
 * 
 * @param {NotificationOptions|string} options 
 */
Notification.success = (options) => {}

/**
 * 
 * @param {NotificationOptions|string} options 
 */
Notification.warning = (options) => {}

/**
 * 
 * @param {NotificationOptions|string} options 
 */
Notification.info = (options) => {}

/**
 * 
 * @param {NotificationOptions|string} options 
 */
Notification.error = (options) => {}

notificationTypes.forEach((type) => {  
  Notification[type] = function(options = {}){
    if (typeof options === 'string' || isVNode(options)) {
      options = {
        title: options,
      }
    }
    return Notification({
      ...options,
      type,
    })
  }
})

function close(id) {
  document.getElementById(id).remove()
}

export default Notification