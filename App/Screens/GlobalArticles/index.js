import { connect } from 'rx-react-container'
import rxContainer from '@Helpers/RxContainer'

import component from './component'
import controller from './controller'

export default connect(rxContainer(controller))(component)

export { Sequence } from './controller'
