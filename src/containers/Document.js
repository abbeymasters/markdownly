import React from 'react';
import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import styles from './Document.css';
import { useDispatch, useSelector } from 'react-redux';
import { getMarkdown } from '../selectors/documentSelectors';
import { updateMarkdown } from '../actions/documentActions';

export default function Document() {
  const markdown = useSelector(state => getMarkdown(state));
  const dispatch = useDispatch();
  const letUpdateMarkdown = ({ target }) => dispatch(updateMarkdown(target.value));

  return (
    <>
      <div className={styles.Document}>
        <Editor markdown={markdown} updateMarkdown={letUpdateMarkdown} />
        <Preview markdown={markdown} />
      </div>
    </>
  );
}

