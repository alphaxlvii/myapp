import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>{ props.test }</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
    </div>
  );
}

IndexPage.propTypes = {
};

function mapStateToProps ({ users }) {
  return { users }
}

export default connect(mapStateToProps)(IndexPage);
