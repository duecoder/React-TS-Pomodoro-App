import React from 'react';
import { PomodoroTimer } from './components/pomodoro-timer';

function App(): JSX.Element {
  return (
    <div className="container">
      <PomodoroTimer
        pomodoroTime={1500} // 25 min
        shortRestTime={300} // 5 min for each pomodoro one shortRestTime
        longRestTime={900} // 15 min for each pomodoro one longRestTime
        cycles={4}
      />
    </div>
  );
}

export default App;
