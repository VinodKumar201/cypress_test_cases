import SignUpPage from '../support/pages/signUpPage';

describe('Sign Up Flow', () => {
  const signUpPage = new SignUpPage();

  it('should successfully create a new account', () => {
    // Given
    signUpPage.visit();
    
    // When
    signUpPage.fillInSignUpDetails('Vinod', 'Kumar', 'avinod3201@gmail.com', 'VinuKP#20','VinuKP#20');
    signUpPage.submitForm();
    
    // Then
    signUpPage.verifySuccessfulSignUp();
  });

  it('should show an error if email is already registered', () => {
    // Given
    signUpPage.visit();
    
    // When
    signUpPage.fillInSignUpDetails('Vinod', 'Kumar', 'avinod3201@gmail.com', 'VinuKP#20','VinuKP#20');
    signUpPage.submitForm();
    
    // Then
    signUpPage.verifyEmailExistsError();
  });
});
