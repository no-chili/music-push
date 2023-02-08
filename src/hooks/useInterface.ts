import { useState } from 'react';
import { useEffect } from 'react';
export function useInterface(){
  const [dialog,setDialog]=useState(false)
  const showInterface=(e:KeyboardEvent)=>{
    if(e.key==' '){
      setDialog(dialog=>!dialog)
    }
  }
  useEffect(()=>{
    addEventListener('keydown',showInterface)
    return ()=>{
      removeEventListener('keydown',showInterface)
    }
  },[])
  return {
    dialog
  }
}
