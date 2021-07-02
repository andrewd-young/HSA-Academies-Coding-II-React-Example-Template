import React from 'react'
import { Link } from 'react-router-dom'

export const Section = ({title, address}) => (
  <Link to={address} className="section">{title}</Link>
)