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
        <div className="overflow-hidden h-full flex flex-col justify-center bg-black">
          <div className="mx-auto w-5/6 lg:w-1/2">
            <h1>Oasis</h1>
            <img src="/assets/img/oasis.png" className="w-full" />
            <p>
              Solitude is but an island away.
            </p>
          </div>
        </div>
        <a className="text-white" href="https://art.aunyks.com" style={{ position: 'absolute', zIndex: '1', bottom: '40px', right: '40px' }}>&copy; 2020 Gerald Nash</a>
      </div>
    </>
  )
}