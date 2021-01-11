/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { fireEvent } from '@testing-library/react'

import { DropFile } from './DropFile'
import { render } from '../utils/test/render'

describe('DropFile', () => {
  it('should have to render without crashing', () => {
    const component = render(<DropFile />)
    expect(component).toBeTruthy()
  })

  it('should render name when have name prop', () => {
    const content = 'name-test'
    const { getByTestId } = render(<DropFile name={content} />)

    const input = getByTestId('dropfile-input')

    expect(input).toBeTruthy()
    expect(input).toHaveAttribute('name', 'name-test')
  })

  it('should have a error message when have error on form', () => {
    const content = 'My Error'
    const { getByTestId } = render(
      <DropFile errorForm errorMessage={content} />
    )

    const textContainer = getByTestId('dropfile-error')

    expect(textContainer).toBeTruthy()
    expect(textContainer).toHaveTextContent('My Error')
  })

  it('should call onChange when change value', () => {
    const handleOnClick = jest.fn()
    const { getByTestId } = render(<DropFile onChange={handleOnClick} />)

    const input = getByTestId('dropfile-input')

    fireEvent.change(input, {
      target: {
        files: [
          new File(['hi'], 'chucknorris.txt', {
            type: 'text/plain'
          })
        ],
        preventDefault: () => {},
        persist: () => {}
      }
    })

    expect(handleOnClick).toBeCalled()
  })

  it('should have component Image when have initImage prop', () => {
    const { getByTestId } = render(
      <DropFile
        initImage={
          'https://cdn.startupi.com.br/wp-content/uploads/2019/12/Magalu-linx-marketplace.png'
        }
      />
    )

    const image = getByTestId('dropfile-image')
    expect(image).toBeTruthy()
  })

  it('should have translate texts when have translate prop', () => {
    const translate = {
      message: {
        row1: 'arraste e solte a imagem aqui',
        row2: 'ou clique para escolher'
      },
      errorSize: 'hey! a imagem é muito grande, escolha uma imagem menor',
      errorType: 'hey! apenas os tipos de png e jpeg são aceitos'
    }

    const { getByTestId } = render(
      <DropFile dataMaxSize={0.012} translate={translate} />
    )

    const input = getByTestId('dropfile-input')
    const container = getByTestId('dropfile-container')
    const textContainer = getByTestId('dropfile-error')

    expect(container).toHaveTextContent(translate.message.row1)
    expect(container).toHaveTextContent(translate.message.row2)

    fireEvent.change(input, {
      target: {
        files: [
          new File(['hi'], 'chucknorris.txt', {
            type: 'text/plain'
          })
        ],
        preventDefault: () => {},
        persist: () => {}
      }
    })

    expect(textContainer).toBeTruthy()
    expect(textContainer).toHaveTextContent(translate.errorType)

    fireEvent.change(input, {
      target: {
        files: [
          new File(['(⌐□_□)'], 'chucknorris.png', {
            type: 'image/png'
          })
        ],
        preventDefault: () => {},
        stopPropagation: () => {},
        persist: () => {}
      }
    })

    expect(textContainer).toBeTruthy()
    expect(textContainer).toHaveTextContent(translate.errorSize)
  })
})
