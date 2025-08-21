import './timer.css'
import { Component } from 'react'

interface Time {
  Timer: number;
  isrunning: boolean;
}

export default class Timer extends Component<object, Time> {
  private intervalId: number | null = null;

  constructor(props: object) {
    super(props);
    this.state = {
      Timer: 0,
      isrunning: false,
    };
  }

  handleStart = () => {
    if (!this.state.isrunning) {
      this.setState({ isrunning: true });
      this.intervalId = setInterval(() => {
        this.setState((prev) => ({ Timer: prev.Timer + 1 }));
      }, 1000);
    }
  };

  handlePause = () => {
    if (this.state.isrunning) {
      this.setState({ isrunning: false });
      if (this.intervalId) clearInterval(this.intervalId);
    }
  };

  handleReset = () => {
    if (this.intervalId) clearInterval(this.intervalId);
    this.setState({ Timer: 0, isrunning: false });
  };

  formatTime(seconds: number) {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
  }

  componentWillUnmount(): void {
    if (this.intervalId) clearInterval(this.intervalId);
  }

  render() {
    return (
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Đồng Hồ Đếm Thời Gian</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Source+Sans+Pro:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="./style.css" />

        <div className="timer-container">
          <div className="timer-header">
            <h1 className="timer-title">Đồng Hồ Đếm Thời Gian</h1>
          </div>

          <div className="mode-selector">
            <button className="mode-btn active" data-mode="stopwatch">
              Bấm Giờ
            </button>
          </div>

          <div className="time-display" id="timeDisplay">
            {this.formatTime(this.state.Timer)}
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              id="progressFill"
              style={{
                width: `${(this.state.Timer % 60) * (100 / 60)}%`,
              }}
            />
          </div>

          <div className="controls">
            {!this.state.isrunning ? (
              <button
                className="control-btn start-btn"
                id="startBtn"
                onClick={this.handleStart}
              >
                Bắt Đầu
              </button>
            ) : (
              <button
                className="control-btn pause-btn"
                id="pauseBtn"
                onClick={this.handlePause}
              >
                Tạm Dừng
              </button>
            )}
            <button
              className="control-btn reset-btn"
              id="resetBtn"
              onClick={this.handleReset}
            >
              Đặt Lại
            </button>
          </div>

          <div className="status-message" id="statusMessage">
            {this.state.isrunning ? 'Đang chạy...' : 'Đang dừng'}
          </div>
        </div>
      </>
    );
  }
}
