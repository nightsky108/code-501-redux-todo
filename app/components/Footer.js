import React from 'react'

import Link from './Link'

export default const Footer = () =>
  <div>
    Show:
    <Link text='All' filter={'SHOW_ALL'}></Link>,
    <Link filter={'SHOW_ACTIVE'}>Active</Link>,
    <Link filter={'SHOW_COMPLETED'}>Inactive</Link>
  </div>

