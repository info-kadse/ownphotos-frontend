export default function reducer(state={
    faces: [],
    fetching: false,
    fetched: false,
    
    labeledFaces: [],
    fetchingLabeledFaces: false,
    fetchedLabeledFaces: false,

    inferredFaces: [],
    fetchingInferredFaces: false,
    fetchedInferredFaces: false,

    faceToLabel: {},
    fetchingFaceToLabel: false,
    fetchedFaceToLabel: false,

    facesVis: [],
    training: false,
    trained: false,

    error: null,
  }, action) {

    switch (action.type) {
      // all faces
      case "FETCH_FACES": {
        return {...state, fetching: true}
      }
      case "FETCH_FACES_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_FACES_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          faces: action.payload,
        }
      }

      // labeled faces
      case "FETCH_LABELED_FACES": {
        return {...state, fetchingLabeledFaces: true}
      }
      case "FETCH_LABELED_FACES_REJECTED": {
        return {...state, fetchingLabeledFaces: false, error: action.payload}
      }
      case "FETCH_LABELED_FACES_FULFILLED": {
        return {
          ...state,
          fetchingLabeledFaces: false,
          fetchedLabeledFaces: true,
          labeledFaces: action.payload,
        }
      }

      // inferred faces
      case "FETCH_INFERRED_FACES": {
        return {...state, fetchingInferredFaces: true}
      }
      case "FETCH_INFERRED_FACES_REJECTED": {
        return {...state, fetchingInferredFaces: false, error: action.payload}
      }
      case "FETCH_INFERRED_FACES_FULFILLED": {
        return {
          ...state,
          fetchingInferredFaces: false,
          fetchedInferredFaces: true,
          inferredFaces: action.payload,
        }
      }


      //face to label
      case "FETCH_FACE_TO_LABEL": {
        return {...state, fetchingFaceToLabel: true}
      }
      case "FETCH_FACE_TO_LABEL_REJECTED": {
        return {...state, fetchingFaceToLabel: false, error: action.payload}
      }
      case "FETCH_FACE_TO_LABEL_FULFILLED": {
        return {
          ...state,
          fetchingFaceToLabel: false,
          fetchedFaceToLabel: true,
          faceToLabel: action.payload
        }
      }

      case "LOAD_FACE_TO_LABEL": {
        return {...state, faceToLabel:action.payload}
      }


      //train faces
      case "TRAIN_FACES": {
        return {...state, training: true}
      }
      case "TRAIN_FACES_REJECTED": {
        return {...state, training: false, error: action.payload}
      }
      case "TRAIN_FACES_FULFILLED": {
        return {
          ...state,
          training: false,
          trained: true,
          facesVis: action.payload
        }
      }


      //train faces
      case "CLUSTER_FACES": {
        return {...state, clustering: true}
      }
      case "CLUSTER_FACES_REJECTED": {
        return {...state, clustering: false, error: action.payload}
      }
      case "CLUSTER_FACES_FULFILLED": {
        return {
          ...state,
          clustering: false,
          clustered: true,
          facesVis: action.payload
        }
      }


      //delete face
      case "DELETE_FACE": {
        return {
          ...state,
          faces: state.faces.filter(element=>element.id !== action.payload)
        }
      }

      default: {
        return {...state}
      }
    }
}