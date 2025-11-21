import styled from "styled-components"
import * as LS from "./Login_styles"

export const ProfileContainer = styled.div`
  display: grid;
  justify-items: center;
  gap: 12px;
`

export const FollowingSection = styled.div`
  margin-top: 16px;
  width: 100%;
  max-width: 420px;
  margin-left: auto;
  margin-right: auto;
`

export const FollowingList = styled.div`
  display: grid;
  gap: 8px;
  @media (max-width: 425px) {
    gap: 6px;
  }
`

export const FollowingRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  @media (max-width: 425px) {
    gap: 6px;
  }
`

export const SmallAvatarPreview = styled(LS.AvatarPreview)`
  width: 36px;
  height: 36px;
  @media (max-width: 425px) {
    width: 32px;
    height: 32px;
  }
`

export const HiddenFileInput = styled.input`
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  opacity: 0;
`