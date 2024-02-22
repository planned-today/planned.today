import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image'

const config: DocsThemeConfig = {
  logo: <span> <Image src="/assets/head-logo-icon.svg" width="200" height="80" alt="Planned.today" /> </span>,
  project: {
    link: 'https://github.com/paraswtf/planned.today/',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Planned.today',
  },
}

export default config
