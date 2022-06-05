import React, { Component } from "react";
import ReactTextTransition, { presets } from "react-text-transition";

const randomNumber = () => Math.floor(Math.random() * 9999999999 + 100000);

const TEXTS = [
    "FUND",
    "TOKEN",
    "NFT",
    "EVERYTHING"
];

class TextAnimation extends Component {
    
    state = {
      number: randomNumber(),
      textIndex: 0,
      textFastIndex: 0,
      paragraphIndex: 0
    };
  
    componentDidMount() {
      setInterval(() => {
        this.setState({
          number: randomNumber(),
          textIndex: this.state.textIndex + 1,
          paragraphIndex: this.state.paragraphIndex + 1
        });
      }, 3000);
      setInterval(() => {
        this.setState({
          textFastIndex: this.state.textFastIndex + 1
        });
      }, 150);
    }
  
    render() {
      return (
        <React.Fragment>
            <section className="inline">
              <ReactTextTransition
              text={TEXTS[this.state.textIndex % TEXTS.length]}
              springConfig={presets.gentle}
              className="big"
              delay={200}
            />
            </section>
        </React.Fragment>
      );
    }
  }
  
export default TextAnimation;
  