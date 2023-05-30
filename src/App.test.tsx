import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import CommonUtil from 'util/CommonUtil'

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('isNullCheck', () => {
  const a : any = null;
  const b : any = { name : 'test'}
  const c : string = '';
  const d : string = 'testString'

  expect(CommonUtil.objectIsNotNull(a)).toBeFalsy();
  expect(CommonUtil.objectIsNotNull(b)).toBeTruthy();
  expect(CommonUtil.strIsNotNull(c)).toBeFalsy();
  expect(CommonUtil.strIsNotNull(d)).toBeTruthy();
});