import React, { useState } from 'react';
import styled from 'styled-components/native';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import Logos from '../../assets/images/Atom_walk_logo.jpg'
const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <Container>
      {/* Logo Section */}
      <LogoContainer>
        <Logo source={Logos} resizeMode="contain" />
      </LogoContainer>

      {/* Login Text */}
      <Title>Log In</Title>
      <Subtitle>Enter Your Details to Login</Subtitle>

      {/* Input Fields Section */}
      <InputContainer>
        <InputWrapper>
          <MaterialIcons name="person-outline" size={20} color="#6c757d" />
          <Input
            placeholder="Enter your user name"
            value={username}
            onChangeText={setUsername}
            placeholderTextColor="#6c757d"
          />
        </InputWrapper>

        <InputWrapper>
          <MaterialIcons name="lock-outline" size={20} color="#6c757d" />
          <Input
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!isPasswordVisible}
            placeholderTextColor="#6c757d"
          />
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <MaterialIcons
              name={isPasswordVisible ? 'visibility' : 'visibility-off'}
              size={20}
              color="#6c757d"
            />
          </TouchableOpacity>
        </InputWrapper>
      </InputContainer>

      {/* Sign In Button */}
      <Button>
        <ButtonText>Sign In</ButtonText>
      </Button>

      {/* Forgot Password Text */}
      <ForgotPasswordText>Forgot password</ForgotPasswordText>

      {/* Bottom Navigation */}
      <BottomNav>
        <FontAwesome name="sign-in" size={24} color="#e74c3c" />
        <NavText>Login</NavText>
      </BottomNav>
    </Container>
  );
};

// Styled Components
const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
`;

const LogoContainer = styled.View`
  margin-bottom: 30px;
`;

const Logo = styled.Image`
  width: 200px;
  height: 100px;
`;

const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  color: #000;
  margin-bottom: 5px;
`;

const Subtitle = styled.Text`
  font-size: 14px;
  color: #6c757d;
  margin-bottom: 30px;
`;

const InputContainer = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;

const InputWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #f1f3f5;
  padding: 10px 15px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #dfe2e5;
`;

const Input = styled.TextInput`
  flex: 1;
  padding: 0 10px;
  color: #000;
`;

const Button = styled.TouchableOpacity`
  background-color: #0062cc;
  padding: 15px;
  border-radius: 8px;
  align-items: center;
  width: 100%;
  margin-bottom: 15px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

const ForgotPasswordText = styled.Text`
  font-size: 14px;
  color: #6c757d;
  margin-bottom: 20px;
`;

const BottomNav = styled.View`
  flex-direction: row;
  align-items: center;
  position: absolute;
  bottom: 20px;
`;

const NavText = styled.Text`
  font-size: 14px;
  color: #e74c3c;
  margin-left: 5px;
`;

export default LoginScreen;
