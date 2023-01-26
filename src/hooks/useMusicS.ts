import { useEffect, useState } from 'react';
import { MusicRef } from '../types';

export function useMusicS(music:MusicRef){
  let flag=true
  let timer=0
  const [musicDate,setMusicDate]=useState(new Uint8Array(512).fill(0))
  useEffect(()=>{
    addEventListener('keydown',(e)=>{
      if(e.key==='Enter'&&flag){
        flag=false
        // 导入音乐资源 music
        const AudioContext = window.AudioContext
        // || window.webkitAudioContext;
        const ctx = new AudioContext();
        const analyser = ctx.createAnalyser();
        analyser.fftSize = 512;
        // 处理
        let bufferLength = analyser.frequencyBinCount;
        let dataArray = new Uint8Array(bufferLength);
        // 通过<audio>节点创建音频源
        const source = music.current&&ctx.createMediaElementSource(music.current);
        // 将音频源关联到分析器
        source&&source.connect(analyser);
        // 将分析器关联到输出设备（耳机、扬声器）
        analyser.connect(ctx.destination);
        const getMusicDate=()=>{
          bufferLength = analyser.frequencyBinCount;
          dataArray = new Uint8Array(bufferLength);
          analyser.getByteFrequencyData(dataArray)
          // analyser.getByteTimeDomainData(dataArray)
          setMusicDate(dataArray)
          timer = requestAnimationFrame(getMusicDate)
        }
        timer = requestAnimationFrame(getMusicDate)
      }
    })
    return cancelAnimationFrame(timer)
  },[])
  // 返回数据
  return {
    musicDate
  }
}
