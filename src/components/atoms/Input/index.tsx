import React from "react"
import { HtmlHTMLAttributes } from "react"

type InputType = HtmlHTMLAttributes<HTMLInputElement>

const Input = ({ ...rest }: InputType) => {
  return (
    <input className="flex-1 text-gray-300 bg-gray-500 rounded-lg max-w-[46rem] h-full px-2 border-2 border-transparent focus:border-purple-dark outline-none" {...rest} />
  )
}

export default Input;