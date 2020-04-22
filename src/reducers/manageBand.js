import uuid from 'uuid'

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':
      let id = uuid()
      const band = {name: action.name, id: id}
      return { ...state, bands: [...state.bands, band] }
    case 'DELETE_BAND':
   
      let remainingBands = state.bands.filter(band => band.id !== action.id)
      return {bands: remainingBands}

    default:
      return state;
  }
};
