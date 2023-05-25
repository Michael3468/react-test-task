import { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import { fetchUserInfoRequest } from '../store/actions/userInfoActions';
import { RootState } from '../store/reducers/rootReducer';
import { TUserInfo, TUserInfoState } from '../types';

const UserInfo = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [userInfo, setUserInfo] = useState<TUserInfo>(null);
  const { pending, user, error } = useSelector((state: RootState) => state.user) as TUserInfoState;

  useEffect(() => {
    if (id) {
      dispatch(fetchUserInfoRequest(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    setUserInfo(user);
  }, [user]);

  return (
    <>
      {pending && <div>Loading...</div>}
      {error && <div>{`error: ${error}`}</div>}
      {userInfo && (
        <Card style={{ padding: 20, maxWidth: 320 }}>
          <span style={{ fontWeight: 'bold', fontSize: 22 }}>User Info:</span>
          <div>{`Name: ${userInfo?.name}`}</div>
          <div>{`Username: ${userInfo?.username}`}</div>
          <div>{`Email: ${userInfo?.email}`}</div>
          <div>{`Website: ${userInfo?.website}`}</div>
          <div>{`Phone: ${userInfo?.phone}`}</div>
          <div>{`Company: ${userInfo?.company?.name}`}</div>
          <div>{`City: ${userInfo?.address?.city}`}</div>
        </Card>
      )}
    </>
  );
};

export default UserInfo;
