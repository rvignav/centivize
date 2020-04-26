import { useAuthState } from 'react-firebase-hooks/auth';
import { useDocument } from 'react-firebase-hooks/firestore';

import { auth, db } from '../firebase/firebase.utils';

const useUser = () => useAuthState(auth);

const useUid = () => {
  const [user, loading] = useUser();

  return [user?.uid, loading];
};

const useLoggedIn = () => {
  const [user, loading] = useUser();

  return [!!user, loading];
};

const useFirstTime = () => {
  const [uid, loadingUid] = useUid();
  const [userDoc, loading] = useDocument(db.doc(`users/${uid}`));

  if (loadingUid) {
    return [undefined, loadingUid];
  }

  return [!userDoc?.exists, loading];
};

export { useLoggedIn, useFirstTime };
