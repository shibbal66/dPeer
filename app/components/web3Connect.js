import {Pressable, Text} from 'react-native';
import {
  WalletConnectModal,
  useWalletConnectModal,
} from '@walletconnect/modal-react-native';
const projectId = '9ba81a4162c222bbbcd8743f259fd999';

const providerMetadata = {
  name: 'dPeer',
  description: 'YOUR_PROJECT_DESCRIPTION',
  url: 'https://your-project-website.com/',
  icons: ['https://your-project-logo.com/'],
  redirect: {
    native: 'YOUR_APP_SCHEME://',
    universal: 'YOUR_APP_UNIVERSAL_LINK.com',
  },
};

function App() {
  const {open, isConnected} = useWalletConnectModal();

  return (
    <>
      <Pressable onPress={open}>
        <Text>{isConnected ? 'View Account' : 'Connect'}</Text>
      </Pressable>
      <WalletConnectModal
        projectId={projectId}
        providerMetadata={providerMetadata}
      />
    </>
  );
}

export default App;
