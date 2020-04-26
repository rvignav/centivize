import { useDocument } from 'react-firebase-hooks/firestore';
import { useUid } from './auth';
import { db } from '../firebase/firebase.utils';

const useUserDoc = () => {
  const [uid, loadingUid] = useUid();
  const [userDoc, loadingUserDoc] = useDocument(db.doc(`users/${uid}`));

  if (loadingUid || loadingUserDoc) {
    return [undefined, true];
  }

  return [userDoc, loadingUserDoc];
};

const useFirstTime = () => {
  const [uid, loadingUid] = useUid();
  const [userDoc, loading] = useDocument(db.doc(`users/${uid}`));

  if (loadingUid) {
    return [undefined, loadingUid];
  }

  return [!userDoc?.exists, loading];
};

export { useFirstTime, useUserDoc };
