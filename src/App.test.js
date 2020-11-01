import React from 'react'
import ReactDom from 'react-dom'
import App from './app'

test('renders learn react link', () => {
  const div = document.createElement('div')
  ReactDom.render(<App></App>, div)
  ReactDom.unmountComponentAtNode(div)
})
