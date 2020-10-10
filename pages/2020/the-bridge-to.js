import Head from 'next/head'
import DefaultHead from 'components/DefaultHead'

export default function BridgeTo() {
  return (
    <>
      <DefaultHead
        title="The Bridge To"
        description="Step onto The Bridge To."
      />
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no" />
        <title>Bridge To</title>
        <script src="/js/three/three.mod.js"></script>
        <script src="/js/three/three.doc.js"></script>
        <script src="/js/three/three.plc.js"></script>
        <script src="/js/three/webgl.js"></script>
        <script src="/js/bridge-to.js"></script>
      </Head>
      <style jsx global>{`
        :root {
          --light-bg-color: white;
          --light-txt-color: black;
          --dark-bg-color: rgb(40, 40, 40);
          --dark-txt-color: white;
        }
        
        html, body {
          font-family: sans-serif;
          background: var(--light-bg-color);
          color: var(--light-txt-color);
          width: 100vw;
          height: 100vh;
          margin: 0;
          overflow: hidden;
        }

        body {
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: start;
        }
        
        @media (prefers-color-scheme: dark) {
          html, body {
            background: var(--dark-bg-color);
            color: var(--dark-txt-color);
          }
        }

        canvas {
          display: block;
          width: 100vw;
          height: 100vh;
        }
        
        #container {
          padding: 0;
          margin: 0;
        }
        
        a {
          color: inherit;
        }
        
        #preface-text {
          display: flex;
          flex-direction: column;
          padding: 20vh 10vw;
          height: 100vh;
        }
        
        #preface-text>h1 {
          font-size: 3em;
        }
        
        #startbtn {
          width: 100%;
          background: inherit;
          color: inherit;
          padding: 1em 2em;
          font-size: 2em;
          border-color: var(--light-txt-color);
          border-width: 7px;
          border-radius: 10px;
          font-weight: bold;
        }
        
        #author {
          display: none;
          text-decoration: none;
          text-align: right;
          color: inherit;
        }
        
        #author:visited {
          color: inherit;
        }
        
        @media (prefers-color-scheme: dark) {}
          html,body {
            background: var(--dark-bg-color);
            color: var(--dark-txt-color);
          }
        
          #startbtn {
            border-color: var(--dark-txt-color);
          }
        }
        
        @media only screen and (max-width: 375px) {
          #preface-text>h1 {
            font-size: 2em;
          }
        
          #startbtn {
            font-size: 1em;
          }
        
          #author {
            font-size: 1em;
          }
        }
        
        @media only screen and (max-width: 320px) {
          #preface-text>h1 {
            font-size: 1.5em;
          }
        }
      `}</style>
      <div id="preface-text">
        <h1>
          Step onto The Bridge To.
      </h1>
        <button id="startbtn">Embark</button>
        <a id="author" href="https://twitter.com/aunyks">@aunyks</a>
      </div>
      <div id="container"></div>
    </>
  )
}