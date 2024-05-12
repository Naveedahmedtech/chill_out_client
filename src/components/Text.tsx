import React from 'react'
import { ITextProps } from '../types/types'

const Text: React.FC<ITextProps> = ({ children, className }) => {
    return (
        <p className={`text-primary ${className}`}>{children}</p>
    )
}

export default Text
