import { createThirdwebClient } from 'thirdweb';

const CLIENT_ID = process.env.NEXT_PUBLIC_CLIENT_ID;

if (!CLIENT_ID) {
  throw new Error('Client ID must be provided');
}

export const client = createThirdwebClient({
    clientId: CLIENT_ID,
});
