import hyRequest from "..";

export function getEntireRoomsList (offset,size) {
  return hyRequest.get({
    url:"/entire/list",
    params: {
      offset,
      size
    }
  })
}
