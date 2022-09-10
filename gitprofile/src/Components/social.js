



import Container from 'react-bootstrap/Container';


import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';







export function Networks(props) {
    if (props) {
      const NetworkArray = props.map((network) => (
        <li key={network.name} className='mx-4'>
          <a href={network.url} title={network.tip}>
            <i className={network.className}></i>
          </a>
        </li>
      ));
      return <Container>{NetworkArray}</Container>;
    } else {
      return <Container></Container>;
    }
  }