import { connect } from 'react-redux';

import filter from '../stateFilters/hello';
import Hello from '../components/Hello';

export default connect(filter)(Hello);
