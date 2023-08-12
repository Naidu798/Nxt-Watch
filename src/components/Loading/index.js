import Loader from 'react-loader-spinner'

import {LoaderContainer} from './styledComponents'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

const Loading = () => (
  <LoaderContainer data-testid="loader">
    <Loader type="ThreeDots" color="#4f46e5" height={50} width={50} />
  </LoaderContainer>
)

export default Loading
