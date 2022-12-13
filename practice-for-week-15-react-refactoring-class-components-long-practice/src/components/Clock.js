import React from 'react';
import {useState, useEffect} from 'react';

export const ClockToggle = (props)=> {

  // render () {
    return (
      <button 
        type="button"
        className="clock-toggle" 
        onClick={props.toggleClock}
      >
        Toggle Clock
      </button>
    )
  }
// } 

const Clock = (props) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     time: new Date(),
  //   };
  // }
  const [time, setTime] = useState(new Date())
  
  // componentDidMount() {
  //   this.interval = setInterval(this.tick, 1000);
  // }
  const tick = () => {
    setTime(new Date());
  }

  useEffect(() => {
    const interval = setInterval(tick, 1000)

    return () => {
      console.log("Clearing Clock interval!")
      clearInterval(interval);
    }
  })
  
  // componentWillUnmount() {
  //   console.log("Clearing Clock interval!")
  //   clearInterval(this.interval);
  // }
  

  // render() {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;

    const timezone = time
      .toTimeString() // Form: "14:39:07 GMT-0600 (PDT)"
      .replace(/[^A-Z]/g, "") // Strip out all but capitals
      .slice(3); // Eliminate initial GMT

    return (
      <section className="clock-section">
        <h1>Clock</h1>
        <div className='clock'>
          <p>
            <span>
              Time:
            </span>
            <span>
              {hours}:{minutes}:{seconds} {timezone}
            </span>
          </p>
          <p>
            <span>
              Date: 
            </span>
            <span>
              {time.toDateString()}
            </span>
          </p>
        </div>
      </section>
    );
  }
// }

export default Clock;