import styled from "styled-components"

export const EntireRoomWrapper = styled.div`
    > .content {
    position: relative;
    padding: 30px 20px;
  }
  .rooms{
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px 0;
  }
    > .cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(255,255,255, .8);
  }
`