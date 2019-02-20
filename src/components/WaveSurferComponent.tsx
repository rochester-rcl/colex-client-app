import React, { Component, createRef } from "react";
import WaveSurfer from "wavesurfer.js";

interface IWaveSurferProps {
  src: string;
  waveColor: string;
  progressColor: string;
  play: boolean;
}

export default class WaveSurferComponent extends Component<IWaveSurferProps> {
  private waveSurferContainer = createRef<HTMLDivElement>();
  private waveSurfer: any;
  constructor(props: IWaveSurferProps) {
    super(props);
    this.playPause = this.playPause.bind(this);
  }

  playPause(play: boolean) {
    if (play) {
      this.waveSurfer.play();
    } else {
      this.waveSurfer.pause();
    }
  }

  componentDidMount() {
    const { src, waveColor, progressColor } = this.props;
    console.log(this.waveSurferContainer);
    this.waveSurfer = WaveSurfer.create({
      // @ts-ignore
      container: this.waveSurferContainer.current,
      waveColor: waveColor,
      progressColor: progressColor,
      cursorColor: '#ccc',
      cursorWidth: 3,
      responsive: true,
      scrollParent: false,
    });

    this.waveSurfer.load(src);
  }

  componentDidUpdate(prevProps: IWaveSurferProps) {
    const { src, play } = this.props;
    if (src !== prevProps.src) {
      this.waveSurfer.load(src);
    }
    if (play !== prevProps.play) {
      this.playPause(play);
    }
  }

  shouldComponentUpdate(
    nextProps: IWaveSurferProps,
    nextState: object
  ): boolean {
    const { src, play } = this.props;
    if (nextProps.src !== src) return true;
    if (nextProps.play !== play) return true;
    return false;
  }

  render() {
    console.log(this.props.play);
    return (
      <div
        ref={this.waveSurferContainer}
        className="colex-app-wavesurfer-container"
      />
    );
  }
}
