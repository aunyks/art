import {
  useState
} from 'react'
import DefaultHead from 'components/DefaultHead'

export default () => {
  return (
    <>
      <DefaultHead
        title="Meander"
        description=""
      />
      <div className="w-screen h-screen">
        <style global jsx>{`
        html, body {
          overflow: hidden !important;
          background: black;
          color: white !important;
        }
      `}</style>
        <p style={{ position: 'absolute', zIndex: '1', top: '40px', left: '40px', width: '75%' }}>
          Meander
      </p>
        <div className="h-full flex flex-col justify-center">
          <div className="mx-auto w-3/4 lg:w-1/3 flex flex-col lg:flex-row justify-center">
            <img src="/assets/img/meander/meander.gif" className="w-full mx-auto" />
          </div>
        </div>
        <a className="text-white" href="https://art.aunyks.com" style={{ position: 'absolute', zIndex: '1', bottom: '40px', right: '40px' }}>&copy; 2020 Gerald Nash</a>
      </div>
    </>
  )
}