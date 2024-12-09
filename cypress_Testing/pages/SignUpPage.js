class SignUpPage {
    visit() {
      cy.visit('https://magento.softwaretestingboard.com/');
    }
  
    fillInSignUpDetails(firstName, lastName, email, password,ConfirmPassword) {
      cy.get('#firstname').type(firstName);
      cy.get('#lastname').type(lastName);
      cy.get('#email_address').type(email);
      cy.get('#password').type(password);
      cy.get('#password-confirmation').type(password);
    }
  
    submitForm() {
      cy.get('button[title="Create an Account"]').click();
    }
  
    verifySuccessfulSignUp() {
      cy.contains('Thank you for registering with  Online Clothing Store').should('be.visible');
    }
  
    verifyEmailExistsError() {
      cy.contains('There is already an account with this email address.').should('be.visible');
    }
  }
  
  export default SignUpPage;
  