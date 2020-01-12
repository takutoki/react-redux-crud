export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// action creator
// viewでimportし、userintaraction時に呼び出す
export const increment = () => ({
  // action object 何をするのかを示すオブジェクト
  type: INCREMENT 
})

export const decrement = () => ({
  type: DECREMENT
})
