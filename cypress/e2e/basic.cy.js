describe('blog experience', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('shows the home page and a list of articles', () => {
    cy.get('h1').contains('Ideias que conectam tecnologia e pessoas');
    cy.get('main article').should('have.length.greaterThan', 0);
    cy.contains('Continuar lendo').should('be.visible');
  });

  it('opens the full information page for an article', () => {
    cy.get('main article h3 a')
      .first()
      .invoke('text')
      .then((title) => {
        cy.contains('Continuar lendo').first().click();
        cy.location('pathname').should('match', /^\/posts\/[^/]+$/);
        cy.get('h1').should('have.text', title.trim());
        cy.contains('Voltar para todos os artigos').should('be.visible');
      });
  });

  it('returns not found for an unknown article', () => {
    cy.request({ url: '/posts/does-not-exist', failOnStatusCode: false }).then(
      (response) => {
        expect(response.status).to.equal(404);
      }
    );
  });

  it('changes the page background when switching to dark theme', () => {
    cy.contains('button', 'Claro').click();
    cy.get('div.min-h-screen')
      .should('have.css', 'background-color', 'rgb(248, 250, 252)')
      .contains('button', 'Escuro')
      .click();
    cy.get('div.min-h-screen').should(
      'have.css',
      'background-color',
      'rgb(30, 41, 59)'
    );
    cy.get('article.group').should(
      'have.css',
      'background-color',
      'rgb(15, 23, 42)'
    );
  });
});
