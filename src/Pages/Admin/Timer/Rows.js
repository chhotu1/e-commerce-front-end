import React from 'react';
import { dateFormateWithTime } from '../../../utils/CommonFunction';
const Rows = (props) => {
  const { timer, index } = props;
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{timer?.total_hours}</td>
      <td>{timer?.status === true ? 'Start' : 'Stop'}</td>
      <td>{timer?.created_by?.name}</td>
      <td>{dateFormateWithTime(timer?.created_at)}</td>
    </tr>
  )
}

export default (Rows);
