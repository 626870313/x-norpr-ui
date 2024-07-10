

import { Plugin } from 'vue'

export type SFCwithInstall<T> = T & Plugin

export function withInstall<T>(comp:T){
  (comp as SFCwithInstall<T>).install = function(app: { component: (arg0: string, arg1: T) => void }){
    const {name} = comp as unknown as {name:string}
    app.component(name,comp)
  }
  return comp as SFCwithInstall<T>
} 