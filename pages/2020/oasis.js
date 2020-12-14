import {
  useState
} from 'react'
import DefaultHead from 'components/DefaultHead'

export default () => {
  return (
    <>
      <DefaultHead
        title="Oasis"
        description="Solitude is but an island awa"
      />
      <div className="w-screen h-screen">
        <style jsx>{`
        html, body {
          overflow: hidden !important;
        }
      `}</style>
        <p className="text-white" style={{ position: 'absolute', zIndex: '1', top: '40px', left: '40px', width: '75%' }}>
          Oasis
          <br />
          Solitude is but an island away.
      </p>
        <div className="overflow-hidden h-full flex flex-col justify-center bg-black">
          <div className="mx-auto lg:w-1/2">
            <img src="/assets/img/oasis.png" className="w-full" />
          </div>
        </div>
        <a className="text-white" href="https://art.aunyks.com" style={{ position: 'absolute', zIndex: '1', bottom: '40px', right: '40px' }}>&copy; 2020 Gerald Nash</a>
      </div>
    </>
  )
}