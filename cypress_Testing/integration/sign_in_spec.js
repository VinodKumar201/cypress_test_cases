import SignInPage from '../support/pages/signInPage';

describe('Sign In Flow', () => {
  const signInPage = new SignInPage();

  it('should successfully sign in with valid credentials', () => {
    // Given
    signInPage.visit();

    // When
    signInPage.enterCredentials('avinod3201@gmail.com', 'VinuKP#20');
    signInPage.submitForm();

    // Then
    signInPage.verifySuccessfulSignIn();
  });

  it('should show an error for invalid credentials', () => {
    // Given
    signInPage.visit();

    // When
    signInPage.enterCredentials('avinod3201@gmail.com', 'KPV#20');
    signInPage.submitForm();

    // Then
    signInPage.verifyInvalidCredentialsError();
  });
});
