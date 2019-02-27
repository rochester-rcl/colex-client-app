import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { IAppState } from "../reducers";
import {
  loadTranslations,
  ITranslationData
} from "../actions/TranslationActions";
import { Segment, Loader, Header } from "semantic-ui-react";
import Explore from "../components/Explore";
import Stats, { IStat } from "../components/Stats";
import landingBackground from "../images/landing-background.png";
import khasiWomen from "../images/khasi-women.jpg";
import meghalaya from "../images/meghalaya.png";
// TODO remove fake stats
const fakeStats: IStat[] = [
  {
    label: "Contributors",
    value: 323
  },
  {
    label: "Translations",
    value: 1454
  },
  {
    label: "Languages",
    value: 78
  }
];

interface ILandingProps {
  translations: ITranslationData[];
  error?: string;
  loadTranslations: () => void;
}

class Landing extends Component<ILandingProps> {
  backgrounds: string[] = [landingBackground, khasiWomen, landingBackground, meghalaya];
  state = { backgroundUrl: this.backgrounds[0], backgroundTransition: false }
  constructor(props: ILandingProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.backgroundTimeout = this.backgroundTimeout.bind(this);
    this.animateBackground = this.animateBackground.bind(this);
  }

  componentDidMount() {
    this.props.loadTranslations();
  }

  backgroundTimeout() {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(), 500);
    });
  }

  handleChange(index: number): void {
    try {
      this.setState({
        backgroundUrl: this.backgrounds[index]
      })
    } catch(error) {
      this.setState({
        backgroundUrl: this.backgrounds[0]
      });
    }
  }

  animateBackground(index: number) {
    this.setState({
      backgroundTransition: true,
    }, () => {
      this.backgroundTimeout().then(() => {
        this.handleChange(index);
        this.setState({
          backgroundTransition: false
        });
      });
    });
    
  }

  render() {
    const { translations, error } = this.props;
    const { backgroundUrl, backgroundTransition } = this.state;
    const background = {
      background: `linear-gradient(transparent, rgb(51, 49, 56, 1)), url(${backgroundUrl}) no-repeat center center`,
    }
    if (translations.length === 0) {
      const message = error !== undefined ? error : "loading translations";
      return (
        <Segment className="colex-app-translations">
          <Loader active content={message} />
        </Segment>
      );
    } else {
      const transition = backgroundTransition ? " background-transition" : "";
      return (
        <div className="colex-app-landing-container">
          <div style={background} className={`colex-app-landing-container-background ${transition}`}></div>
          <div className="colex-app-explore">
            <Header className="colex-app-tagline">
              Community Language Portal: accelerating and making more inclusive
              the process of documenting and describing languages
            </Header>
            <Explore dictionary={translations} onChange={this.animateBackground} />
          </div>
          <div className="colex-app-stats-container">
            <Stats list={fakeStats} />
          </div>
        </div>
      );
    }
  }
}

// TODO make the return type an interface

const mapStateToProps = (state: IAppState): object => {
  return {
    translations: state.translationState.translations,
    error: state.translationState.error
  };
};

const mapActionCreatorsToProps = (dispatch: Dispatch) => {
  return bindActionCreators({ loadTranslations }, dispatch);
};

export default connect(
  mapStateToProps,
  mapActionCreatorsToProps
)(Landing);
