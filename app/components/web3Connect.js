import {nftContract} from './config';
import NFTABI from './nftabi.json';
import {Pressable, Text} from 'react-native';
import {
  WalletConnectModal,
  useWalletConnectModal,
} from '@walletconnect/modal-react-native';
const projectId = '9ba81a4162c222bbbcd8743f259fd999';
import {useWeb3Modal} from '@web3modal/react-native';
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

// export async function checkNFTOwnership() {
//   const web3Modal = new useWeb3Modal();
//   const connection = await web3Modal.connect();
//   const provider = new ethers.providers.Web3Provider(connection);
//   const signer = provider.getSigner();
//   const addressraw = signer.getAddress();
//   const addressstr = (await addressraw).valueOf();
//   let contract = new ethers.Contract(nftContract, NFTABI, signer);
//   let getids = await contract.walletOfOwner(addressstr);
//   console.log('shibbal');
// }

function App() {
  const {open, isConnected} = useWalletConnectModal();

  const handleConnect = async () => {
    // You need to replace 'userWalletAddress' with the actual wallet address of the user.
    const userWalletAddress = '0x12345'; // Replace with the user's wallet address.

    const hasNFT = await checkNFTOwnership(userWalletAddress);

    if (hasNFT) {
      open();
    } else {
      // Deny login if the user doesn't have the NFT.
      alert('You do not have the required NFT to log in.');
    }
  };

  return (
    <>
      <Pressable onPress={handleConnect}>
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
