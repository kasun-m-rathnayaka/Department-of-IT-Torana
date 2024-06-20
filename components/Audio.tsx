
const Audio = () => {
  return (
    <div>
        <audio controls autoPlay className=" opacity-50 -mt-10" >
          <source src="/assets/audio.mp3" type="audio/mp3"/>
        </audio>
    </div>
  )
}

export default Audio