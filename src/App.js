import React, { Component } from 'react';
import './App.css';
import { withTranslation } from 'react-i18next';

class App extends Component {

    state = {
      language: 'en'
    }

  onLanguageHandler = (event) => {
    let newLang = event.target.value;
    this.setState({ language: newLang });
    this.props.i18n.changeLanguage(newLang);
  }

  renderSelectBox = () => {
    return (
      <select onChange={this.onLanguageHandler}>
        <option value="en">EN</option>
        <option value="fi">FI</option>
      </select>
    )
  }

  render() {
    const { t } = this.props;
    return (
      <div className="App">
        {this.renderSelectBox()}
        <h1>I18next</h1>
        <p>{t('title')}</p>
        <p>{t('description')}</p>
      </div>
    )
  }
}

export default withTranslation()(App);
