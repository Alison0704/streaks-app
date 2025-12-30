// import { useState } from 'react'
import myLogo from '/Logo.svg'
import './assets/App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
      <>
          <div className="container">
              <div className="section">
                  <div className="global-scoreboard">
                      <img src={myLogo} className="logo" alt="Vite logo"/>
                      <div className="scoreboard-header">
                          <span className="title">ALIEMI GLOBAL STREAKS STATS</span>
                      </div>

                      <div className="stats-grid">
                          <div className="stat-box">
                              <span className="label">ACTIVE STREAKS</span>
                              <span className="value">1,284</span>
                              <span className="sub-label">Goals for 2026</span>
                          </div>

                          <div className="stat-box">
                              <span className="label">ALL-TIME RECORD</span>
                              <span className="value">412</span>
                              <span className="sub-label">Days by @user7x</span>
                          </div>

                          <div className="stat-box">
                              <span className="label">ALL-TIME RECORD</span>
                              <span className="value">412</span>
                              <span className="sub-label">Days by @user7x</span>
                          </div>

                          <div className="stat-box">
                              <span className="label">ALL-TIME RECORD</span>
                              <span className="value">412</span>
                              <span className="sub-label">Days by @user7x</span>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="section">
                  <div className="streaks">
                      sewf
                  </div>
              </div>
          </div>

          {/*<div className="card">*/}
          {/*  <button onClick={() => setCount((count) => count + 1)}>*/}
          {/*    count is {count}*/}
          {/*  </button>*/}
          {/*</div>*/}
      </>
  )
}

export default App
