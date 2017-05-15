import { connect } from 'dva';

function UserPage(props) {
  function handleClick() {

  }

  return <div onClick={handleClick}>aaaa</div>
}

export default connect()(UserPage);
