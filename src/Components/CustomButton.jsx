import React from 'react'
import {Button} from 'react-bootstrap'

export default function CustomButton({title, variant}) {
  return (
    <Button variant={variant}>
        {title && title}
    </Button>
  )
}
