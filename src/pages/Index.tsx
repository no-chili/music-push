import Cover from '../components/Cover'
import Info from '../components/Info'
import Lyrics from '../components/Lyrics'

import source from '../assets/jorker.mp3'
import cover from '../assets/jorker.jpg'
import { useInterface } from '../hooks/useInterface'
import Dialog from '../components/Dialog'
export default function Index() {
  const lyr="[00:00.000] 作曲 : Ed Sheeran/Fred Gibson/Johnny McDaid/Sam Roman/Taylor Swift\n[00:00.343]How was I to know\n[00:03.751]It’s a crazy thing\n[00:07.677]I showed you my hand\n[00:10.938]And you still let me win\n[00:13.491]\n[00:14.544]And who was I to say\n[00:18.037]That this was meant to be?\n[00:22.144]The road that was broken\n[00:25.928]Brought us together\n[00:28.718]\n[00:29.351]And I know\n[00:32.463]You could fall for a thousand kings\n[00:37.029]And hearts\n[00:39.788]That would give you a diamond ring\n[00:43.283]\n[00:43.493]When I fold\n[00:47.179]You see the best in me\n[00:51.376]The joker and the queen\n[00:56.373]\n[00:57.701]I’ve been played before\n[01:01.089]If you hadn’t guessed\n[01:05.054]So I kept my cards closed\n[01:08.357]To my foolproof vest\n[01:10.980]\n[01:11.986]But you called my bluff\n[01:15.389]And saw through all my tells\n[01:19.321]And then you went all in\n[01:22.964]And we left together\n[01:26.202]\n[01:26.382]And I know\n[01:30.143]You think that what makes a king\n[01:34.318]Is gold\n[01:37.167]A palace and diamond rings\n[01:40.708]\n[01:40.905]When I fold\n[01:44.407]You see the best in me\n[01:48.691]The joker and the queen\n[01:53.774]\n[02:23.793]And I know\n[02:27.249]You could fall for a thousand kings\n[02:31.953]And hearts\n[02:34.409]That would give you a diamond ring\n[02:38.162]\n[02:38.372]When I folded\n[02:42.171]You saw the best in me\n[02:46.176]The joker and the queen\n[02:51.798]\n[02:53.153]The joker and queen\n"
  return (
    <div className='h-screen overflow-hidden bg-teal-400 drop-shadow-sm flex flex-col justify-center items-center'>
      {/* <Dialog /> */}
      <div className='flex flex-col justify-around items-center gap-32 md:flex-row'>
        <Cover cover={cover}/>
        <Info songTitle='The Joker And The Queen' autor='Ed Sheeran/Taylor Swift' album='The Joker And The Queen '/>
      </div>
      <div className='mt-10'>
        <Lyrics lyrics={lyr}
        source={source}
        />
      </div>
    </div>
  )
}
