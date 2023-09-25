<template>
  <teleport to="#notification">
    <transition
      enter-active-class="animate__animated animate__zoomIn animate__faster"
      leave-active-class="animate__animated animate__fadeOutLeft animate__faster"
      mode="out-in"
    >
      <div v-bind="$attrs" class="w-full sm:w-96 ring-2 bg-white self-end rounded-lg ring-black/5 max-w-sm shadow-lg dark:bg-slate-800">
        <div class="p-4">
          <div class="flex items-start">
            <div v-if="icon" class="shrink-0">
              <component :is="icon" :class="['h-6','w-6',darkColorIcon,colorIcon]" />
            </div>
            <div class="flex-1 mt-0.5 ml-3">
              <p v-if="title" class="text-gray-900 font-semibold text-sm dark:text-white">{{title}}</p>
              <p v-if="message" class="text-sm mt-1 font-normal text-gray-500 dark:text-gray-400">{{message}}</p>
            </div>
            <div class="shrink-0 flex ml-4">
              <button @click.stop="close" class="text-gray-400 bg-white rounded-md inline-flex focus:ring-indigo-500 dark:bg-slate-800">
                <IconClose class="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </teleport>
</template>

<script>
import IconClose from '@/icons/close.vue';

const textColorTypes = {
  success: "text-green-400",
  error: "text-red-400",
  warning: "text-yellow-400",
  info: "text-zinc-400",
  default: "text-gray-900"
}

export default{
  inheritAttrs:false,
  components:{IconClose},
  data(){
    return {
      isClose:false,
      timeout:null
    }
  },
  props:{
    icon:{default:null},
    title:{type:String,default:null},
    message:{type:String,default:null},
    type:{type:String,default:null},
    duration:{type:Number,default:3000},
    onClose:{type:Function,default:null}
  },
  methods:{
    destroy(){
      this.isClose = true
      clearTimeout(this.timeout)
    },
    close(){
      if(this.isClose) return

      this.isClose = true
      

      this.onClose()
    }
  },
  computed:{
    darkColorIcon(){
      return (this.type) ? "" : "dark:text-white"
    },
    colorIcon(){
      let option = this.type ?? "default"

      return textColorTypes[option]
    }
  },
  mounted(){
    this.timeout = setTimeout(()=> this.close(), this.duration)
  }
}
</script>
