import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';

export function Networks(props) {
  if (props.data.social) {
    const NetworkArray = props.data.social.map((network) => (
      <a key={network.name} href={network.url} title={network.tip}>
        <i className={network.className}></i>
      </a>
    ));
    return (
      <Stack
        direction='horizontal'
        className='justify-content-center py-1'
        gap={3}
        id='social'>
        {NetworkArray}
      </Stack>
    );
  } else {
    return <Container></Container>;
  }
}