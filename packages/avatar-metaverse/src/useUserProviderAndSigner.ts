import { Provider } from '@ethersproject/providers';
import { ethers, Signer } from 'ethers';
import { useMemo, useState } from 'react';
import { JsonRpcProvider, Web3Provider } from '@ethersproject/providers';
import { useBurnerSigner } from 'eth-hooks';
import { TEthersProvider, TProviderAndSigner, TEthersProviderOrSigner } from './providerTypes';

const syncBurnerKeyFromStorage = (): void => {
  if(typeof window !== "undefined"){
    if (window.location.pathname && window.location.pathname.includes('/pk')) {
      const incomingPK = window.location.hash.replace('#', '');

      if (incomingPK.length === 64 || incomingPK.length === 66) {
        console.log('🔑 Incoming Private Key...');
        const rawPK = incomingPK;
        window.history.pushState({}, '', '/');
        const currentPrivateKey = window.localStorage.getItem('metaPrivateKey');
        if (currentPrivateKey && currentPrivateKey !== rawPK) {
          window.localStorage.setItem(`metaPrivateKey_backup${Date.now()}`, currentPrivateKey);
        }
        window.localStorage.setItem('metaPrivateKey', rawPK);
      }
    }
  }
};

/**
 *  Gets user provider/signer from injected provider or local provider
 *  Use your injected provider from 🦊 Metamask
 *  If you don't have it then instantly generate a 🔥 burner wallet from a local provider
 *
 ~ Features ~
 - Specify the injected provider from Metamask
 - Specify the local provider
 - Usage examples:
 const tx = Transactor(userSigner, gasPrice)
 * @param injectedProviderOrSigner (TEthersProviderOrSigner) :: injected provider/signer from metamask etc..
 * @param localProvider (TEthersProvider) local provider to generate a burner wallet from
 * @returns (TProviderAndSigner)
 */
export const useUserProviderAndSigner = (
  injectedProviderOrSigner: TEthersProviderOrSigner | undefined,
  localProvider: TEthersProvider
): TProviderAndSigner | undefined => {
  const [signer, setSigner] = useState<Signer>();
  const [provider, setProvider] = useState<Provider>();
  const [providerNetwork, setProviderNetwork] = useState<ethers.providers.Network>();
  // @ts-ignore
  const burnerSigner = useBurnerSigner(localProvider);

  useMemo(() => {
    if (injectedProviderOrSigner) {
      console.log('🦊 Using injected provider');
      void parseProviderOrSigner(injectedProviderOrSigner).then((result) => {
        if (result != null) setSigner(result.signer);
      });
    } else if (!localProvider) {
      setSigner(undefined);
    } else {
      syncBurnerKeyFromStorage();
      console.log('🔥 Using burner signer', burnerSigner);
      // @ts-ignore
      setSigner(burnerSigner);
    }
  }, [injectedProviderOrSigner, localProvider, burnerSigner]);

  useMemo(() => {
    if (signer) {
      const result = parseProviderOrSigner(signer);
      void result.then((r) => {
        setProvider(r.provider);
        setProviderNetwork(r.providerNetwork);
      });
    }
  }, [signer]);

  return { signer, provider, providerNetwork };
};


export const parseProviderOrSigner = async (
  providerOrSigner: TEthersProviderOrSigner | undefined
): Promise<TProviderAndSigner> => {
  let signer: Signer | undefined = undefined;

  let provider: ethers.providers.Provider | undefined;
  let providerNetwork: ethers.providers.Network | undefined;

  if (providerOrSigner && (providerOrSigner instanceof JsonRpcProvider || providerOrSigner instanceof Web3Provider)) {
    const accounts = await providerOrSigner.listAccounts();
    if (accounts && accounts.length > 0) {
      // @ts-ignore
      signer = providerOrSigner.getSigner();
    }
    // @ts-ignore
    provider = providerOrSigner;
    providerNetwork = await providerOrSigner.getNetwork();
  }

  if (!signer && providerOrSigner instanceof Signer) {
    signer = providerOrSigner;
    provider = signer.provider;
    providerNetwork = provider && (await provider.getNetwork());
  }
  return { signer, provider, providerNetwork } as TProviderAndSigner;
};
