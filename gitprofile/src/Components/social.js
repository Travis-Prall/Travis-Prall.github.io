import Container from 'react-bootstrap/Container';

export function Networks(props) {
  if (props.data.main) {
    const NetworkArray = props.data.main.social.map((network) => (
      <li key={network.name} className='px-3'>
        <a href={network.url} title={network.tip}>
          <i className={network.className}></i>
        </a>
      </li>
    ));
    return <Container fluid>{NetworkArray}</Container>;
  } else {
    return <Container></Container>;
  }
}
