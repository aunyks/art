import {
  useState
} from 'react'
import DefaultHead from 'components/DefaultHead'

const HazeImage = ({ src, visible }) => {
  return <img src={src} className={`w-full${visible ? '' : ' hidden'}`} />
}

const HazeCarousel = ({ }) => {
  const [imgIndex, setImgIndex] = useState(0)
  return (
    <div onClick={() => {
      setImgIndex((imgIndex + 1) % 4)
    }}>
      <HazeImage visible={imgIndex === 0} src="/assets/img/haze/dune-dusk.jpg" />
      <HazeImage visible={imgIndex === 1} src="/assets/img/haze/dune.jpg" />
      <HazeImage visible={imgIndex === 2} src="/assets/img/haze/dune-birds-eye.jpg" />
      <HazeImage visible={imgIndex === 3} src="/assets/img/haze/knoll.jpg" />
    </div>
  )
}

export default () => {
  return (
    <>
      <DefaultHead
        title="Haze"
        description="A desert's haze looms mysterious."
      />
      <div className="w-screen h-screen">
        <style jsx>{`
        html, body {
          overflow: hidden !important;
        }
      `}</style>
        <p className="text-white" style={{ position: 'absolute', zIndex: '1', top: '40px', left: '40px', width: '75%' }}>
          Haze
          <br />
          A desert's haze looms mysterious. Tap an image to view more captures.
      </p>
        <div className="overflow-hidden h-full flex flex-col justify-center bg-black">
          <div className="mx-auto lg:w-1/2">
            <HazeCarousel />
          </div>
        </div>
        <a className="text-white" href="https://art.aunyks.com" style={{ position: 'absolute', zIndex: '1', bottom: '40px', right: '40px' }}>&copy; 2020 Gerald Nash</a>
      </div>
    </>
  )
}