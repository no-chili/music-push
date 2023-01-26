import Cover from '../components/Cover'
import Info from '../components/Info'
import Lyrics from '../components/Lyrics'
import source from '../assets/supermarket.mp3'
import cover from '../assets/hq720.webp'
export default function Index() {
  const lyr="[00:00.00] 作词 : Benjamin Levin/Ed Sheeran/Johnny McDaid\n[00:01.00] 作曲 : Benjamin Levin/Ed Sheeran/Johnny McDaid\n[00:10.48]I took the supermarket flowers from the windowsill\n[00:15.94]Threw the day old tea from the cup\n[00:22.03]Packed up the photo album Matthew had made\n[00:26.77]Memories of a life that's been loved\n[00:31.82]Took the get well soon cards and stuffed animals\n[00:37.41]Poured the old ginger beer down the sink\n[00:43.27]Dad always told me don't you cry when you're down\n[00:47.41]But mum there's a tear every time that I blink\n[00:54.01]Oh I'm in pieces it's tearing me up but I know\n[00:59.18]A heart that's broke is a heart that's been loved\n[01:03.13]So I'll sing Hallelujah\n[01:07.33]You were an angel in the shape of my mum\n[01:12.62]When I fell down you'd be there holding me up\n[01:16.51]Spread your wings as you go\n[01:19.23]And when God takes you back\n[01:22.04]He'll say Hallelujah you're home\n[01:35.61]I fluffed the pillows made the beds stacked the chairs up\n[01:40.68]Folded your nightgowns neatly in a case\n[01:47.25]John says he'd drive then put his hand on my cheek\n[01:51.65]And wiped a tear from the side of my face\n[01:57.99]I hope that I see the world as you did cause I know\n[02:03.25]A life with love is a life that's been lived\n[02:07.24]So I'll sing Hallelujah you were an angel in the shape of my mum\n[02:16.68]When I fell down you'd be there holding me up\n[02:20.40]Spread your wings as you go when God takes you back\n[02:26.11]He'll say Hallelujah you're home\n[03:12.24]Hallelujah you were an angel in the shape of my mum\n[03:20.58]You got to see the person I have become\n[03:24.47]Spread your wings and I know\n[03:27.15]That when God took you back he said Hallelujah you're home\n"
  return (
    <div className='h-screen bg-teal-400 drop-shadow-sm flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-around items-center gap-32 md:flex-row'>
        <Cover cover={cover}/>
        <Info songTitle='' autor='' album=''/>
      </div>
      <div className='mt-10'>
        <Lyrics lyrics={lyr}
        source={source}
        />
      </div>
    </div>
  )
}
