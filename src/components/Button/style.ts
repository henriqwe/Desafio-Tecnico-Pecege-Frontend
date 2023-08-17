import styled from 'styled-components'
import { TVariant } from './types'

const variantOptions = {
  primary: {
    backgroundColor: '#1E40AF',
    color: 'white'
  },
  danger: {
    backgroundColor: '#dc2626',
    color: 'white'
  },
  success: {
    backgroundColor: '#84cc16',
    color: 'black'
  },
  secondary: {
    backgroundColor: '#e2e8f0',
    color: 'black'
  }
}

export const SButton = styled.button<{ variant: TVariant }>`
  border: none;
  display: inline-flex;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
  ${({ variant }) => variantOptions[variant]}
`
export const SButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  white-space: nowrap;
`
