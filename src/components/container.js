import React from "react"
import { css } from "@emotion/core"

import { tablet, desktop, leftCol, wide } from "@guardian/pasteup/breakpoints"
import { palette } from "@guardian/pasteup/palette"

const container = css`
  margin: auto;

  ${tablet} {
    max-width: 740px;
  }

  ${desktop} {
    max-width: 980px;
  }

  ${leftCol} {
    max-width: 1140px;
  }

  ${wide} {
    max-width: 1300px;
  }
`

const containerWithBorders = css`
  ${tablet} {
    border-left: 1px solid ${palette.neutral[86]};
    border-right: 1px solid ${palette.neutral[86]};
  }
`

export const Container = ({ className, borders, children, ...props }) => (
  <div
    css={[container, className, borders ? containerWithBorders : null]}
    {...props}
  >
    {children}
  </div>
)
