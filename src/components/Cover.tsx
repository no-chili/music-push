type Props={cover:string}
export default function Cover(props:Props) {
  const {cover}=props
  return (
    <>
      <div className='h-96 w-96 flex justify-center items-center shadow-xl overflow-hidden bg-cyan-300 rounded-lg'>
        <img
        className='object-cover h-full w-full'
        src={cover}
        height={500}
        width={900}
        >
        </img>
      </div>
    </>
  )
}
