import React, { useRef, useCallback, useLayoutEffect } from 'react';
import { marked } from 'marked';
import './index.scss'

const Markdown = ({ markdown }) => {
    return <div className="markdown" dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }}></div>
}

export default Markdown;