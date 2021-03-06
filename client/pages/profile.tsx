import React from 'react';
import { EditProfile, ChangePassword } from 'components/profile';
import { Heading, Container } from 'components/ui';
import { MobileBottomMenu } from 'components/core';
import WithAuth from 'components/core/WithAuth';

const Profile: React.FC = () => {
  return (
    <>
      <Container>
        <Heading> My Profile </Heading>
        <EditProfile />
        <ChangePassword />
        <MobileBottomMenu />
      </Container>
    </>
  );
};

export default WithAuth(Profile);
