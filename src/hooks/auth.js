import {useAuthState} from 'react-firebase-hooks/auth';

import {auth} from '../firebase/firebase.utils';

const useUser = () => useAuthState(auth);

const useUid = () => {
  const [user, loading] = useUser();

  return [user?.uid, loading];
};

const useLoggedIn = () => {
  const [user, loading] = useUser();

  return [!!user, loading];
};

export { useUser,useLoggedIn, useUid };
