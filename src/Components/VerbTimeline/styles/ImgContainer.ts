import { Box, styled } from '@mui/material'

export const ImgContainer = styled(Box)`
  display: flex;
  position: absolute;
  bottom: -4px;
  right: -4px;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 12px 0 12px 0;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
  }
`
