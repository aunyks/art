import {
  useState
} from 'react'
import DefaultHead from 'components/DefaultHead'

const Video = ({ src }) => {
  return (
    <video autoPlay loop className="w-full lg:w-1/2 mx-auto">
      <source src={src} type="video/mp4"></source>
    </video>
  )
}

export default () => {
  return (
    <>
      <DefaultHead
        title="Two Sides at Sea"
        description=""
      />
      <div className="w-screen h-screen">
        <style jsx>{`
        html, body {
          overflow: hidden !important;
        }
      `}</style>
        <p className="text-white" style={{ position: 'absolute', zIndex: '1', top: '40px', left: '40px', width: '75%' }}>
          Two Sides at Sea
      </p>
        <div className="h-full flex flex-col justify-center bg-black">
          <div className="mx-auto w-1/2 lg:w-2/3 flex flex-col lg:flex-row justify-center">
            <Video src="/assets/vid/at-sea-dusk-square.mp4" />
            <Video src="/assets/vid/at-sea-day-square.mp4" />
          </div>
        </div>
        <a className="text-white" href="https://art.aunyks.com" style={{ position: 'absolute', zIndex: '1', bottom: '40px', right: '40px' }}>&copy; 2020 Gerald Nash</a>
      </div>
    </>
  )
}