import styled from "styled-components/macro"

const SiteHeader = styled.div.attrs({
  className:"site-header"
})`
  position: absolute;
  width: 100%;
  z-index: 99;
  top: 0;
  &.inner-page-header{
    .navbar{
      padding-top: 0;
      padding-bottom: 0;
    }
  }
`

export default SiteHeader
